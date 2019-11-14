// This is a JavaScript file
$(document).on("click","#listar",function(){
  $(location).attr("href","pesquisa.html");
});


$(document).on("click","#cadastro",function(){
  var parametros = {
    "horario":$("#horario").val(),
    "proprietario":$("#proprietario").val(),
    "marca":$("#marca").val(),
    "modelo":$("#modelo").val(),
    "placa":$("#placa").val(),
    
  
  };

  $.ajax({
    type:"post",
    url:"https://estacionamentonegao.000webhostapp.com/cadastrar.php",
    data:parametros,
    // success
    success: function(data){
      navigator.notification.alert("REGISTRO SALVO COM SUCESSO");
      $("#horario").val(""),
      $("#proprietario").val(""),
      $("#marca").val(""),
      $("#modelo").val(""),
      $("#placa").val("")
      
     
    },
   
  });
});


function carregaLista(){
    $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://estacionamentonegao.000webhostapp.com/pesquisa.php", // pra onde vai enviar
    dataType:"json", // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
      var itemlista = "";
      $.each(data.pizzas, function(i,dados){
        itemlista += "<option value="+dados.codigo+"> " +dados.placa+ "</option>"
      });
      $("#lista").html(itemlista);
    },
  });
}

$(document).on("change","#lista",function(){
    var parametro ={
      "codigo":$("option:selected",("#lista")).val(),
      "proprietario":$("input",("#proprietario")).val(),
      "marca":$("option:input",("#marca")).val(),
      "modelo":$("option:input",("#modelo")).val(),
      "placa":$("option:input",("#placa")).val()

    };
    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentonegao.000webhostapp.com/pesquisa1.php",//para onde vou enviar
      data:parametro,
      dataType:"json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        $("#codigo").val(data.pizza.codigo);
        $("#proprietario").val(data.pizza.proprietario);
        $("#marca").val(data.pizza.marca);
        $("#modelo").val(data.pizza.modelo);
        $("#placa").val(data.pizza.placa);
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao buscar registros!");
      }
    });
});



function preencheHora(){
    var hora = "";
    for(var x = 0; x <= 23; x++){
      if(x <= 9){
        hora+="<option value="+x+">0"+x+"</option>";
      }else{
        hora+="<option value="+x+">"+x+"</option>";
      }
    }
    $("#horario").html(hora);
    $("#hora").html(hora);
}

$(document).on("click","#pagar",function(){
  var horaEntrada =parseFloat($("option:input",("#horario")).val());
  var horaSaida = parseFloat($("option:input",("#hora")).val());

  
  var total = ((horario) - (hora)) * 3;
  var url = "final.html";
$(location).attr('#pagar',url);
  

});