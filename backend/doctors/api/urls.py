from django.urls import path

from .views import *

urlpatterns = [
    path('', DoctorList.as_view(), name="doctors"),
    path('<int:pk>/', DoctorDetail.as_view(), name="doctor-detail"),
]
