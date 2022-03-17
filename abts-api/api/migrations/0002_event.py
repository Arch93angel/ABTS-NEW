# Generated by Django 4.0.3 on 2022-03-13 06:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('time', models.DateTimeField()),
                ('status', models.CharField(choices=[('PENDING', 'Pending'), ('ON-GOING', 'On-going'), ('CLOSED', 'Closed')], max_length=9)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='api.group')),
            ],
            options={
                'unique_together': {('title', 'location')},
            },
        ),
    ]
