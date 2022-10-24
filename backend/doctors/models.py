from django.db import models

class Doctor(models.Model):
    email = models.EmailField()
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50)
    clinic = models.CharField(max_length=50)

    class Meta:
        ordering = ('-id', )

    def __str__(self):
        return self.email
