# Generated by Django 2.1.1 on 2018-09-20 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0010_auto_20180920_0454'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aircraft',
            name='photo',
            field=models.ImageField(default='/media/plane.jpg', upload_to=''),
        ),
    ]