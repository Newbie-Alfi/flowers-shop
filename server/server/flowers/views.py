from django.core.exceptions import PermissionDenied
from django.db.models import Q
from rest_framework import status
from django.http import HttpResponse
from django.contrib.auth.models import User
from .filters import FlowerFilter, BasketFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Flower, Basket, Sale
from .serializer import FlowerSerializer, SaleSerializer, BasketSerializer, BasketCreateSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from django.shortcuts import render


class BasketView(ModelViewSet):
    queryset = Basket.objects.all()
    serializer_class = BasketSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = BasketFilter

    def list(self, request):
        def get_queryset():
            if request.user.is_authenticated:
                user_id = User.objects.get(username=request.user).id
                queryset = Basket.objects.filter(user=user_id)
                return queryset
            else:
                raise PermissionDenied

        queryset = get_queryset()
        queryset = self.filter_queryset(queryset)
        page = self.paginate_queryset(queryset)
        serializer = BasketSerializer(page, many=True)
        return self.get_paginated_response(serializer.data)

    def create(self, request):
        user_id = User.objects.get(username=request.user).id

        if user_id is None:
            raise PermissionDenied

        queryset = request.data
        queryset._mutable = True
        queryset['user'] = user_id

        serializer = BasketCreateSerializer(data=queryset, many=False)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


class FlowerView(ReadOnlyModelViewSet):
    queryset = Flower.objects.all()
    serializer_class = FlowerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = FlowerFilter
