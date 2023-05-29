const students = document.getElementById("students");
const booooks = document.getElementById("booooks");
const startMessage = document.getElementById("start-message");

let score = 0;

document.addEventListener("keydown", function(event) { // обработчик событий при нажатии кнопки
    jump();
})

function jump () { // функция прыжка
    if (students.classList != "jump") {
        students.classList.add("jump")
        increaseScore();
    }
    setTimeout( function() { // чтобы прыжок смог работать заново
        students.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() { // функция вызывающаяся при попадании Васи на книгу
    let studentsTop = parseInt(window.getComputedStyle(students).getPropertyValue("top"));
    let booooksLeft = parseInt(window.getComputedStyle(booooks).getPropertyValue("left"));

    if (booooksLeft < 50 && booooksLeft > 0 && studentsTop >= 240) {
        alert("ВАСЯ ЗАВАЛИЛ УЧЕБУ!!!")
        resetGame();
    }
}, 10)

function increaseScore() {  // функция добавляющая счетчик очков
    score++;
    document.getElementById("score").innerHTML = "Хороших оценок: " + score;
    if (score >= 20) { // при наборе определенного количества очков игра завершается
        gameIsOver = true;
        alert("Поздравляю, Вася закончил учебу хорошо")
    }

}

function resetGame() { // функция для перезапуска игры и обнуления количества очков
    score = 0;
    startGame();
    
}

function hideStartMessage() { // функция, убирающая надпись нажатия любой кнопки при использовании кнопки
    startMessage.style.display = "none";
  }

  document.addEventListener("keypress", function() {
    if (score > 0) {
      hideStartMessage();
    }
  });

showStartMessage();

// функция для отображения сообщения
function showStartMessage() {
  startMessage.style.display = "block";
}


