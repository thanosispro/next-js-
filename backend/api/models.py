from django.db import models
from django.contrib.auth.models import AbstractUser

GAMES_CHOICES =( 
    ("Chess", "Chess"), 
    ("CounterStrike", "CounterStrike"), 
    ("GTA", "GTA"), 
    ("VALORANT", "VALORANT"), 
    ("FIFA", "FIFA"), 
) 

# Create your models here.
class CustomUser(AbstractUser):
    username = models.CharField(max_length = 50, blank = True, null = True, unique = False)
    email = models.EmailField(unique=True,max_length=50)
    val_password =  models.CharField(max_length=200,default='',blank=True)
    img = models.ImageField(upload_to="users",default='/users/default.png')
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    

class Games(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200,default='')
    description = models.TextField(default='')
    date =  models.DateField(auto_now_add=True)
    downloads = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    image =  models.ImageField(upload_to="image")
    category =  models.CharField(choices=GAMES_CHOICES,default='GTA',max_length=200)
    url =  models.TextField(default='')
    def __str__(self):
        return self.title
    
class Token(models.Model):
    email = models.EmailField(max_length=200)
    token=models.TextField()
    def __str__(self):
        return self.email