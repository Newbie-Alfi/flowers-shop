from django.db import models
from django.contrib.auth.models import User


class Sale(models.Model):
    name = models.CharField(max_length=64)
    number = models.IntegerField(blank=True, null=True)
    percent = models.IntegerField(blank=True, null=True)
    img = models.ImageField(upload_to="images/sales/",
                            verbose_name="Изображение")
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class ProductСategory(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class ProductImageModel(models.Model):
    img = models.ImageField(upload_to="images/", verbose_name="Изображение")

    def __str__(self):
        return self.img.name


class Flower(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    sale = models.ForeignKey(
        Sale, on_delete=models.CASCADE, blank=True, null=True)
    сategories = models.ManyToManyField(ProductСategory)
    images = models.ManyToManyField(ProductImageModel)

    def __str__(self):
        return self.name


class Wishlist(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE)
    flower = models.ForeignKey(
        Flower, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'flower',)

    def __str__(self):
        return self.user.username + " - " + self.flower.name


class Basket(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE)
    flower = models.ForeignKey(
        Flower, on_delete=models.CASCADE)
    number = models.IntegerField(default=1)

    class Meta:
        unique_together = ('user', 'flower',)

    def __str__(self):
        return self.user.username + " - " + self.flower.name
