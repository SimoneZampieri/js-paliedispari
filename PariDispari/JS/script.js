//l'utente lancia un numero da 1 a 5

let numeroPlayer;

//verifichiamo che il numero dato dal giocatore sia un numero 

let numerocorretto = false;

while(!numerocorretto){
    numeroPlayer = parseInt(prompt('Inserisci un numero compreso fra 1 e 5'));
    if(!isNaN(numeroPlayer) && numeroPlayer > 0 && numeroPlayer < 5){
      numerocorretto = true;
    }
  }

//l'utente deve inoltre specificare se giocherà pari o dispari

let giocataPlayer;

let pariDispari = false

while(!pariDispari){
    giocataPlayer = prompt('Pari o dispari?')
    if(giocataPlayer.toUpperCase() === 'Pari' || giocataPlayer.toUpperCase() === 'Dispari'){
        pariDispari = true;
    }
}

//il computer giocherà un numero randomico, tenendo conto che il minimo è 1 e il massimo è 5

const minimo = 1;
const massimo = 5;

let numeroPC = Math.ceil(Math.random()*5) * (( massimo - minimo + 1 ) + minimo);

//ora va sommato il tutto

function somma(numeroPC, numeroPlayer){
    const addizione = numeroPC + numeroPlayer;
    console.log(addizione)
    return(addizione)
}


