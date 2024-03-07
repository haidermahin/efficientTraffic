from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer
# Create your views here.

class ContactFormSubmissionView(APIView):
    def post(self , request):
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



