// Функция для получения случайного выбора компьютера
function getComputerChoice() {
    const choices = ['Камень', 'Ножницы', 'Бумага']; // Возможные варианты выбора
    const randomIndex = Math.floor(Math.random() * choices.length); // Случайный индекс от 0 до 2
    return choices[randomIndex]; // Возвращаем случайный выбор
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let playerScore = 0;
let computerScore = 0;



// Функция для игры одного раунда
function playRound(playerSelection, computerSelection) {
    // Приведение выбора игрока и компьютера к нижнему регистру
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Проверка на ничью
    if (playerSelection === computerSelection) {
        return "Ничья!";
    }

    // Логика игры
    if (
        (playerSelection === 'камень' && computerSelection === 'ножницы') ||
        (playerSelection === 'ножницы' && computerSelection === 'бумага') ||
        (playerSelection === 'бумага' && computerSelection === 'камень')
    ) {
        playerScore++;
        return `Вы выиграли! ${capitalize(playerSelection)} побеждает ${capitalize(computerSelection)}`;
    } else {
        return `Вы проиграли! ${capitalize(computerSelection)} побеждает ${capitalize(playerSelection)}`;
    }
}



// Функция для игры
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
    document.getElementById('scoore').textContent = `Счет - Игрок: ${playerScore}, Компьютер: ${computerScore}`;
}

if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ?`Игрок`: `Компьютер`;
    document.getElementById(`result`).textContent = `Игра окончена! ${winner} победил!`;
    playerScore = 0;
    computerScore = 0; 
}

document.getElementById(`rock`).addEventListener(`click`, ()=> playGame(`камень`));
document.getElementById(`paper`).addEventListener(`click`, ()=> playGame(`ножницы`));
document.getElementById(`scissors`).addEventListener(`click`, ()=> playGame(`бумага`));