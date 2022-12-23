from django.urls import path, include
from comment import views


urlpatterns = [
    path('', views.video_comments),
    path('post/', views.user_comments),
]