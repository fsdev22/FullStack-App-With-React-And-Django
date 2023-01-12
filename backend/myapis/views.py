from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import UserModelSerializer,RecordModelSerializer
from .models import UserModel,Record
from rest_framework.decorators import api_view
import json
from django.http import JsonResponse
from rest_framework import status

# Create your views here.
class UserModelView(viewsets.ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = UserModel.objects.all()

class RecordModelView(viewsets.ModelViewSet):
    serializer_class = RecordModelSerializer
    queryset = Record.objects.all()

@api_view(['POST'])
def handleuserdata(request):
    data=''
    count = 0
    if(request.method=='POST'):
        data = json.loads(request.body)
        count = len(data['users'])
        record = Record()
        record.record_name = data['record_name']
        record.save()
        print(record.id)
        for user in data['users']:
            username = user['username']
            email = user['email']
            phone = user['phonenumber']
            address = user['address']
            u = UserModel()
            u.username = username
            u.email=email
            u.phone=phone
            u.address=address
            u.related_to = record
            u.save()

        print(data['users'])
    data['totalnumberofusers'] = count
    return JsonResponse({"data":data},safe=False,status=status.HTTP_200_OK)