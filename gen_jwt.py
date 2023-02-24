import jwt
import datetime

# Read the PEM file
with open('private_key.pem', 'r') as f:
    private_key = f.read()

# Set the payload
payload = {
    'sub': '1234567890',
    'name': 'John Doe',
    'iat': datetime.datetime.utcnow(),
    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)
}

# Generate the token
token = jwt.encode(payload, private_key, algorithm='RS256')

print(token)
