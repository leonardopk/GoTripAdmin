# GoTripAdmin

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



## ----------- DOCUMENTAÇÃO OFICIAL -------------

## Estrutura de pastas

O Projeto visa a apresentação de uma interface simples e funcional. Com isso em mente, a estruturação das pastas foi organizada de maneira a deixar todas as estruturas do projeto bem visíveis e com fácil acesso para iniciantes. Explicação das pastas e seu conteúdo:
-- Layout: São os componentes que fazem parte do visual global da aplicação, como o menú lateral e o cabeçalho. Ou seja, eles ficam sempre presentes na tela, o conteúdo que muda são os outros componentes que são exibidos em determinada área da tela que irão se alternando.
-- Models: São as Interfaces das features/entidades da aplicação, como a Interface de Usuários, Atividades, Clientes, Pedidos, etc...
-- Pages: São as Features/entidades da aplicação. Serão estes os componentes que serão alternados na tela conforme clicamos no menu lateral. Dessa forma, na prática são como "páginas" da nossa aplicação. Foi optado por coloca-los direto em uma pasta "pages", pois serão carregados diretamente como páginas prontas, ao invés da forma "convencional" (features/clientes/page, features/usuarios/page, etc...), onde temos um arquivo próprio onde "montamos" uma página, colocando vários componentes da página lá.
-- Services: São todos os Services da aplicação. Eles que conterão as listas das Features/Entidades, e conterão os métodos para manipular os itens destas listas, como adicionar, editar e remover.
-- Shared: São os componentes que serão usados por mais de uma Feature/Entidade (que estão na pasta "pages"), mantendo um padrão visual entre elas. Por exemplo, as listas dos itens cadastrados, os formulários de cadastro, etc...
