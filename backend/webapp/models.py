from django.db import models

# Create your models here.

class Data(models.Model):
    name = models.CharField(max_length=100, null=False)
    address = models.CharField(max_length=300, null=False)
