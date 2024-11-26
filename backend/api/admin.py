from django.contrib import admin
from .models import CustomUser,Games,Token
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class CustomUserAdmin(UserAdmin):
    model =  CustomUser
    fieldsets = (
      (None, {'fields': ('email', 'password', )}),
      (('Personal info'), {'fields': ('first_name', 'last_name','img')}),
      (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                     'groups', 'user_permissions')}),
      (('Important dates'), {'fields': ('last_login', 'date_joined')}),
        
  )
    add_fieldsets = (
      (None, {
          'classes': ('wide', ),
          'fields': ('email', 'password1', 'password2'),
      }),
  )
    list_display = ['email', 'first_name', 'last_name', 'is_staff']
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email', )

admin.site.register(CustomUser,CustomUserAdmin)
admin.site.register((Games,Token))