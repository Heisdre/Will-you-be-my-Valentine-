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
    "https://media.giphy.com/media/FWAcpJsFT9mvrv0e7a/giphy.gif",  // Anya excited
    "https://media.giphy.com/media/edGzBC6GDOhutW32ps/giphy.gif",  // Anya blushing
    "https://media.giphy.com/media/q1R1ZiUskINVOn6bz3/giphy.gif",  // Anya plotting
    "https://media.giphy.com/media/NuiEoMDbstN0J2KAiH/giphy.gif",  // Anya confused
    "https://media.giphy.com/media/8v6MRmBnqgjjejfbQv/giphy.gif",  // Anya smug
    "https://media.giphy.com/media/LxPhEh5yYHkviFtLUy/giphy.gif"   // Cute crying
];

let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');

    // Change text message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Change GIF
    gifImage.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
