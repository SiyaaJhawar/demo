

import jwt


import time 
import sys
import os
from jwcrypto import jwk
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa



if len(sys.argv) > 1:
  pem_file = sys.argv[1]
else:
  pem_file = "siyaajhawar-app.2023-02-22.private-key.pem"
print(pem_file)
if len(sys.argv) > 2:
  app_id = sys.argv[2]
else:
  app_id = "292855" 
print(app_id)
    
# pem_file = "siyaajhawar-app.2023-02-22.private-key.pem"
with open(pem_file, 'rb') as pem:
  pem_content = pem.read()
  signing_key = jwk.JWK.from_pem(pem_content)
  print(pem_content)
  print(signing_key)
    
payload = {
  'iat': int(time.time()),
  # JWT expiration time (10 minutes maximum)
  'exp': int(time.time()) + 600, 
  # GitHub App's identifier
  'iss': app_id
}
    
# Create JWT
private_key = rsa.generate_private_key(
  public_exponent=65537,
  key_size=2048,
  backend=default_backend()
)

print(private_key)

token = jwt.encode(payload, signing_key, algorithm='RS256')
print(f"JWT:  ", token)

# Verify the token with the public key
public_key = private_key.public_key()
decoded_token = jwt.decode(token, public_key, algorithms=['RS256'])
print(decoded_token)
