from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Language, Project , Ghost

# Create your views here.

def myportfolio(request):
    ghost = Ghost.objects.all().values()
    template = loader.get_template("myportfolio/myhome.html")
    context = {"aliens" : ghost}
    return HttpResponse(template.render(context, request))
    # return render(request , 'myportfolio/myhome.html' , {'ghost' : ghost})

def aboutme(request):
    languages = Language.objects.all()
    return render(request , 'myportfolio/aboutme.html' , {'languages': languages})

def myproject(request):
    project = Project.objects.all()
    return render(request , 'myportfolio/myproject.html' , {'project': project})
