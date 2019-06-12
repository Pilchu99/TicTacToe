<!doctype html>
<html>
<head>
<title>Tic Tac Toe</title>
<meta charset="utf-8"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script type="text/javascript" src="js/logic.js"></script> 
<link rel="stylesheet"href="style.css" />
</head>
<body>

<div id="main">

  <div id="score">
    <p>tour</p>
    <p id="players"></p>
  
    <input type="radio" name="player"/>
    <input type="radio" name="player"/><br>
    <input type="reset" value="RESET"/>
    
    </div>

    

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