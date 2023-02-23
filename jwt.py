import jwt
import time


with open('siyaajhawar-app.2023-02-22.private-key', 'r') as f:
    private_key = f.read()

# Define the payload for the JWT
payload = {
      'iss': '292855',
    'iat': int(time.time()), 
    'exp': int(time.time()) + 600,
   
}



encoded_jwt = jwt_instance.encode(payload, signing_key, alg='RS256')
     
print(f"JWT:  ", encoded_jwt)




