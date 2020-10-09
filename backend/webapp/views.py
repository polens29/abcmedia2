import hashlib
from datetime import datetime

from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView

from webapp.models import Data
from webapp.serializers import TableSerializer


class BaseAPIView(APIView):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.response = {
            "success": True,
            "message": "",
            "data": []
        }


class DataAPI(BaseAPIView):

    def get_all(self):
        contacts = Data.objects.all()
        data = []
        for contact in contacts:
            data.append(TableSerializer(contact).data)
        return data

    def get(self, request):
        return Response(self.get_all())

    def post(self, request):
        fields = ['name', 'address']
        data = {}
        for field in fields:
            data[field] = request.data.get(field)

        Data.objects.create(**data)

        return Response(self.get_all())

    def put(self, request):
        id = request.data.get('id')
        contact = Data.objects.get(pk=id)
        contact.name = request.data.get('name')
        contact.address = request.data.get('address')
        contact.save()

        return Response(self.get_all())

    def delete(self, request):
        id = request.data.get('id')
        contact = Data.objects.get(pk=id)
        contact.delete()

        return Response(self.get_all())