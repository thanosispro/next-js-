# Generated by Django 5.1.2 on 2024-11-24 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_customuser_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='games',
            name='file',
        ),
        migrations.AddField(
            model_name='games',
            name='url',
            field=models.URLField(default=''),
        ),
    ]
