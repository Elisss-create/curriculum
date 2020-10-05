$(document).ready(function(){

    $(".menus").sortable();
     //MOVER ELEMENTO POR LA PAGINA
    $('.elemento').draggable();
    //REDIMENSIONAR
    $(".aumentar").resizable();

    $("#mostrar").click(function(){
        $("#meri").show();
        $("#mio").show();
        $("#simple").show();
        $("#lewis").show();
    });
    $("#mostrar-rwd").click(function(){
        $("#meri").show();
        $("#mio").hide();
        $("#simple").hide();
        $("#lewis").hide();
    });
    $("#mostrar-javascript").click(function(){
        $("#mio").show();
        $("#meri").hide();
        $("#simple").hide();
        $("#lewis").hide();
    });
    $("#mostrar-bootstrap").click(function(){
        $("#simple").show();
        $("#lewis").show();
        $("#mio").hide();
        $("#meri").hide();
    });
});