$(document).ready(function(){


  function showPrompt(prompt_id,player){
    
    $('#main').append('<div id="'+prompt_id+'"> <p>What is your nickname?</p><input id="'+player+'" type="text" placeholder="" /><div id="option_div"><br><input id="back"type="button" value="Back" /><br><input id="next"type="button" value="Next" /></div></div>');
    var txt="Type your nickname here.";
    $('#get_nickname').attr("placeholder", txt);
    var  i=0;
      
        setInterval(function(){
          i++
          txt+='.';
          if(i%3==0){
            i=0;
          txt="Type your nickname here.";     
          }
          $('#get_nickname').attr("placeholder", txt);
           }, 1000);

           
           
}
showPrompt('prompt1','player1');
$("#next").click(function(){
  
  $("#prompt1").remove();
  showPrompt('prompt2','player2');
  $("#next").click(function(){
  $("#prompt2").remove();
  });
  });







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
   

    
    
    
