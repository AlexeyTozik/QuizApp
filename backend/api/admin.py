from django.contrib import admin

from .models import *

admin.site.register(Question)
admin.site.register(Test)
admin.site.register(Topic)
admin.site.register(Difficulty)
admin.site.register(Awnser)