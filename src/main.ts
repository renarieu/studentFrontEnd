import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // q: when I type mg serve on my angular project, I get "This version of CLI is only compatible with Angular versions ^16.0.0, but Angular version 12.2.17 was found instead.". What should I do to fix it ? 
  // a: try to update your angular version to 16.0.0 or above.
  // q: how to update angular version ?
  // a: npm install -g @angular/cli@latest
  // q: I tried that but it didn't work. I still get the same error.
  // a: try to uninstall angular cli first. npm uninstall -g @angular/cli
  // q: I tried that but it didn't work. I get "Workspace extension with invalid name (defaultProject) found."
  // a: try to delete the node_modules folder and package-lock.json file. Then run npm install.
  // q: how to delete the node_modules folder and package-lock.json file
  // a: use the command rm -rf node_modules package-lock.json
// q: when I try "ng serve", I get "Error: Could not find the '@angular-devkit/build-angular:dev-server' builder's node package."
// a: try to install @angular-devkit/build-
// q: what is the command to install @angular-devkit/build- ? 
// a: npm install @angular-devkit/build-
// q: I get an error message "Found: @angular/compiler-cli@12.2.17"
// a: try to uninstall @angular/compiler-cli first
// q: how to uninstall @angular/compiler-cli
// a: npm uninstall @angular/compiler-cli
// q: I got: Could not resolve dependency: peer @angular/compiler@"16.2.11" from @angular/compiler-cli@16.2.11
// a: try to install @angular/compiler-cli@16
// q: how to install @angular/compiler-cli@16
// a: npm install @angular/compiler-cli@16
// q: I still get Could not resolve dependency:npm ERR! peer @angular/compiler@"16.2.11" from @angular/compiler-cli@16.2.11
// a: try to install @angular/compiler-cli@16