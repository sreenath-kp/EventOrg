from django.contrib.auth import login
from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView
from .forms import RegistrationForm

# Create your views here.


class RegistrationView(CreateView):
    # Create an HTML template for registration
    template_name = 'registration/register.html'
    form_class = RegistrationForm

    def form_valid(self, form):
        # Log in the user after successful registration
        login(self.request, form.instance)
        return super().form_valid(form)
