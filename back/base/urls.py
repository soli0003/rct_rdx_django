from . import views
from django.urls import path
from .views import products_view, TokenObtainPairView
from rest_framework_simplejwt.views import ( TokenRefreshView)

urlpatterns = [
    path('products', products_view.as_view()),
    path('products/<str:category>', products_view.as_view(), name='products_by_category'),
    path('login', views.MyTokenObtainPairView.as_view()),
    path('refresh', TokenRefreshView.as_view()),
    path('register', views.register),
    path('index', views.index),
    
]