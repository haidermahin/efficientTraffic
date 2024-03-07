
from django.contrib import admin
from django.urls import path , include
from TrafficControlApp.views import ContactFormSubmissionView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('TrafficControlApp.urls')),
]
