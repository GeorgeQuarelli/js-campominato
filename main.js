//campo minato
// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50

// VARIABILI
var bombe = []; //bombe
var numeri_Utente = []; //numeri inseriti dall'Utente
var lista_numeri_utente = []; //lista dei numeri inseriti dall'Utente
var score = 0; // punteggio

//creazione numeri
for (var i = 0; i < 16; i++) {
    var numRandom = Math.floor( Math.random() * 100) + 1;
        if (bombe.includes(numRandom)) {
          i--; }
        else {
          bombe.push(numRandom);
        }
}
console.log(bombe);

//inserimento numeri Utente e controllo

for (var i = 0; i < 84; i++) {
  numeri_Utente = parseInt( prompt('Inserisci un numero'));
  if (numeri_Utente < 1 || numeri_Utente > 100 || isNaN(numeri_Utente)) {
    alert('hai inserito un numero non valido (compreso tra 1 e 100)');
    i--;
  } else if (lista_numeri_utente.includes(numeri_Utente)) {
    alert('Non puoi inserire lo stesso numero');
    i--;
  } else if (bombe.includes(numeri_Utente)) {
    alert('Hai perso');
    break;
  } else {
    lista_numeri_utente.push(numeri_Utente);
    score += 1;
    }
}

console.log(lista_numeri_utente);
console.log('score: ', score);

alert('Hai totalizzato ' + score + ' punti.')
