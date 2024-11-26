
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyUserSerializers
from django.urls import path , include

from . import views
from .views import get_games,add_users
from rest_framework_simplejwt.views import TokenObtainPairView
urlpatterns = [
    
    path('login/',TokenObtainPairView.as_view()),
    path('add_users/',add_users.as_view()),
    path('get_games/',get_games.as_view()),
    path('decode/',views.decode),
    path('get_one/',views.get_one),
    path('reset_password/',views.reset_password),
    path('change_password/',views.change_password.as_view()),
    path('increase_download/',views.increase_download)



]
