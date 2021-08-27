var buscador = $("#table").DataTable();
var elemento = document.getElementById("DIV");
   elemento.style.display = 'none';


$("#input-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#input-search").val() == ""){
        $(".content-table").fadeOut(300);
    }else{
        $(".content-table").fadeIn(300);
        $(".tapar").fadeOut(300);
    }
  
})


function myFunction() {
    var x = document.getElementById("DIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}