# Generated by Django 5.1.2 on 2024-11-24 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_remove_games_file_games_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='games',
            name='url',
            field=models.TextField(default=''),
        ),
    ]
