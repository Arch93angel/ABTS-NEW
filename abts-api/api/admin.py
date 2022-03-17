from django.contrib import admin
from .models import Group, Event, UserProfile


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = ('user', 'image')
    list_display = ('id', 'user', 'image')


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ('name', 'location', 'description')
    list_display = ('id', 'name', 'location', 'description')


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    fields = ('title', 'location', 'time',
              'about_event', 'status', 'group')
    list_display = ('id', 'title', 'location', 'time',
                    'about_event', 'status', 'group')
