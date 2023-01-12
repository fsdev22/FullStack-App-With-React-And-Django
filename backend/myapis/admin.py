from django.contrib import admin

from myapis.models import UserModel,Record

# Register your models here.

admin.site.register(Record)

@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'phone','related_to')
    list_filter = ("related_to", )
    search_fields = ("username__startswith", )
