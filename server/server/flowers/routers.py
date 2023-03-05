from rest_framework import routers

from .views import FlowerView, BasketView

app_name = "flowers"

router = routers.SimpleRouter()

router.register("flowers", FlowerView)
router.register("basket", BasketView)

urlpatterns = router.urls
