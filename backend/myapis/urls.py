import imp
from django.urls import include, path
from rest_framework import routers                 
from myapis.views import UserModelView  ,RecordModelView
from .views import handleuserdata
router = routers.DefaultRouter()                   
router.register(r'allusers', UserModelView) 
router.register(r'records',RecordModelView)

urlpatterns = [
    path('',include(router.urls)),
    path('test/',handleuserdata)
]
