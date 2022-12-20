player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name+":";
document.getElementById("player2name").innerHTML=player2name+":";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question Turn:"+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn:"+player2name;

function send()
{
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("Word in Lower Case="+word);
    
    char1=word.charAt(1);
    console.log(char1);

    lengthby2=Math.floor(word.length/2);
    char2=word.charAt(lengthby2);
    console.log(char2);

    lastletter=word.length-1;
    char3=word.charAt(lastletter);
    console.log(char3);

    char1_new=word.replace(char1,"_");
    char2_new=char1_new.replace(char2,"_");
    char3_new=char2_new.replace(char3,"_");
    console.log(char3_new);

    question="<h4 id='displayword'>Q."+char3_new+ "</h4>";
    input_box="<br>ANSWER:<input type='text' id='answer'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    

    
}

question_turn="player1";
answer_turn="player2";

function check()
{
    user_answer=document.getElementById("answer").value;
    lowercase_answer=user_answer.toLowerCase();
    console.log("answer lower case="+lowercase_answer);

    if(lowercase_answer==word)
    {
        if(answer_turn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;


        }
        else
        {
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;

        }

    }

    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("playerquestion").innerHTML="QUESTION TURN-"+player2name;

    }
    else
    {
        question_turn="player1";
        document.getElementById("playerquestion").innerHTML="QUESTION TURN-"+player1name;

    }

    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("playeranswer").innerHTML="ANSWER TURN-"+player2name;

    }
    else
    {
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML="ANSWER TURN-"+player1name;

    }

    document.getElementById("output").innerHTML="";


    
}
