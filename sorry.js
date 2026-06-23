const message = `Hello lovey. I am very sorry sa mga masasamang bagay na ginawa ko sa iyo. I can't say other words more than sorry because nagsisisi ako sa mga ginawa ko sayo. I'm thankful kasi you gave me another chance to continue loving you. I know marami akong kailangan pang gawin at ibawi para maibalik ko yung tiwalang nawala ko dahil sa mga ginawa ko noon. I hope na we can continue what we started this year. All the things na sinabi ko na I want to settle with you until the end were true. Sana hindi ka magsawa sa ugali ko Kahit alam kong masama ako and may mga times na paulit-ulit lang yung ginagawa ko. I am always trying love, and I always find ways to improve and gawin lahat ng makakaya ko mapasaya kalang and maibigay lahat sa'yo. Sana dumating yung araw na ako parin yung kasama mo kapag okay kana at isang part nalang ng journey natin yung mga masasamang nangyari ng relasyon natin. Gusto ko kasama mo ako pag kinwento mo sa babies natin na "Alam nyo bang ilang beses ako pina-iyak ng Dad nyo noon". Mga ganong klase ng bagay. I love you so much baby ko. I am really sorry kung medyo awkward parin akong kausapin ka until now. I want to take things slow with you kaya gumawa ako ng ganto para masabi ko lahat ng gusto kong sabihin sayo. Always take care baby ko and I love you so muchie <3 ( ˘ ³˘)♥︎.`;

let typingInterval;
let currentIndex = 0;
const typedTextElement = document.getElementById('typedText');
const cursorElement = document.getElementById('cursor');
const startBtn = document.querySelector('.start-btn');
const messageBox = document.getElementById('messageBox');

function startTyping() {
    // Clear any existing typing interval
    if (typingInterval) {
        clearInterval(typingInterval);
    }
    
    // Reset
    currentIndex = 0;
    typedTextElement.textContent = '';
    cursorElement.style.display = 'inline-block';
    
    // Disable button during typing
    startBtn.disabled = true;
    
    typingInterval = setInterval(() => {
        if (currentIndex < message.length) {
            typedTextElement.textContent += message.charAt(currentIndex);
            currentIndex++;
            
            // Auto scroll to bottom of message box
            messageBox.scrollTop = messageBox.scrollHeight;
        } else {
            clearInterval(typingInterval);
            cursorElement.style.display = 'none';
            startBtn.disabled = false;
        }
    }, 40); // Adjust speed here (lower = faster)
}

function resetMessage() {
    if (typingInterval) {
        clearInterval(typingInterval);
    }
    currentIndex = 0;
    typedTextElement.textContent = '';
    cursorElement.style.display = 'inline-block';
    startBtn.disabled = false;
}

// Auto-start typing when page loads
window.onload = function() {
    setTimeout(startTyping, 1000);
};