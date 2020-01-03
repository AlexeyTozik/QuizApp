from django.urls import path

from .views import tests
urlpatterns = [
    path('', tests, name='test-api-view')
]