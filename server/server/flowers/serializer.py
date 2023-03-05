from rest_framework import serializers

from .models import Flower, Sale, Basket


class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = "__all__"


class FlowerSerializer(serializers.ModelSerializer):
    sale = SaleSerializer(source="sale_id")
    # img = serializers.SerializerMethodField()
    # print(sale)

    class Meta:
        model = Flower
        # fields = "__all__"
        fields = ("name", "img", "id", "price", "sale")

    # def get_img(self, car):
    #     request = self.context.get('request')
    #     img = car.img.url
    #     return request.build_absolute_uri(photo_url)


class BasketCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Basket
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    flower = FlowerSerializer(source="flower_id")

    class Meta:
        model = Basket
        fields = ("flower", "number")
