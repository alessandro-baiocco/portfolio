from django.urls import path
from . import views

urlpatterns = [
    path('', views.myportfolio ),
    path('about', views.aboutme)
]
