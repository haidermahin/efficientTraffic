from django.db import models

# Create your models here.

class ContactFormSubmission(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField()
    mobile = models.CharField(max_length=20)
    message = models.TextField()
    
