

import jwt


import time 
import sys
import os
from jwcrypto import jwk



if len(sys.argv) > 1:
    pem = sys.argv[1]

else:
    with open('siyaajhawar-app.2023-02-22.private-key.pem', 'r') as f:
     pem = f.read()  
if len(sys.argv) > 2:
    app_id = sys.argv[2]
else:
    app_id = "292855" 
    
pem_file = "siyaajhawar-app.2023-02-22.private-key.pem"

with open(pem_file, 'rb') as pem:
     pem_content = pem.read()
     signing_key = jwk.JWK.from_pem(pem_content)
    

   
    
    
payload = {
 
    'iat': int(time.time()),
    # JWT expiration time (10 minutes maximum)
    'exp': int(time.time()) + 600, 
    # GitHub App's identifier
    'iss': app_id
}
    
# Create JWT

encoded_jwt = jwt.encode(payload, 'signing_key', algorithm='HS256')
     
print(f"JWT:  ", encoded_jwt)



