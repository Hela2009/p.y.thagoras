const aSlider = document.getElementById("aSlider");
const bSlider = document.getElementById("bSlider");

const aValue = document.getElementById("aValue");
const bValue = document.getElementById("bValue");
const cValue = document.getElementById("cValue");


function updateTriangle() {

    const a = Number(aSlider.value);
    const b = Number(bSlider.value);

    const c = Math.sqrt(
        (a * a) + (b * b)
    );

    aValue.textContent = a;
    bValue.textContent = b;
    cValue.textContent = c.toFixed(2);
}


aSlider.addEventListener("input", updateTriangle);
bSlider.addEventListener("input", updateTriangle);

updateTriangle();


/* MUSIC */

let audioContext = null;


function playSound(ratio) {

    if (!audioContext) {

        audioContext =
            new (window.AudioContext ||
            window.webkitAudioContext)();

    }

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type = "sine";

    oscillator.frequency.value =
        220 * ratio;


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.2,
        audioContext.currentTime + 0.03
    );


    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.8
    );


    oscillator.connect(gain);
    gain.connect(audioContext.destination);


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.8
    );
}


/* GAME */

function checkAnswer(answer) {

    const result =
        document.getElementById("result");


    if (answer === 10) {

        result.textContent =
            "✓ Correct! 6² + 8² = 10²";

        result.style.color = "#d8eaf1";

    } else {

        result.textContent =
            "Not quite — try a² + b² = c².";

        result.style.color = "#e5c5a4";
    }
}
