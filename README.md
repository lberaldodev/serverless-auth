## INFO

NodeJS serverless function para auth utilizando JWT e mock de escopos.

Os mocks de usuarios estao em: /db/users.json.

Para fazer login, basta utilizar o verbo:

POST/login

Para testar os scopes basta rodar:

GET/public
GET/private

cada usuario possui seu escopo e só deve visualizar aquilo que seu escopo permite.