from django.db import models

# Create your models here.
class Language(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=30)
    linkLang = models.CharField(max_length=200 ,default="")
    
    def __str__(self):
        return self.title
    
    
class Project(models.Model):
    title = models.CharField(max_length=30)
    image = models.ImageField()
    linkProject = models.CharField(max_length=200)
    linkVideo = models.CharField(max_length=200 ,default="")
    linkHost = models.CharField(max_length=200 ,default="")
    
    def __str__(self):
        return self.title
    
    
    
class Ghost(models.Model):
    title = models.CharField(max_length=30)
    image = models.ImageField()
    
    def __str__(self):
        return self.title