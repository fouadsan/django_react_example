from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from doctors.models import Doctor

from .serializers import DoctorSerializer

class DoctorList(ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['^first_name', '^last_name']


class DoctorDetail(RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer



