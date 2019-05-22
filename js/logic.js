$(document).ready(function(){

  $(":reset").click(function(){ //Reset game
      $(".field").attr("src","images/empty.png");
         var src="";

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
   

    
    
    
