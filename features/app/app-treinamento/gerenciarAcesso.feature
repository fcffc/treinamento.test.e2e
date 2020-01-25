Feature: Gerenciar acesso no App do Treinamento
   Como usuário do app Treinamento
   Eu desejo ter acesso ao app do treinamento
   Para que eu possa logar e deslogar do app

   Background: possibilidade de acessar o app Treinamento
     Given eu estou na tela de login do app treinamento

   #LOGIN01 
   Scenario: Logar com usuário válido
     When eu digito corretamente as minhas informações de login "treinamento@email.net" "123456"
     And eu clico no botão entrar do app treinamento
     Then eu visualizo a tela de lista de viagens

   #LOGIN02 
   Scenario: Logar com usuário inválido
     When eu digito incorretamente as minhas informações de login "treinamento@email.net" "123457"
     And eu clico no botão entrar do app treinamento
     Then eu recebo a mensagem de validação "Você não é um usuário treinamento!"