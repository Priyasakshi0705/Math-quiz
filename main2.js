player_1name = localStorage.getItem("player1");
player_2name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1name + " : ";
document.getElementById("player2_name").innerHTML = player_2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("que_turn").innerHTML = player_1name;
document.getElementById("ans_turn").innerHTML = player_2name;

function send(){

   number1= document.getElementById("number1").value;
   number2= document.getElementById("number2").value;
   answer= parseInt(number1) * parseInt(number2);

   question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
   input_box = "<br>Answer : <input type='number' id='input_check_box'>";
   check_button= "<br><br><button class ='btn btn-info' onclick='check()'>Check</button>"

   row =question_number + input_box + check_button;
   document.getElementById("output").innerHTML= row;

   document.getElementById("number1").value ="";
   document.getElementById("number2").value ="";
}

question_turn= "player1";
answer_turn= "player2";

function check(){
   
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == answer){
        if(answer_turn == "player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score +1;
          document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    
    get_answer = document.getElementById("input_check_box").value;
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("que_turn").innerHTML = player_2name;
    }
    else{
        question_turn = "player1";
        document.getElementById("que_turn").innerHTML = player_1name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("ans_turn").innerHTML = player_2name;
      }
      else{
        answer_turn = "player1";
        document.getElementById("ans_turn").innerHTML = player_1name;
      }

      document.getElementById("output").innerHTML="";

     
      }
