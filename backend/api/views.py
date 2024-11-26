from django.shortcuts import render
from .serializers import MyUserSerializers,MyGamesSerializer,ChangePasswordSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
# Create your views here.
from django.core.mail import EmailMessage
from django.conf import settings

from django.core.mail import send_mail
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .myclass import MyCustomPagination
from .models import CustomUser
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import CustomUser,Games,Token
from django.db.models import Q
from rest_framework.decorators import api_view,parser_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

# authenticator
JWT_authenticator = JWTAuthentication()


class add_users(APIView):
    def post(self,request):
        
        print(request.data)
        print(request.data['img'])
        serializer =  MyUserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response({'error':serializer.errors})
        return Response({'value':True,'message':'Accounted has been Created'})


class get_games(generics.ListAPIView):
    
    def get_queryset(self):
       query = self.request.GET.get('query')
       if(query):
            return Games.objects.filter(Q(title__icontains=query) | Q(category__icontains =query))
       else:
            return Games.objects.all()
    pagination_class = MyCustomPagination
   # Replace with the field you want to use as the cursor

    serializer_class = MyGamesSerializer



#decoded tthe token
@api_view(['POST','GET'])
def decode(request):
    JWT_authenticator = JWTAuthentication()

# authenitcate() verifies and decode the token
# if token is invalid, it raises an exception and returns 401
    response = JWT_authenticator.authenticate(request)
    if response is not None:
        user,token = response
        
        return Response({'user':token.payload})
    else:
        return Response({'error':'invalid token'})
    
@api_view(['GET'])
def get_one(request):
    id = request.GET.get('id')
    game = Games.objects.filter(id=id)[0]
    game.views+=1
    game.save()
    serializer= MyGamesSerializer(game)
    print(serializer.data)

    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([JSONParser])
def reset_password(request):

    print(request.data)
    email = request.data['email']
    user = CustomUser.objects.filter(email=email)
    if not len(user):
        return Response({'value':False})
    
    token_generator = PasswordResetTokenGenerator()
    token = token_generator.make_token(user[0]) 
    get_token = Token(email=email,token=token)
    subject = 'KrypGame'
    message = f"hello , to reset your password please click here http://localhost:3000/reset_password?token={token}"
   
    get_token.save()
    
    context ={}
    try:
        send_mail(subject, message, settings.EMAIL_HOST_USER, [email])
        context['result'] = 'Email sent successfully'
    except Exception as e:
        context['result'] = f'Error sending email: {e}'
   
    
    print(context)
   


    return Response({'value':True})


class change_password(APIView):
    def get(self,request):
        token = request.GET.get('token')
        user_token = Token.objects.filter(token=token)
        if len(user_token):
            return Response({'value':True})
        else:
            return Response({'value':False})
    def post(self,request):
        
        print(request.data)
        serializer = ChangePasswordSerializer(data=request.data)
        if(serializer.is_valid()):
            main_token = Token.objects.get(token=request.data['token'])
            print(main_token)
            if(main_token):
                user = CustomUser.objects.get(email=main_token.email)
                user.set_password(request.data['password'])
                user.save()
                main_token.delete()
                return Response({'value':True})

        return Response({'value':False})
    

#  views for increasing downloads and vieews in gamers


@api_view(['POST'])
@parser_classes([JSONParser])    
def increase_download(request):
    
    data = request.data
    print(request.data)
    id = data['id']
    print(id)
    game = Games.objects.get(id=id)
    game.downloads+=1
    game.save()

    return Response({'value':True})

        