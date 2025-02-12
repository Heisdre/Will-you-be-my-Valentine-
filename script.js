window.messageIndex = 0;
window.gifIndex = 0;

window.handleYesClick = function () {
    window.location.href = "yes_page.html";
};

window.handleNoClick = function () {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');

    const messages = [
        "pretty please?",
        "fr??",
        "u can't be srs rn😭😭?",
        "mama please...",
        "Just think about it!",
        "If you say no, I will be really sad...",
        "I will be very sad...",
        "I will be very very very sad...",
        "Ok fine, I will stop asking...",
        "Just kidding, say yes please! ❤️"
    ];

    const gifs = [
        "https://media.giphy.com/media/FWAcpJsFT9mvrv0e7a/giphy.gif",
        "https://media.giphy.com/media/edGzBC6GDOhutW32ps/giphy.gif",
        "https://media.giphy.com/media/q1R1ZiUskINVOn6bz3/giphy.gif",
        "https://media.giphy.com/media/NuiEoMDbstN0J2KAiH/giphy.gif",
        "https://media.giphy.com/media/8v6MRmBnqgjjejfbQv/giphy.gif",
        "https://media.giphy.com/media/LxPhEh5yYHkviFtLUy/giphy.gif"
    ];

    // Update message
    noButton.textContent = messages[window.messageIndex];
    window.messageIndex = (window.messageIndex + 1) % messages.length;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Update GIF
    gifImage.src = gifs[window.gifIndex];
    window.gifIndex = (window.gifIndex + 1) % gifs.length;
};

