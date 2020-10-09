from rest_framework import serializers

from webapp.models import Data

class TableSerializer(serializers.ModelSerializer):

	class Meta:
		model = Data
		fields = ('id','name', 'address')