# Generated by Django 2.2.7 on 2019-11-23 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0006_auto_20191123_1859'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compensation',
            name='additional_info',
            field=models.TextField(blank=True, max_length=2048),
        ),
        migrations.AlterField(
            model_name='compensation',
            name='requirements',
            field=models.TextField(blank=True, max_length=2048),
        ),
    ]
