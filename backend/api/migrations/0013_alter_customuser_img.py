# Generated by Django 5.1.2 on 2024-11-23 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_customuser_img_alter_customuser_val_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='img',
            field=models.ImageField(default='/users/default.png', upload_to='users'),
        ),
    ]