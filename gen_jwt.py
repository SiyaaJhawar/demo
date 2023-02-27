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
import datetime
import subprocess
# Define the payload of the token
payload = {
    'iat': datetime.datetime.utcnow(),
    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=10),
    'iss': '292855' # token expiration time
}

# Load the private key from the PEM file
with open('siyaajhawar-app.2023-02-22.private-key.pem', 'r') as f:
    private_key = f.read()

print(private_key)

# Generate the JWT token using the private key
jwt_token = jwt.encode(payload, private_key, algorithm='RS256')

print(jwt_token)
# Define the command to execute
command = ['curl', '-i', '-X', 'POST', '-H', 'Authorization: jwt_token', '-H', 'Accept: application/vnd.github+json', 'https://api.github.com/app/installations/34148902/access_tokens']

# Execute the command
result = subprocess.run(command, capture_output=True)
print(result.stdout.decode())
