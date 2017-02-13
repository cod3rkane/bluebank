# Blue Bank
Blue Bank é um projeto para testar seus conhecimentos de backend e frontend.

Você irá criar uma aplicação web para simular a transferência bancária entre contas cadastradas.
Esse teste consiste em avaliar seus conhecimentos como fullstack developer.

Você deverá criar um banco de dadaos contendo uma tabela de conta, a tabela deverá conter os seguintes atributos: 
- ID
- CPF do Cliente
- Numero da Agencia 
- Numero da Conta
	
O banco de dados deve ser populado com algumas contas.

## Requisitos Funcionais

1. A tela deverá os seguintes campos: Agencia/Numero da conta origem e destino e valor
2. Verificar a existencia das contas informadas
3. Verificar a disponibilidade do saldo da conta de origem, o valor a ser debitado deve ser maior ou igual ao saldo disponível na conta.

## Requisitos Técnicos

1. Utilizar backend em Java ou NodeJS
2. Aplicar conceitos de orientação a objetos
3. Controlar transação nas operações de saque e deposito

## Diferenciais

1. Aplicar conceitos de SOLID
2. Testes unitários
3. Utilizar bibliotecas de frontend (JQuery, Bootstrap, Angular, ModuleJS, etc)

## Requisitos
MongoDB

## Criando o Banco
1. Dentro na raiz do app, dentro da pasta tables, rode o build.sh para que ele crie o banco e algumas contas para teste.


## Instalação
1. Instalar os modules do api.
    1.1 na pasta raiz rode o comando: npm install.
    
2. Instalar os modules do cliente.
    2.1 na pasta bluebank, rode o comando: npm install.

## Subindo a aplicação e a API.
1. Dentro da pasta api, rode o comando: node api.js.
2. Na pasta bluebank, rode o comando: ng serve.
3. Abra localhost:4200 em seu navegador favorito(IE >= 10, Chrome/Cromium, Firefox supports.). 