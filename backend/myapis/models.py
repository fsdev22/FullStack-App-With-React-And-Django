from django.db import models

# Create your models here.
class Record(models.Model):
    record_name = models.TextField(max_length=30)
    def __str__(self):
        return self.record_name

class UserModel(models.Model):
    username = models.TextField(max_length=100,blank=True)
    email = models.EmailField()
    address = models.TextField(max_length=300)
    phone = models.TextField(max_length=10)
    createdDate = models.DateTimeField(auto_now_add=True,blank=True)
    related_to = models.ForeignKey(Record,on_delete=models.CASCADE)

    def __str__(self):
        return self.username+' '+self.email
