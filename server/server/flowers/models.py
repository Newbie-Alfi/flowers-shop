from django.db import models
from django.contrib.auth.models import User


class Sale(models.Model):
    name = models.CharField(max_length=64)
    number = models.IntegerField(blank=True, null=True)
    percent = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


class Flower(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    sale_id = models.ForeignKey(
        Sale, on_delete=models.CASCADE, blank=True, null=True)
    img = models.ImageField(
        null=True, blank=True, upload_to="images/", verbose_name="Изображение"
    )

    def __str__(self):
        return self.name


class Basket(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE)
    flower_id = models.ForeignKey(
        Flower, on_delete=models.CASCADE)
    number = models.IntegerField(default=1)

    class Meta:
        unique_together = ('user', 'flower_id',)

    def __str__(self):
        return self.user.username + " - " + self.flower_id.name
