from rest_framework import routers
from django.urls import path, include
from .views import PaymentViewSet

app_name = "payment"

urlpatterns = [
    path('payment/', PaymentViewSet.as_view(), name='payment'),
]
