from django.conf.urls import include
from django.db import router
from api import views
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, re_path as url

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)
router.register(r'events', views.EventViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
    url('authenticate/', views.CustomObtainAuthToken.as_view())
]
