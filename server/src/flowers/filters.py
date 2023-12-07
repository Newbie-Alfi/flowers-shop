from django_filters import rest_framework as filters
from .models import Flower, Basket
# from django.db.models import Q


class BasketFilter(filters.FilterSet):
    user = filters.CharFilter(
        method='search_by_with_sale', label="Пользователь")

    class Meta:
        model = Basket
        fields = ['user']

    def search_by_with_sale(self, queryset, name, value):
        return queryset.filter(user=value)


class FlowerFilter(filters.FilterSet):
    with_sale = filters.BooleanFilter(
        method='search_by_with_sale', label="Со скидкой")
    # TODO: сhange iregex to icontains.
    name = filters.CharFilter(lookup_expr='iregex')

    class Meta:
        model = Flower
        fields = ('сategories',)

    def search_by_with_sale(self, queryset, name, value):
        return queryset.filter(sale_id__isnull=not value)
