
$(document).ready(function(){

  status="notStarted";
  scoreX=0;
  scoreO=0;
  function showPrompt(prompt_id,player){
    
    inputNextValue="Next";

    if(player=="player1")  txt="Type first player nickname here.";   
    if(player=="player2") {
      txt="Type second player nickname here.";   
      inputNextValue="PLAY";
    }

    $('body').append('<form id="'+prompt_id+'"> <p>What is your nickname?</p><input id="'+player+'" type="text" placeholder="" /><div id="option_div"><br><input id="menu"type="button" value="menu" /><br><input id="next" type="submit" value="'+inputNextValue+'" /></div></form>');
    
    if(!document.getElementById("prompt1")) clearInterval(dots);

    $(':text').attr("placeholder", txt);
   
     i=0;
     dots= setInterval(function(){
         
          if(i%3==0){
            i=0;
            if(player=='player1') txt="Type first player nickname here";     
            if(player=="player2")  txt="Type second player nickname here";               
          }
          i++;
          txt+='.';
          $(':text').attr("placeholder", txt);
           }, 600);       
           
}

  function resetGame(){

    $.ajax({
      url: "",
      context: document.body.main,
      success: function(s)
      {
      $(this).html(s);
     
      }
        });
        occupiedFields=[];
        occupiedFieldsX=[];
        occupiedFieldsO=[];
        $(".field").attr("src","images/empty.png");
      
        $("#p1").prop( "disabled", false );
        $("#p1").prop( "checked", true );
        $("#p2").prop( "disabled", true );
        $("#p2").prop( "checked", false );
        var  src="images/cross.png";     
        tour='x';    
  }


$("#menu").click(function(){

  window.location.href='index.php';

})
var occupiedFields=[];
var occupiedFieldsX=[];
var occupiedFieldsO=[];
  

showPrompt('prompt1','player1');

$("#prompt1").submit(function(){
  
      if($("#player1").val()!==""){
            player1=$("#player1").val();
            $("#prompt1").remove();
           showPrompt('prompt2','player2');

       $("#prompt2").submit(function(){
          if($("#player2").val()!=="" && $("#player2").val()!==player1 ){
         player2=$("#player2").val();
                 var  text=player1+" "+player2;
                  
                   $("#prompt2").remove();
                   $.ajax({url: "html/main.php", async:"false" , success: function(result){    
                    $("body").html(result);
                  },complete: function(result){
                    $("#players").text(text);
                 

  
                    $("#p1").prop( "disabled", false );
                    $("#p1").prop( "checked", true );
                    $("#p2").prop( "disabled", true );
                    $("#p2").prop( "checked", false );

                    var status="started";
                    tour='x';

                  
               if(status=="started")
               {
                
            
                $(".field").click(function(){

                   



                  if(tour=='x'){                 
                    var  src="images/cross.png";                    
      if(!occupiedFields.includes($(this).attr('id'))){
                 occupiedFields.push($(this).attr('id'));
                 occupiedFieldsX.push($(this).attr('id'));
                 $(this).attr("src",src);
                tour='o';
                console.log(tour);
                $("#p2").prop( "disabled", false );
                $("#p2").prop( "checked", true );
                $("#p1").prop( "disabled", true );
                $("#p1").prop( "checked", false );
           }
            
            }
            
            
            
                  if(tour=='o'){                  
                   var  src="images/circle.png";
      if(!occupiedFields.includes($(this).attr('id'))){
                occupiedFields.push($(this).attr('id'));
                occupiedFieldsO.push($(this).attr('id'));
                $(this).attr("src",src);
                tour='x';
                console.log(tour);
                $("#p1").prop( "disabled", false );
                $("#p1").prop( "checked", true );
                $("#p2").prop( "disabled", true );
                $("#p2").prop( "checked", false );
      }
      if((occupiedFieldsX.includes("f1") && occupiedFieldsX.includes("f2") && occupiedFieldsX.includes("f3"))||
        (occupiedFieldsX.includes("f4") && occupiedFieldsX.includes("f5") && occupiedFieldsX.includes("f6"))||
        (occupiedFieldsX.includes("f7") && occupiedFieldsX.includes("f8") && occupiedFieldsX.includes("f9"))||
        (occupiedFieldsX.includes("f1") && occupiedFieldsX.includes("f5") && occupiedFieldsX.includes("f9"))||
        (occupiedFieldsX.includes("f3") && occupiedFieldsX.includes("f5") && occupiedFieldsX.includes("f7"))||
        (occupiedFieldsX.includes("f1") && occupiedFieldsX.includes("f4") && occupiedFieldsX.includes("f7"))||
        (occupiedFieldsX.includes("f2") && occupiedFieldsX.includes("f5") && occupiedFieldsX.includes("f8"))||
        (occupiedFieldsX.includes("f3") && occupiedFieldsX.includes("f6") && occupiedFieldsX.includes("f9"))){
      

        alert("The winner is: "+player1);
        scoreX++;
        $("#score1").text(scoreX);
        resetGame();
      }
      if((occupiedFieldsO.includes("f1") && occupiedFieldsO.includes("f2") && occupiedFieldsO.includes("f3"))||
      (occupiedFieldsO.includes("f4") && occupiedFieldsO.includes("f5") && occupiedFieldsO.includes("f6"))||
      (occupiedFieldsO.includes("f7") && occupiedFieldsO.includes("f8") && occupiedFieldsO.includes("f9"))||
      (occupiedFieldsO.includes("f1") && occupiedFieldsO.includes("f5") && occupiedFieldsO.includes("f9"))||
      (occupiedFieldsO.includes("f3") && occupiedFieldsO.includes("f5") && occupiedFieldsO.includes("f7"))||
      (occupiedFieldsO.includes("f1") && occupiedFieldsO.includes("f4") && occupiedFieldsO.includes("f7"))||
      (occupiedFieldsO.includes("f2") && occupiedFieldsO.includes("f5") && occupiedFieldsO.includes("f8"))||
      (occupiedFieldsO.includes("f3") && occupiedFieldsO.includes("f6") && occupiedFieldsO.includes("f9"))){
    
      

      alert("The winner is: "+player2);
      scoreO++;
      $("#score2").text(scoreO);
      resetGame();
    }
  else if (occupiedFields.includes("f1") && occupiedFields.includes("f2") && occupiedFields.includes("f3")&&
      occupiedFields.includes("f4") && occupiedFields.includes("f5") && occupiedFields.includes("f6")&&
      occupiedFields.includes("f7") && occupiedFields.includes("f8") && occupiedFields.includes("f9")){

        alert("Draw");
      resetGame();

      }



      }
      
      

            
    });
               $(":reset").click(function(){ //Reset game
                   resetGame();
                   $("#score2").text("0");
                   $("#score1").text("0");
            })  
                
                
                }



                  } });
                  
                 

            
                 
      
                
                      
                   
                   
          
          
                  }    
  });
}
 });
  
 
 




 

});
   

    
    
    
