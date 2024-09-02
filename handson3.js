

document.addEventListener('DOMContentLoaded', () => {
    const Sounds  = {
        Heater1: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
        Heater2: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
        KicknHat: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
        Chord1: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'),
        Chord2: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
        DryOhh: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'),
        BldH1: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'),
        BrkSnr: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),
        Heater3: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
    };

function playSound(id) {
    const sound = Sounds[id];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
        display.textContent = id;
    }
}

const keys = document.querySelectorAll('.drum-pad');
keys.forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.id);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 100);
    });
});

document.addEventListener('keydown', (Event) => {
    const keymap = {
        'A': 'Heater1',
        'B': 'Heater2',
        'C':'KicknHat',
        'D':'Chord1',
        'E':'Chord2',
        'F':'DryOhh',
        'G': 'BldH1',
        'H':'BrkSnr',
        'I':'Heater3',
    };

    const drumId = keyMap[event.key];
    if (drumId) {
        playSound(drumId);
        const pad = document.getElementById(drumId);
        if (pad) {
            pad.classList.add('active'); // Optional: add visual feedback
            setTimeout(() => pad.classList.remove('active'), 100); // Optional: remove visual feedback
        }
    }

})

})