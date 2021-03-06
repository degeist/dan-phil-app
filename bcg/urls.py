"""bcg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from . import views
import artboard.views as artboard

urlpatterns = [
	url(r'^$', views.HomeView, name='home'),
	url(r'^upload/$', artboard.upload, name='upload'),
	url(r'^upload/complete$', artboard.direct_upload_complete, name='direct_upload_complete'),
    url(r'^artboard/(?P<version_id>[\w-]+)/(?P<image_id>[\w-]+).(?P<image_extension>[\w-]+)/$', artboard.view, name='view'),
    url(r'^artboard/(?P<image_id>[\w-]+).(?P<image_extension>[\w-]+)/$', artboard.view, name='view'),
    url(r'^admin/', admin.site.urls),
    url(r'^loaderio-04d21c600a033086b4bf93a25a5cdeb8.txt$', views.Loaderio, name='Loaderio'),
]
