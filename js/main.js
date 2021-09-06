// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 1. creo una funziona che genera un numero random

function numeroRandom (min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// 2. creo un array con 5 numeri random e prima di aggiungere il numero random verifico se non si ripete (se già non esiste all'interno). Una volta creato stampo con un alert il suo contenuto ovvero i 5 numeri casuali

var numeriCasuali = [];

for (var i = 0; i < 5; i++) {
	var random = numeroRandom(1, 100);
    if(numeriCasuali.includes(random) == false) {
	    numeriCasuali.push(random);
    }
}

alert(numeriCasuali);

// 3. creo la funzione che dopo 30 secondi chiede all'utente di inserie 5 numeri mostrai precedentemente e verifica se ha indovinato, in caso affermativo mostra quanti numeri ha indovinato e quali numeri ha indovinato

var numeriUtente = [];
var numeriIndovinati = 0;
var indovinati = [];

setTimeout(function(){

    // 3.b chiedo all'utente di inserire un numero per 5 volte

	for (var i = 0; i < 5; i++) {
        numeriUtente.push(parseInt(prompt("Inserisci i numeri che hai visto precedentemente uno alla volta. Testa la tua memoria!")));
    }

    // 3.c  verifico per 5 volte ovvero la lunghezza dell'array se il numero inserito dall'utente è presente nell'array di numeri random creato in precedenza, in caso affermativo incremento il contatore dei numeriIndovinati e aggiungo il numero uguale nell'array indovinati per poter mostrare il suo contenuto in seguito

    for (var i = 0; i < numeriUtente.length; i++) {
        if( numeriUtente.includes(numeriCasuali[i]) ) {
            numeriIndovinati++;
            indovinati.push(numeriCasuali[i]);
        }
    }

    // 3.d mostro il totale dei numeri indovinati e quali numeri sono stati indovinati

    alert("Totale di numeri indovinati: " + numeriIndovinati + ". I numeri da te indovinati sono i seguenti: " + indovinati);

}, 30000);
