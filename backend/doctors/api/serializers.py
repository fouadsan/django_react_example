from rest_framework import serializers

from doctors.models import Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('id', 'email', 'first_name', 'last_name', 'phone_number', 'clinic')
