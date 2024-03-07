from rest_framework import serializers
from .models import ContactFormSubmission

class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormSubmission
        fields = '__all__'