
$(document).ready(function(){

  status="notStarted";
  scoreX=0;
  scoreO=0;
  function showPrompt(prompt_id,player){
    
    

    if(player=="player1") {

      txt="Type first player nickname here.";   
      inputNextValue="play";
    } 

    $('body').append('<form id="'+prompt_id+'"> <p>What is your nickname?</p><input id="'+player+'" type="text" placeholder="" /><div id="option_div"><br><input id="menu"type="button" value="menu" /><br><input id="next" type="submit" value="'+inputNextValue+'" /></div></form>');
    
    if(!document.getElementById("prompt1")) clearInterval(dots);

    $(':text').attr("placeholder", txt);
   
     i=0;
     dots= setInterval(function(){
         
          if(i%3==0){
            i=0;
           txt="Type first player nickname here";     
                          
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

  window.location.href='index.html';

})
var occupiedFields=[];
var occupiedFieldsX=[];
var occupiedFieldsO=[];
  

showPrompt('prompt1','player1');

$("#prompt1").submit(function(){
  
      if($("#player1").val()!==""){
            player1=$("#player1").val();
            player2="CPU"
                  var  text=player1+" "+player2;
                 $("#prompt1").remove();
                   $.ajax({url: "html/main.html", async:"false" , success: function(result){    
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
                                    
      if(!occupiedFields.includes($(this).attr('id'))){
                 occupiedFields.push($(this).attr('id'));
                 occupiedFieldsX.push($(this).attr('id'));
                 var  src="images/cross.png";    
                 $(this).attr("src",src);
                tour='o';
                console.log($(this).attr('id'));
                $("#p2").prop( "disabled", false );
                $("#p2").prop( "checked", true );
                $("#p1").prop( "disabled", true );
                $("#p1").prop( "checked", false );
      }

        if(occupiedFields.length!=9 && tour=='o'){
                function getRndInteger(min, max) {
                  do{
                      result= Math.floor(Math.random() * (max - min) ) + min;       
                     }while(occupiedFields.includes("f"+result));
                return result;
              }

              cpuField=getRndInteger(1,9);
             if(!occupiedFields.includes("f"+cpuField)){
              occupiedFields.push("f"+cpuField);
              occupiedFieldsO.push("f"+cpuField);
              var  src="images/circle.png";

              $("#f"+cpuField).attr("src",src);
                tour='x';
                console.log(cpuField);
                $("#p1").prop( "disabled", false );
                $("#p1").prop( "checked", true );
                $("#p2").prop( "disabled", true );
                $("#p2").prop( "checked", false );
           }
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
  
 
 




 

});
   

    
    
    
