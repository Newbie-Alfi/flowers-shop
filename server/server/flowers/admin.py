
from django.contrib import admin
from .models import Flower, Sale, Basket

admin.site.register(Flower, admin.ModelAdmin)
admin.site.register(Sale, admin.ModelAdmin)
admin.site.register(Basket, admin.ModelAdmin)
