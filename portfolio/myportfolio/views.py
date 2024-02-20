from django.shortcuts import render
from .models import Language, Project

# Create your views here.

def myportfolio(request):
    return render(request , 'myportfolio/myhome.html')

def aboutme(request):
    languages = Language.objects.all()
    return render(request , 'myportfolio/aboutme.html' , {'languages': languages})
