from rest_framework import routers

from .views import FlowerView

app_name = "flowers"

router = routers.SimpleRouter()
router.register("flowers/", FlowerView)

urlpatternss = router.urls
