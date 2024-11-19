// chiedere all'utente di inserire una parola

const parola = prompt('Inserisci parola')

//Creare una funzione per capire se la parola è palindroma

function palindroma (parola){
    let palindroma = parola.split(' ')
    palindroma = parola.reverse()
    palindroma = parola.join()

    if(parola === palindroma){
        console.log('la parola è palindroma')
    } else{
        console.log('non è palindroma')
    }

    return(palindroma)
}