from django.urls import path
from .views import ContactFormSubmissionView

urlpatterns = [
    path('form/', ContactFormSubmissionView.as_view(), name='form-data'),
]