# Generated by Django 5.1.2 on 2024-11-14 14:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_customuser_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='image',
            new_name='img',
        ),
    ]
