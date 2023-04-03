from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from flowers.views import FlowerView, BasketView
from django.conf.urls.static import static

from authication import routers as authication_routers
from flowers import routers as flowers_routers
from buyer import routers as buyer_routers
from payment import routers as payment_routers

urlpatterns = [
    path('admin/', admin.site.urls),
    # TODO: can i not specify this? path("", include...)
    path("", include(flowers_routers.urlpatterns)),
    path("", include(authication_routers.urlpatterns)),
    path("", include(payment_routers.urlpatterns))
]


urlpatterns += buyer_routers.urlpatterns
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
