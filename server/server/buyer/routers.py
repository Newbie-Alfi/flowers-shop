from rest_framework import routers
from django.urls import path, include
from .views import BuyerViewSet

app_name = "buyer"

urlpatterns = [
    path('buyer/', BuyerViewSet.as_view(), name='buyer'),
]
