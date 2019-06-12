
$(document).ready(function(){

  
a="";
  function showPrompt(prompt_id,player){
    
    inputNextValue="Next";

    if(player=="player1")  txt="Type first player nickname here.";   
    if(player=="player2") {
    txt="Type second player nickname here.";   
    inputNextValue="PLAY";
    }

    $('#main').append('<form id="'+prompt_id+'"> <p>What is your nickname?</p><input id="'+player+'" type="text" placeholder="" /><div id="option_div"><br><input id="menu"type="button" value="menu" /><br><input id="next" type="submit" value="'+inputNextValue+'" /></div></form>');
    
    
    if(!document.getElementById("prompt1")) clearInterval(xx);

   
    
    $(':text').attr("placeholder", txt);
   
     i=0;
     xx=   setInterval(function(){
         
          if(i%3==0){
            i=0;
          
            if(player=='player1') txt="Type first player nickname here";     
            if(player=="player2")  txt="Type second player nickname here";  
             
          }
          i++;
          txt+='.';
          $(':text').attr("placeholder", txt);
           }, 1000);
         
           
           
}
showPrompt('prompt1','player1');

$("#prompt1").submit(function(){
  
      if($("#player1").val()!==""){
        text=$("#player1").val();
        $("#prompt1").remove();
        showPrompt('prompt2','player2');

        $("#prompt2").submit(function(){
          if($("#player2").val()!==""){

    text+=$("#player2").val();
    $("#players").text(text);
  $("#prompt2").remove();
          } 

  });
}
  });
 
 
  $("#back").click(function(){

    window.location.href='index.php';




  })




  $(":reset").click(function(){ //Reset game
      $(".field").attr("src","images/empty.png");
         
             $.ajax({
                url: "",
                context: document.body,
                success: function(s,x)
                {
                $(this).html(s);
                }
                  });
  })
 

  $(":radio").click(function(){
    
       if(document.getElementById("X").checked == true){  //Player choosed X
          src="images/cross.png";
          $("#O").attr('disabled','disabled');
       $("img").click(function(){
           $(this).attr("src",src);
           $("#X").attr('disabled','disabled');
           $("#O").removeAttr('disabled');


    });
    
  }
        

        if(document.getElementById("O").checked == true){ // Player choosed O

          src="images/circle.png";
          $("img").click(function(){
            $(this).attr("src",src);
        
          
        });
      }
    })

   
})
   

    
    
    
