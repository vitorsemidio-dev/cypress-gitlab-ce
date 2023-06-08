# Cypress Gitlab CE

Este é um projeto incrível que utiliza Docker para facilitar o desenvolvimento e a implantação, juntamente com o Cypress para realizar testes em uma aplicação web no container GitLab CE.

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina antes de prosseguir.

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalação do Docker Compose](https://docs.docker.com/compose/install/)

## Como usar

1. Clone este repositório em sua máquina:

   ```shell
   git clone git@github.com:vitorsemidio-dev/cypress-gitlab-ce.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd cypress-gitlab-ce
   ```

3. Levante os containers utilizando o Docker Compose:

   ```shell
   docker-compose up -d
   ```

   Isso irá iniciar o container GitLab CE e a aplicação estará disponível em [http://localhost](http://localhost).

4. Verifique se os containers estão em execução:

   ```shell
   docker-compose ps
   ```

   Você deverá ver uma lista dos containers em execução.

5. Instale as dependências do projeto:

   ```shell
    npm install
   ```

6. Preencha as variáveis de ambiente:

   ```shell
    cp cypress.env.example.json cypress.env.json
   ```

Para conseguir os valores a serem preenchidos, acesse o seguinte link onde mostra o passo a passo:

[0. _Setup_ do ambiente local com Docker](./lessons/0.md)

7. Inicie o cypress:

   (modo interativo)

   ```shell
    npm run cy:open
   ```

   ![npm run cy:open](<.github/npm-run-cy-open(1).png>)
   ![npm run cy:open](<.github/npm-run-cy-open(2).png>)

   (modo headless):

   ```shell
    npm run cy:run
   ```

![npm run cy:run](.github/npm-run-cy-run.png)

## Evidências de testes em vídeo

### createIssue (API)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/6314fba0-4f3d-4f9d-bc34-a22551d7db18

### createProject (API)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/595fa1d7-8741-4364-b0e5-07b8fe6809e4

### gitClone (CLI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/04e6d594-5bd0-4442-b366-3978cb86cb89

### createIssue (GUI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/56d82db4-2628-42b2-878f-720fd2a3702a

### createProject (GUI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/1eb87ee2-f343-4a06-91ae-5ddc3a7bd4a4

### login (GUI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/bf03a9be-c5a1-46c6-bfab-816db4dc1ac5

### logout (GUI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/6a2da8e8-1f71-4eca-8b1d-ddac0beaf801

### setLabelOnIssue (GUI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/a3f6487c-74e8-4c0d-b079-876dafcdd5c0

### setMilestoneOnIssue (GUI)

https://github.com/vitorsemidio-dev/cypress-gitlab-ce/assets/52754546/f5869963-26fc-4c9a-a3d4-472ade741bcc

## Parar os containers

Se desejar parar os containers, execute o seguinte comando na raiz do projeto:

```shell
docker-compose down
```

Isso irá parar e remover os containers, mas os dados persistentes serão preservados.

Se você quiser apenas parar os containers temporariamente (sem removê-los), você pode executar:

```shell
docker-compose stop
```

## Aulas

- [0. _Setup_ do ambiente local com Docker](./lessons/0.md)
- [1. _Setup_ do projeto de testes com Cypress](./lessons/1.md)
- [2. Testando a funcionalidade _login_](./lessons/2.md)
- [3. Testando a funcionalidade de _logout_](./lessons/3.md)
- [4. Testando a funcionalidade de criação de projeto](./lessons/4.md)
- [5. Testando criação de issue](./lessons/5.md)
- [6. Testando criação de projeto via API](./lessons/6.md)
- [7. Testando criação de _issue_ via API](./lessons/7.md)
- [8. Testando a adição de uma etiqueta (_label_) à uma issue](./lessons/8.md)
- [9. Testando a adição de um marco (_milestone_) à uma _issue_](./lessons/9.md)
- [10. Executando comandos a nível de sistema](./lessons/10.md)
- [11. Executando todos os testes](./lessons/11.md)
- [12. Executando os testes em modo interativo](./lessons/12.md)
- [13. Desligando o container](./lessons/13.md)
- [14. Conteúdos de Cypress da Talking About Testing](./lessons/14.md)

## Contribuindo

Se você quiser contribuir para este projeto, fique à vontade para enviar pull requests. Ficarei feliz em analisá-los!
