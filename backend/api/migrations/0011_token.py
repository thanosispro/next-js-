# Generated by Django 5.1.2 on 2024-11-23 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_games_file_alter_customuser_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=200)),
                ('token', models.TextField()),
            ],
        ),
    ]
