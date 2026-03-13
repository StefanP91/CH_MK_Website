function startCountdownToNov29() {
    let countdownElement = document.getElementById('countdown');
    countdownElement.style.color = 'red';
    countdownElement.style.fontSize = '24px';
    countdownElement.style.textAlign = 'center';


    const targetDate = new Date(new Date().getFullYear(), 11, 6, 0, 0, 0); 

    function getTimeUntilTarget() {
        const now = new Date();
        return targetDate.getTime() - now.getTime();
    }

    const updateCountdown = () => {
        let remainingTime = getTimeUntilTarget();

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "The Cyber Week sale has ended!";
            return;
        }

        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        let seconds = Math.floor((remainingTime / 1000) % 60);

        countdownElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
}

startCountdownToNov29();
