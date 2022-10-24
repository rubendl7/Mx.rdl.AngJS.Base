'use strict';
angular.
  module('appBody').
  component('appBody', {
    templateUrl: 'paginas/app-body/app-body.template.html',
    controller: [         
        function appBodyController() {
          this.Saluda = "Hola Mundo";
        }

    ]    
  });

