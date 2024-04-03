// Завдання 2

document.addEventListener("DOMContentLoaded", function() {
    const countdownDisplay = document.getElementById("countdown");
    const actionButton = document.getElementById("action");
    
    let timeLeft = 30;

    const timer = setInterval(function() {
        timeLeft--;
        countdownDisplay.textContent = timeLeft;

        if (timeLeft <= 10) {
            // Запускаємо анімацію або відображаємо кнопку
            actionButton.style.display = "block";
            countdownDisplay.style.color = "red";
        }

        if (timeLeft <= 0) {
            // Виконуємо певну дію, наприклад, робимо кнопку активною
            actionButton.disabled = false;
            clearInterval(timer);
        }
    }, 1000);
});
