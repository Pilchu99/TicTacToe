<!doctype html>
<html>
<head>
<title>Tic Tac Toe</title>
<meta charset="utf-8"/>
<link rel="stylesheet"href="style.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script type="text/javascript" src="js/logic.js"></script> 
</head>
<body>

<div id="main">
    
    <form>  
    X<input type="radio" id="X" name="choice" > <br>
    O<input type="radio" id="O" name="choice"/><br>
    
  
    <input type="reset" value="RESET"/>
    </form>
    


    

    <table>
        <tr>
            <td class="horizontal_line"><img src="images/empty.png" class="field"></td>
            <td class="both_line"><img src="images/empty.png" class="field"></td>
            <td class="both_line"><img src="images/empty.png" class="field"></td>
        </tr>
        <tr >
            <td class="horizontal_line"><img src="images/empty.png" class="field"></td>
            <td class="both_line"><img src="images/empty.png" class="field"></td>
            <td class="both_line"><img src="images/empty.png" class="field"></td>
        </tr>
        <tr>
            <td><img src="images/empty.png" class="field"></td>
            <td class="vertical_line"><img src="images/empty.png" class="field"></td>
            <td class="vertical_line"><img src="images/empty.png" class="field"></td>
        </tr>
    
    </table>
 


</div>


</body>
</html>