from django.db import models
from django.contrib.auth.models import User


class Card(models.Model):
    number = models.CharField(max_length=64)
    expiration_date = models.CharField(max_length=5)


class Buyer(models.Model):
    class PaymentMethod(models.TextChoices):
        CARD = 'Оплата картой'
        CASH = 'Наличная оплата'
    # Probably need to add amount of purchase
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=64)
    is_male = models.BooleanField()
    personal_discount = models.IntegerField(
        'Персональная скидка в процентах', blank=True, default=0)
    payment_method = models.CharField(
        max_length=128,
        choices=PaymentMethod.choices,
        default=PaymentMethod.CASH,
    )
    card = models.ForeignKey(
        Card, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.user.username
