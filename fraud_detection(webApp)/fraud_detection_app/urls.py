from django.urls import path
from . import views

urlpatterns = [
    path('detect/', views.detect_fraud, name='fraud-detect'),

    path('upload/', views.upload_file, name='upload-file'),  # Ensure this line exists

]
