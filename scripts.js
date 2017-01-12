var user = prompt("You bump into a troll in the woods. Would you like to FIGHT, FLEE or PAY?").toUpperCase();
switch(user) {
    case 'FIGHT':
        var strong = prompt("Are you strong?").toUpperCase();
        var fit = prompt("Are you fit?").toUpperCase();
        if(strong === 'YES' || fit === 'YES') {
            console.log("You rain down the blows, the troll goes down - you win!");
        } else {
            console.log("You are neither strong nor fit, either one would do, the troll beats the shit out of you!");
        }
        break;
    case 'FLEE':
        console.log("You shout 'What's over there!' and leg it! The troll loses you in the confusion");
        break;
    case 'PAY':
        var money = prompt("Do you have any money?").toUpperCase();
        var dollars = prompt("Do you have troll dollars?").toUpperCase();
        if(money === 'YES' && dollars === 'YES') {
            console.log("You pull out your wallet and the troll sniggers as he empties out your last few troll dollars. He says 'Ha ha thanks, now you are free to go!")
        } else {
        console.log("The troll is enraged by your stupidity and sets about tearing you apart and steals all your clothes");
        }
        break;
    default:
        console.log("The troll tilts his head, looks at you and punches you in the face saying 'No such thing loser!  Try again!'");
}