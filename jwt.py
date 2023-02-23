


import jwt
import time 
import sys
import os

if len(sys.argv) > 1:
    pem = sys.argv[1]

else:
    with open('siyaajhawar-app.2023-02-22.private-key', 'r') as f:
     private_key = f.read()  
if len(sys.argv) > 2:
    app_id = sys.argv[2]
else:
    app_id = "292855" 
    
with open('siyaajhawar-app.2023-02-22.private-key', 'rb') as pem_file:
  signing_key = jwt.jwk_from_'siyaajhawar-app.2023-02-22.private-key'(pem_file.read())
   
   
    
    
payload = {
 
    'iat': int(time.time()),
    # JWT expiration time (10 minutes maximum)
    'exp': int(time.time()) + 600, 
    # GitHub App's identifier
    'iss': app_id
}
    
# Create JWT
jwt_instance = jwt.JWT()
encoded_jwt = jwt_instance.encode(payload,  signing_key, alg='RS256')
     
print(f"JWT:  ", encoded_jwt)
sys.exit()


