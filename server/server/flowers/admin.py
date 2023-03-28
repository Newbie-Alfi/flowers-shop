
from django.contrib import admin
from .models import Flower, Sale, Basket, Wishlist, ProductСategory, ProductImageModel

admin.site.register(Flower, admin.ModelAdmin)
admin.site.register(Sale, admin.ModelAdmin)
admin.site.register(Basket, admin.ModelAdmin)
admin.site.register(Wishlist, admin.ModelAdmin)
admin.site.register(ProductСategory, admin.ModelAdmin)
admin.site.register(ProductImageModel, admin.ModelAdmin)
