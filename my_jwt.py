

import jwt


import time 
import sys
import os
from jwcrypto import jwk
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend

if len(sys.argv) > 1:
    pem = sys.argv[1]

else:
    with open('siyaajhawar-app.2023-02-22.private-key', 'r') as f:
     pem = f.read()  
if len(sys.argv) > 2:
    app_id = sys.argv[2]
else:
    app_id = "292855" 
    
pem_file = "siyaajhawar-app.2023-02-22.private-key"

with open(pem_file, 'rb') as pem:
    pem_content = pem.read()
    signing_key = jwk.JWK.from_pem(pem_content)


 with open('siyaajhawar-app.2023-02-22.private-key.pem', 'rb') as key_file:
    key_data = key_file.read()
    private_key = serialization.load_pem_private_key(
        key_data,
        password=None,
        backend=default_backend()
    )
   
   
    
    
payload = {
 
    'iat': int(time.time()),
    # JWT expiration time (10 minutes maximum)
    'exp': int(time.time()) + 600, 
    # GitHub App's identifier
    'iss': app_id
}
    
# Create JWT

encoded_jwt = jwt.encode(payload, 'signing_key', algorithm='RS256')
     
print(f"JWT:  ", encoded_jwt)



