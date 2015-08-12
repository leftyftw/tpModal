# tpModal

***tpModal*** is a Javascript library to simplify access to the ui.bootstrap Modal popup.  Angular, ui.bootstrap, and bootstrap-3 css is required.  The goal is to create a simple core library that leverages all the goodness of bootstrap but exposes it through a simple angular service.

## Current Version
0.1

##Demo
- Demo can be found at https://github.com/leftyftw/tpModal/blob/master/example.html


## Quick Start

### 4 Easy Steps

1. Link to tpModal.js `<script src="tpModal.js"></script>`
2. Add it to your app `angular.module('MyCoolApp', ['ui.bootstrap', 'torresPub'])`
3. Inject the service in your directive/controller `angular.module('MyCoolApp').controller('MyAwesomeController', function($scope, tpModal) { });`
4. Use tpModal to display a dialog
   ```javascript
   //Display a message with no title
   tpModal.show('Hello World!');
   ```
