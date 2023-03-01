from django.contrib import admin
from django.urls import include, path
from flowers.router import urlpatternss
from django.conf import settings
from flowers.views import FlowerView, BasketView
from django.conf.urls.static import static
from authication.routers import auth_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('flowers/', FlowerView.as_view({'get': 'list'}), name="flowers"),
    path('basket/', BasketView.as_view({'get': 'list'}), name="basket")
    # path('', include(urlpatternss))
]

urlpatterns += auth_urlpatterns
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
