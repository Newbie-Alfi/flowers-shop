from rest_framework import serializers
from django.db.models import Q
from django.contrib.auth.models import User

from .models import Flower, Sale, Basket, Wishlist, ProductImageModel, ProductСategory


class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = "__all__"


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImageModel
        fields = "__all__"


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductСategory
        fields = "__all__"


class FlowerSerializer(serializers.ModelSerializer):
    sale = SaleSerializer()
    images = ProductImageSerializer(many=True, read_only=True)
    сategories = ProductCategorySerializer(many=True, read_only=True)
    is_in_basket = serializers.SerializerMethodField()
    is_in_wishlist = serializers.SerializerMethodField()

    class Meta:
        model = Flower
        fields = ("name", "images", "id", "price", "sale",
                  "сategories", "is_in_basket", "is_in_wishlist")

    def get_is_in_basket(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            user_id = User.objects.get(username=user).id
            return Basket.objects.filter(Q(user=user_id) & Q(flower=obj.id)).exists()
        return False

    def get_is_in_wishlist(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            user_id = User.objects.get(username=user).id
            return Wishlist.objects.filter(Q(user=user_id) & Q(flower=obj.id)).exists()
        return False


class BasketCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    flower = FlowerSerializer()

    class Meta:
        model = Basket
        fields = ("flower", "number", "id")
