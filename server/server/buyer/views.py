from django.core.exceptions import PermissionDenied
# from django.db.models import Q
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from .models import Buyer
from .serializer import BuyerSerializer


class BuyerViewSet(APIView):
    serializer_class = BuyerSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        if request.user.is_authenticated:
            queryset = Buyer.objects.get(user__username=request.user)
            serializer = BuyerSerializer(queryset)

            return Response(serializer.data)
        else:
            raise PermissionDenied
