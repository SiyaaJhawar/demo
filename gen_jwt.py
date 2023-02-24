'''
import jwt
import datetime

app_id = '292855'

# Read the PEM file
with open('siyaajhawar-app.2023-02-22.private-key.pem', 'r') as f:
    private_key = f.read()

# Set the payload
payload = {
    'iat': datetime.datetime.utcnow(),
    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
    'iss': app_id
}

# Generate the token
token = jwt.encode(payload, private_key, algorithm='RS256')
print('%s' % token)
'''
import jwt
from datetime import datetime, timedelta

# Define the payload of the token
payload = {
    'iat': datetime.datetime.utcnow(),
    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
    'iss':  '292855' # token expiration time
}

# Load the private key from the PEM file
with open('siyaajhawar-app.2023-02-22.private-key.pem', 'r') as f:
    private_key = f.read()

print(private_key)

# Generate the JWT token using the private key
jwt_token = jwt.encode(payload, private_key, algorithm='RS256')

print(jwt_token)
