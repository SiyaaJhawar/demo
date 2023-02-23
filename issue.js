const jwt = require('jsonwebtoken');


const payload = {
  iss: '292855',
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (10 * 60),
};


const privateKey = '-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAzBYlmTriYn8XzmQ0n0HdLei5o/HPP7RIXemGD0hqVOlcbRQk
Nt3TqTNsu89wu8RWDniwdETbnEtDdRz9NDpnnzCXpVwigKVsPyMqaOJoPMMtC3LD
gy1PDQqplGJ98DzemcvVlqLNib1vWUQXGpEbXZ7qY9szKZk0kZMVSlc7hGvKR3K3
O7+MClSr01Js+1CwH8xNQNuE8/JtOILZ+kP2+ZDkIzHcTEHIkIW6Dz/gPrRbqmGy
ezqAGIU3lhgskYCfG7whbdIt2H6bW3e12OlDgWdUnBtSCguFplGafW5aY9EQKA0q
MSD/CsQUoFlgmtTDjgQyyFGrcZkXLFtpWmyjqwIDAQABAoIBABbWq6J4KnlnS5y3
LgRcdIn8rzmfh9fTLv4DchMnwW57JvK1/E9/h3452QMzdaQtlovMCcMZKZJWAdiL
Q/KiTpJL98xzgRDwciqmnspZ+9xA4zuSvjphyaTl+pA2bW2DAk4nt2FCGso9Psa4
jfVVI8DYVdaS4yjWkkFwOkO1e12YF0O77TQrHNhVaEIZpiXk1YfhBzuSj69SWO05
k3ykDjuohJ/WhG7je0PB3fEe0tuSp0WNskH1JZY3Ohrz6r/cHTXJO9rMOBkyrr2d
w8ArYnu1XYWh5v2KoibYjMHpcMEVJZL3Swm+XI+P+rZeyxo0CHVgsfCUwAczqrK+
rkqDvHECgYEA5rdujIaQnVhBptOZV2Em39z6GB5zLUW5yMs3r1s6OfinRceByZZB
/9k/TgEzNdl9a1PAsLTggGg8B7cCbhROrES5Fzcc/9SbExpnzwsmYpLT5xzUBqje
aVU3QWYW/SPdzsb/cS30TC06omnUlOJXAlFrjqjHtqnSLS5M9r3fon0CgYEA4nOh
j02kLlBCVM+gOQNEA1agz9EDoUQtC3vvwgkZIt54GDy4poX4ukqbvh5/k590ad+i
wkIUM+4cW0nBs3dwve0OkkafTB/bKC7A92vYbX6sPN+RsS9GHSw3wK0CzIL5GL6k
GOXOBfGxlA87X0SiPkpPFVA+VCUgRtPpaUjqT0cCgYEAmlsCpRWqTvqrAbfzkVg4
L/GhiN1mZVWO1F3RZYp9TCelkbPGi13xzgBEsCVxY4ect1+TPSXmRUJ3VxoDkC4Z
7HsV8gg3aJmPHpq99PEavzxIdQj+eW4lTwdqLmDk5HtIfHz6jXgXR5fC8MIpLWq4
l55tfUZCR10adovRhgrGQekCgYEAnPxeXxMLI5Q+N79sKroJ12qhtxAGPTEfLRvx
PYnDJDon9V17AO5VXQhF6coI1VUwhgkkMxlOGiYTAHIkV38Q6InDlUJiQoq/Cp9G
5P+dnWK4ksbGoJfOOoEh8W+/RfnyJ+ZZqmz9o39HhQX+OfBBrX8kTflADGNkedWE
tZl33hcCgYBm5JBWdpw5oKEMXJc9z5bKLI4yehnu2q2KsnRmLk9Jy0thL54D/Lf6
rprLbACioOqy/Q8IxZCyw83mHM3tetzpICgLBNA/EucNyVB6pWv/bvwsD6vox6La
nmzBhZaIq0njtkPAK5w3e8FsiABb/SisCpVY+IbSMJlu/L+GyDzs9g==
-----END RSA PRIVATE KEY-----';


const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

console.log(token);


