from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import UserModel,Record
class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'


class RecordModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Record
        fields='__all__'