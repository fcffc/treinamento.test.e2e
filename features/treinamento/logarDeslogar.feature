Feature: Logar e deslogar no sistema Treinamento:
  Como usuario do sistema Treinamento
  Eu quero logar e deslogar do mesmo
  Para que eu possa ter acesso ao sistema de acordo com meu perfil

  Background: possibilidade de acessar o sistema Treinamento
    Given eu estou na tela de login

  @testes
  Scenario: Logar com usuário válido
    When eu digito "treinamento@email.net" "123456" corretamete as minhas informações do login
    And eu clico no botão de entrar
    Then eu visualizo a página home do sistema

  Scenario: Deslogar do sistema Treinamento
    When eu digito "treinamento@email.net" "123456" corretamete as minhas informações do login
    And eu clico no botão de entrar
    And eu visualizo a página home do sistema Treinamento
    And eu clico em logoff
    Then eu sou delogada do sistema

