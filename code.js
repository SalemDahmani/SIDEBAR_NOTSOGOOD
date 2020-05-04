$(function(){
    $("#mic").click(function (){
        $("#nav").toggleClass("show-nav")
        $(".partie_1").toggleClass("marmov")
         $(".partie_2").toggleClass("marmov")
         $(".partie_3").toggleClass("marmov")
         $(".partie_4").toggleClass("marmov")
     
    })
    $("#open").click(function(){
        $("#form").css("display","block")
           $("#form").css("transition","display 0.4s")
        
    })
     $(".x").click(function(e){
          e.preventDefault();
        $("#form").css("display","none")
     })
})