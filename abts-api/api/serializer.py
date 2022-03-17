from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Group, Event, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('image',)


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer

    class Meta:
        model = User
        fields = ('id', 'username', 'profile')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'location', 'time',
                  'about_event', 'status', 'group')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'location', 'description')


class GroupFullSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True)

    class Meta:
        model = Group
        fields = ('id', 'name', 'location', 'description', 'events')
