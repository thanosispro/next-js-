from rest_framework import serializers
from .models import CustomUser,Games,Token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# my custom User
class MyUserSerializers(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = '__all__'

    
    def validate(self,data):
        if data['password'] != data['val_password']:
            raise serializers.ValidationError('The password didnt match')
        
        if len(data['username']) < 4:
            raise serializers.ValidationError('Username is small')
        
        if len(data['password']) < 4:
            raise serializers.ValidationError('Password is small')
        
        return data

    
    def create(self, validated_data):
        is_img = validated_data.get('img',None)
        if is_img:
            user = CustomUser.objects.create(
                email = validated_data['email'],
                username = validated_data['username'],
                
                img = validated_data['img']
                
            )
        else:
            user = CustomUser.objects.create(
                email = validated_data['email'],
                username = validated_data['username'],
                
            
                
            )
        user.set_password(validated_data['password'])
        user.save()

        return user
    
# games
class MyGamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'
        
#custom token for deecoding
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['user'] = user.username
        token['id'] = user.id
        token['is_staff']=user.is_staff
        token['is_superuser']=user.is_superuser
        token['email']=user.email
        token['img']=user.img.url
        # ...

        return token
    

# change password serializer
class ChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=200,required=True)
    cpassword = serializers.CharField(max_length=200,required=True)
    token = serializers.CharField(max_length=200,required=True)


    def validate(self, data):
        if(data['password'] != data['cpassword']):
            raise serializers.ValidationError('Password didnt Match')
        if len(data['password']) < 5:
            raise serializers.ValidationError('Password is really short')
        
        return data
    

    

        

