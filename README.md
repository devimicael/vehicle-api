# 🚗 Vehicle Management API

API RESTful para gerenciamento de veículos e usuários, desenvolvida com **Node.js**, **Express.js** e **Prisma ORM**, utilizando **PostgreSQL** como banco de dados.

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/devimicael/vehicle-management-api.git
cd vehicle-management-api
Instale as dependências:

bash
Copiar
Editar
npm install
Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto:

env
Copiar
Editar
PORT=3001
DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/vehicle_db?schema=public"
JWT_SECRET=uma_chave_secreta_bem_segura
Execute as migrações do banco de dados:

bash
Copiar
Editar
npx prisma migrate dev
Inicie o servidor:

bash
Copiar
Editar
npm run dev
🧪 Teste rápido com cURL
bash
Copiar
Editar
curl -X POST http://localhost:3001/api/user/register \
-H "Content-Type: application/json" \
-d '{ "email": "davi@example.com", "password": "12345678" }'
📘 Endpoints da API
👤 Usuário

Método	Rota	Descrição
POST	/api/user/register	Criação de novo usuário
POST	/api/user/login	Login do usuário (JWT Token)
🚘 Veículos

Método	Rota	Descrição
POST	/api/vehicle	Criação de novo veículo
GET	/api/vehicle	Listagem de todos os veículos
PUT	/api/vehicle/:id	Atualizar veículo
DELETE	/api/vehicle/:id	Remover veículo
📥 Estrutura dos dados
Exemplo de veículo:
json
Copiar
Editar
{
  "id": 1,
  "name": "Fusca",
  "license": "ABC1234",
  "status": true,
  "createdAt": "2025-04-25T12:00:00.000Z",
  "user": {
    "id": 1,
    "email": "davi@example.com"
  }
}
Exemplo de usuário:
json
Copiar
Editar
{
  "id": 1,
  "email": "davi@example.com"
}
🔐 Autenticação
Após login, será retornado um token JWT. Para acessar rotas protegidas (caso aplique), envie no header:

http
Copiar
Editar
Authorization: Bearer <token>
🧪 Testes
(em desenvolvimento)

🧠 Contribuindo
Fork este repositório

Crie sua branch (git checkout -b feature/minha-feature)

Commit suas alterações (git commit -m 'feat: adicionei algo')

Push para o branch remoto (git push origin feature/minha-feature)

Crie um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.