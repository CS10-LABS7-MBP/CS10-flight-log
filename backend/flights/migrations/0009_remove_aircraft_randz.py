# Generated by Django 2.1.1 on 2018-09-20 04:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0008_auto_20180920_0418'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aircraft',
            name='randz',
        ),
    ]