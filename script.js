const zodiac = document.getElementById
("zodiac");

const body = document.body;



const changeBackground = () => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#cd5c5c";
            break;
        
        case "tarus":
            body.style.backgroundColor = "#fce514";
            break;

        case "gemini":
            body.style.backgroundColor = "#03fc6f";
            break;

        case "cancer":
            body.style.backgroundColor = "#000000";
            break;

        case "leo":
            body.style.backgroundColor = "#fa8072";
            break;

        case "virgo":
            body.style.backgroundColor = "#ffff00";
            break;

        case "libra":
            body.style.backgroundColor = "#ff7f00";
            break;

        case "scorpio":
            body.style.backgroundColor = "#00ff00";
            break;

        case "sagittarius":
            body.style.backgroundColor = "#0000ff";
            break;

        case "aquarius":
            body.style.backgroundColor = "#eb8d57";
            break;

        case "capricorn":
            body.style.backgroundColor = "#579eeb";
            break;

        case "pisces":
            body.style.backgroundColor = "#fc88d8";
            break;

    
        default:
            body.style.backgroundColor = "#fff";
            break;
    }
};

 
