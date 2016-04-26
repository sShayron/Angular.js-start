(function(){
  var app = angular.module('Loja', []);

  app.controller('LojaController', function(){
    this.products = camisas;
  });
  
  app.controller('PainelController', function(){
	this.tab = 1;
	
	this.selecionaTab = function(marcaTab){
		this.tab = marcaTab;
	}
	
	this.estaSelecionada = function(checkTab){
		return this.tab === checkTab;
	}
  })

  var camisas = [
  {
    name: 'Camisa do Hulk',
    price: 10,
    description: 'Camisa do comicons manera!',
    canPurchase: true,
    soldOut: true,
    images:[{
        full: './camisas/camisa-hulk.jpg',
        thumb: './camisas/camisa-hulk.jpg'
    }]
  },
  {
    name: 'Camisa do volverine',
    price: 15,
    description: 'Volverine é massa ne',
    canPurchase: true,
    soldOut: true,
    images: [{
        full: './camisas/camisa-volverine.jpg',
        thumb: './camisas/camisa-volverine.jpg'
    }]
  }
  ];


})();
