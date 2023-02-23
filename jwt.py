import jwt
import time


with open('', 'r') as f:
    private_key = f.read()

# Define the payload for the JWT
payload = {
    'iat': int(time.time()), 
    'exp': int(time.time()) + 600,
    'sub': 'user123'  
}


jwt_encoded = jwt.encode(payload, private_key, algorithm='RS256')


print(jwt_encoded)




