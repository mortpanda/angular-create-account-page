# angular-create-account-page/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development Environment
```
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 11.0.4
Node: 14.15.0
OS: linux x64

Angular: 11.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1100.4
@angular-devkit/build-angular   0.1100.4
@angular-devkit/core            11.0.4
@angular-devkit/schematics      11.0.4
@angular/cdk                    11.2.13
@angular/flex-layout            12.0.0-beta.34
@angular/http                   7.2.16
@angular/localize               11.2.14
@angular/material               11.2.13
@schematics/angular             11.0.4
@schematics/update              0.1100.4
rxjs                            6.6.3
typescript                      4.0.3


```

## Configuration
A configuration file with the name `okta-config.service.ts` needs to be created in the below path,

`/src/app/shared/okta/`

The below is the file contenct,

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {
  constructor() { }
  
  strBaseURI = '[URL for the org e.g. https://atko.okta.com]]';
  strRedirectURL = '[The redirect URL set in the application]';
  strClientID = '[Client ID for the app]]';
  strIssuer = '[Issuer URL]';
  strPostLogoutURL = '[Post logout URL]]';
  strScope = ['openid', 'email', 'profile', 'address'];
  strResponseType = ['token', 'id_token'];
  strResponseMode = 'fragment';
  strPrompt = 'login';
  strPkce = true;
  strLang = 'ja';
  strBrand = '#00297A';
}

```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Screenshots
<img src="/Capture.PNG" alt="drawing" width="600"/>

