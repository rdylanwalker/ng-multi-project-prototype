# Prototype

Example project showing how two different frontend applications can share common components from a local library
while also having unshared components "private" components.

## Development server

First, build the common library: `ng build common`

Run `ng serve --project=<project name=project-one> --port=<port number=4200>` for a dev server. Navigate to `http://localhost:<port number>/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --project=<project name=project-one>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test --project=<project name=project-one>` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e --project=<project name=project-one>` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
