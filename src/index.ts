const url = 'https://Daniel.github.io/riddles-api/riddles.json';
const btnRiddle = document.querySelector('#btn-riddle') as HTMLButtonElement | null;
const btnAnswer = document.querySelector('#btn-answer') as HTMLButtonElement | null;
const btnHintOne = document.querySelector('#btn-hintOne') as HTMLButtonElement | null;
const btnHintTwo = document.querySelector('#btn-hintTwo') as HTMLButtonElement | null;
const btnHintThree = document.querySelector('#btn-hintThree') as HTMLButtonElement | null;
const information = document.querySelector('#information') as HTMLElement | null;
const riddleQuestion = document.querySelector('#riddle-question') as HTMLElement | null;
const riddleCounter = document.querySelector('#counter-riddle') as HTMLElement | null;
const counterScore = document.createElement('h2');

interface Riddle {
    question: string;
    answer: string;
    hints: string[];
}

let riddlesArray: Riddle[] = [];
let counter = Number(localStorage.getItem('counter')) || 0;
let score = Number(localStorage.getItem('score')) || 80;
let questionCounter = 0;
let btnIsPressedRiddle = false;

counterScore.textContent = `Din nuvarande Poäng: ${score}`;
if (riddleCounter) riddleCounter.appendChild(counterScore);

async function fetchAllRiddles(): Promise<Riddle[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP-fel! status: ${response.status}`);
        const data: Riddle[] = await response.json();
        localStorage.setItem('riddles', JSON.stringify(data));
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function riddlesSetup() {
    if (riddlesArray.length > 0) return;
    const storedRiddles = JSON.parse(localStorage.getItem('riddles') || '[]');
    riddlesArray = storedRiddles.length ? storedRiddles : await fetchAllRiddles();
}

btnRiddle?.addEventListener('click', async () => {
    if (btnIsPressedRiddle) return;
    btnIsPressedRiddle = true;
    btnRiddle!.disabled = true;
    counter++;
    questionCounter = 0;
    await riddlesSetup();
    
    if (counter - 1 < riddlesArray.length && riddleQuestion) {
        riddleQuestion.textContent = riddlesArray[counter - 1].question;
        localStorage.setItem('counter', JSON.stringify(counter));
    } else {
        console.log('Inga fler gåtor är tillgängliga!');
    }
});

btnAnswer?.addEventListener('click', () => {
    if (counter === 0 || counter - 1 >= riddlesArray.length || !riddleQuestion) return;
    riddleQuestion.textContent = riddlesArray[counter - 1].answer;
});

btnHintOne?.addEventListener('click', () => revealHint(0, btnHintOne!));
btnHintTwo?.addEventListener('click', () => revealHint(1, btnHintTwo!));
btnHintThree?.addEventListener('click', () => revealHint(2, btnHintThree!));

function revealHint(index: number, button: HTMLButtonElement) {
    if (counter === 0 || counter - 1 >= riddlesArray.length || button.disabled || !riddleQuestion) return;
    button.disabled = true;
    score -= 4;
    counterScore.textContent = `Din nuvarande Poäng: ${score}`;
    localStorage.setItem('score', JSON.stringify(score));
    riddleQuestion.textContent = riddlesArray[counter - 1].hints[index] || 'Ingen ledtråd är tillgänglig';
}