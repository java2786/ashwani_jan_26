from django.db import models

# Create your models here.
class Flight(models.Model):
    destination=models.CharField(max_length=100)
    source=models.CharField(max_length=100)
    price=models.IntegerField()
    number_of_seats=models.IntegerField()

    def __str__(self):
        return f"Destination: {self.destination}, Source: {self.source}, Price: {self.price}, AvailableSeats: {self.number_of_seats}"
