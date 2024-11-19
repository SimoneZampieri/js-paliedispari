// chiedere all'utente di inserire una parola

let parola = prompt('Inserisci parola')

//Creare una funzione per capire se la parola è palindroma

while(!parola){
    parola = prompt('Inserisci parola')
}

const risultato = Palindroma(parola);

console.log(risultato);

function Palindroma(word) {
    const reverseWord = word.split().reverse().join('');
     if(word === reverseWord){
        console.log('La parola è palindroma')
     } else ('La parola non è palindroma')
    
}