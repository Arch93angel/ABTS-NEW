from django.db import models
from django.contrib.auth.models import User

# Create your models here.


def upload_path_handler(instance, filename):
    return "avatars/{id}/{file}".format(id=instance.user.id, file=filename)


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, related_name='profile', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_path_handler, blank=True)


class Group(models.Model):
    name = models.CharField(max_length=32, null=False, unique=False)
    location = models.CharField(max_length=32, null=False)
    description = models.CharField(max_length=256, null=False, unique=False)

    class Meta:
        unique_together = (('name', 'location'))


class Event(models.Model):
    STATUS = (
        ('PENDING', 'Pending'),
        ('ON-GOING', 'On-going'),
        ('CLOSED', 'Closed'),
    )
    title = models.CharField(max_length=100, null=False,
                             blank=False, unique=False)
    location = models.CharField(max_length=100, blank=False, null=False)
    time = models.DateTimeField(null=False, blank=False)
    about_event = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=9, null=False,
                              blank=False, choices=STATUS)
    group = models.ForeignKey(
        Group, related_name='events', on_delete=models.CASCADE)

    class Meta:
        unique_together = (('title', 'location'))
