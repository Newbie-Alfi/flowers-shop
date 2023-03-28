from rest_framework import routers

from .views import FlowerView, BasketView, SaleView

app_name = "flowers"

router = routers.SimpleRouter()

router.register("flowers", FlowerView)
router.register("basket", BasketView)
router.register("sales", SaleView)

urlpatterns = router.urls
