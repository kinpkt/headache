const picture = document.getElementById("pic");
const hint = document.getElementById("hint");
const audio = document.getElementById("audio");
const answer = document.getElementById("answer");
var question = 1;

function sendAns()
{
    if (question == 1 && answer.value == "password")
    {
        question += 1;
        answer.value = "";
        hint.innerHTML = "Hint : แจกแจงสมาชิก (spacebar หลัง , ด้วย)";
        picture.src = "pics/2.png";
    }
    else if (question == 2 && (answer.value == "{-2, 2}" || answer.value == "{2, -2}"))
    {
        question += 1;
        answer.value = "";
        hint.innerHTML = "Hint : มี เ สี ย ง ด้ ว ย";
        picture.src = "pics/3.png";
        audio.hidden = false;
        audio.src = "aud/3.wav";
    }
    else if (question == 3 && answer.value == "NeEupTFfAv")
    {
        question += 1;
        answer.value = "";
        hint.innerHTML = "Hint : ฟังเอาเอง";
        picture.src = "pics/nopic.png";
        audio.src = "aud/4.wav";
    }
    else if (question == 4 && answer.value == "FATASS")
    {
        question += 1;
        answer.value = "";
        hint.innerHTML = "Hint : ตามภาพ";
        picture.src = "pics/5.png";
        audio.src = "aud/5.wav";
    }
    else if (question == 5 && answer.value.toLowerCase() == "never gonna give you up")
    {
        question += 1;
        answer.value = "";
        hint.innerHTML = "Hint : To Be Continued";
        picture.src = "pics/nopic.png"
        audio.hidden = true;
    }
}