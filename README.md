# Blogify - Sistema de Blog

Este projeto consiste no desenvolvimento de um blog dinâmico e moderno utilizando Angular para o frontend e Laravel com PHP para o backend. O banco de dados MySQL é utilizado para armazenar postagens, usuários e comentários.

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** Laravel (PHP)
- **Banco de Dados:** MySQL
- **Gerenciamento de Dependências:** Composer (PHP), npm (Node.js)
- **Autenticação:** Laravel Sanctum

## Estrutura do Projeto

- `/frontend` - Aplicação Angular
- `/backend` - API Laravel

## Funcionalidades Principais

### Usuários Visitantes
- Visualização de postagens
- Pesquisa de postagens por categorias e palavras-chave
- Leitura de postagens completas
- Cadastro e login

### Usuários Autenticados
- Comentar em postagens
- Editar perfil
- Curtir postagens

### Administradores
- Criar, editar e excluir postagens
- Gerenciar usuários
- Aprovar ou excluir comentários
- Acessar painel administrativo para gestão de conteúdo

## Instalação

### Pré-requisitos
- PHP >= 8.1
- Composer
- Node.js e npm
- MySQL
- Angular CLI

### Configuração do Backend
```
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

### Configuração do Frontend
```
cd frontend
npm install
```

### Execução do Projeto
Backend:
```
cd backend
php artisan serve
```

Frontend:
```
cd frontend
ng serve
```

## Licença
Este projeto está licenciado sob a licença MIT.
