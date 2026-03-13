function counter() {
    let countdownElement = document.getElementById('countdown');
    countdownElement.style.color = 'red';
    countdownElement.style.fontSize = '24px';
    countdownElement.style.textAlign = 'center';

    function getTargetDate() {
        const now = new Date();
        const targetDate = new Date(now.getFullYear(), 6, 15, 0, 0, 0); // July 15th at 00:00
        
        if (targetDate.getTime() < now.getTime()) {
            targetDate.setFullYear(now.getFullYear() + 1);
        }
        
        return targetDate;
    }

    function getTimeUntilTarget() {
        return getTargetDate().getTime() - new Date().getTime();
    }

    const updateCountdown = () => {
        let remainingTime = getTimeUntilTarget();

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            return;
        }

        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        let seconds = Math.floor((remainingTime / 1000) % 60);

        if (days > 0) {
            countdownElement.innerHTML = `${days}Д ${hours}Ч ${minutes}М ${seconds}С`;
        } else {
            countdownElement.innerHTML = `${hours}Ч ${minutes}М ${seconds}С`;
        }
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
}

counter();
