import jwt
import datetime

app_id = '292855'

# Read the PEM file
with open('siyaajhawar-app.2023-02-22.private-key.pem', 'r') as f:
    private_key = f.read()

# Set the payload
payload = {
    'iat': datetime.datetime.utcnow(),
    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)
    'iss': app_id
}

# Generate the token
token = jwt.encode(payload, private_key, algorithm='RS256')

print('%s' % token)
