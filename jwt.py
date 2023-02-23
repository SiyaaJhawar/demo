
import jwt
import time 
import sys
import os

if len(sys.argv) > 1:
    pem = sys.argv[1]
else:
   pem = os.path.expanduser("~/Downloads/siyaajhawar-app.2023-02-22.private-key")
pem_abs_path = os.path.abspath(pem)


with open(pem_abs_path, 'r') as f:
    private_key = f.read()


print(private_key)   

if len(sys.argv) > 2:
    app_id = sys.argv[2]
else:
    app_id = input("292855 ") 

with open(pem, 'rb') as pem_file:
    signing_key = jwt.jwk_from_pem(pem_file.read())
    
payload = {
  
    'iat': int(time.time()),
  
    'exp': int(time.time()) + 600, 

    'iss': app_id 
}
    

jwt_instance = jwt.JWT()
encoded_jwt = jwt_instance.encode(payload, signing_key, alg='RS256')
     
print(f"JWT:  ", encoded_jwt)
