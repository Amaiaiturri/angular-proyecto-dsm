
angular.module('NotasApp')
.controller('NotaShowController', function($routeParams, Nota) {
  var controller = this;
  controller.nota = Nota.get({id: $routeParams.description});
  
});

  /**/

  /*$http({method: 'GET', url: '/notas/'+$routeParams.id})
	.success(function(data) {
    //console.log(data);
    controller.nota = data;
  })*/

/*Nota.encontrar($routeParams.id)
  .success(function(data) {
    controller.nota = data;
  });*/