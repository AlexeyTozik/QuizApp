from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TestSerializer
from .models import Test

@api_view(['GET'])
def tests(request):

    tests = Test.objects.all()

    serializer = TestSerializer(tests, many=True)

    return Response(serializer.data)


