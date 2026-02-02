from django.urls import path
from . import views

# localhost:8000/flights
urlpatterns = [
    path('', views.all_flights),
]
