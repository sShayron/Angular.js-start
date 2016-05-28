(function(){
  var app = angular.module('Loja', []);

// *****CONTROLLERS*****
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
});

  app.controller('GaleriaController', function(){
    this.atual = 0;

    this.selecionaAtual = function(atual){
      this.selecionaAtual = atual || 0;
    }
  });

  app.controller('ComentarioController', function(){
    this.comentario = {};

    this.addComentario = function(product){
      this.comentario.dtCriado = Date.now();
      product.comentarios.push(this.comentario);

      this.comentario = {};
    };
  });

// *****DIRECTIVES*****
//**tituloproduto
app.directive('produtoTitulo', function(){
  return {
    retrict: 'E',
    template: '{{product.name}}<em class="pull-right">{{product.price | currency}}</em>'
  };
});

// *****VARIAVEIS*****
  var camisas = [
  {
    name: 'Camisa do Hulk',
    price: 10,
    description: 'Camisa do comicons manera!',
    especification: 'Camisa poliester',
    canPurchase: true,
    soldOut: true,
    images:[
        './camisas/camisa-hulk.jpg',
        './camisas/camisa-hulk.jpg'
    ],
    comentarios: [{
       estrelas: 3,
       texto: "Nice camisa manerao.",
       autor: "woloco@malucao.com",
       dtCriado: 1397490980837
     }, {
       estrelas: 4,
       texto: "Parece um doidao!",
       autor: "rocker@punk.com",
       dtCriado: 1397490980837
     }]
  },
  {
    name: 'Camisa do volverine',
    price: 15,
    description: 'Volverine é massa ne',
    canPurchase: true,
    soldOut: true,
    images: [
        './camisas/camisa-volverine.jpg',
        './camisas/camisa-volverine.jpg'
    ],
    comentarios: [{
      estrelas: 1,
      texto: "Camisa bem ridicula",
      autor: "rebelde@rebeldia.com",
      dtCriado: 1397490980837
    },{
      estrelas: 1,
      texto: "Ridiculo é voce cara volverine é massa",
      autor: "xmanawesoome@jurubeba.com",
      dtCriado: 1397490980837
    }]
  }];

//*****FIM DO MODULO*****
})();
