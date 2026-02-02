from django.shortcuts import render
from django.http import HttpResponse
from .models import Flight

# Create your views here.
def all_flights(request):
    # return HttpResponse("This is flights page")
    flights = Flight.objects.all()
    print(flights)
    # html files are read from templates folder
    return render(request, "flights.html", {'flights':flights})