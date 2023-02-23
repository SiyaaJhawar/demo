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


jwt_encoded = jwt.encode(payload, private_key, algorithm='RS256')


print(jwt_encoded.decode())




