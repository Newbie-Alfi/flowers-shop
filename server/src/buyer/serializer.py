from rest_framework import serializers
from django.db.models import Q
from django.contrib.auth.models import User
from django.forms import model_to_dict
from collections import OrderedDict

from .models import Buyer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "first_name",
                  "last_name", "email", "date_joined",)


class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = "__all__"

    def to_representation(self, instance):
        buyer = super().to_representation(instance)
        django_user = model_to_dict(instance.user)
        allowed_fields = ("id", "username", "first_name",
                          "last_name", "email", "date_joined",)
        items = list(buyer.items())

        for key, value in django_user.items():
            if key in allowed_fields:
                items.append((key, value))

        items.sort()
        buyer = OrderedDict(items)
        return buyer
