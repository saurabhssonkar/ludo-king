export const playSound = (soundName) => {
    try {
        const soundPath = getSoundPath(soundName);
        const audio= new Audio(soundPath)
        audio.play();


    } catch (error) {
        console.error("cannot play the sound file")

    }
}

const getSoundPath = soundName => {
    switch (soundName) {
        case "dice_roll":
            return '/assets/sfx/dice_roll.mp3';
        case "cheer":
            return '/assets/sfx/cheer.mp3';
        case "game_start":
            return '/assets/sfx/game_start.mp3';
        case "collide":
            return '/assets/sfx/collide.mp3';
        case "home_win":
            return '/assets/sfx/home_win.mp3';
        case "pile_move":
            return '/assets/sfx/pile_move.mp3';
        case "safe_spot":
            return '/assets/sfx/safe_spot.mp3';
        case "ui":
            return '/assets/sfx/ui.mp3';
        case "girl1":
            return '/assets/sfx/girl1.mp3';
        case "girl2":
            return '/assets/sfx/girl2.mp3';
        case "girl3":
            return '/assets/sfx/girl3.mp3';
            default:
                 throw new error("music play error")

    }
}

