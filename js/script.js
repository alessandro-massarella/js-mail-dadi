// creo un array con vari indirizzi mail
var friendMail = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'minnie@gmail.com', 'gastone@gmail.com'];

// chiedo all'utente di inserire la propria Mail
var mailUtente = prompt ('Inserisci la tua mail');
var messaggio = ('mail NON trovata');

document.getElementById('mail').innerHTML = (messaggio);

// eseguo il ciclo che compara la mail inserita con quelle dell'Array()
for (var i = 0; i < friendMail.length; i++) {
  if (friendMail[i] == mailUtente) {
    document.getElementById('mail').innerHTML = ('mail in archivio');
  }
}




// GIOCO DEI DADI

var dadoUserEl = Math.floor(Math.random() * 6) + 1;
var dadoCpuEl = Math.floor(Math.random() * 6) + 1;

var myButtonEl = document.getElementById ('myButton');
myButtonEl.addEventListener('click', function() {
  var dadoUserEl = Math.floor(Math.random() * 6) + 1;
  var dadoCpuEl = Math.floor(Math.random() * 6) + 1;

  // mostro il risultato dei lanci
  document.getElementById('dadoUser').innerHTML = ('Il tuo dado: ' + dadoUserEl);
  document.getElementById('dadoCpu').innerHTML = ('Computer: ' + dadoCpuEl);
  if (dadoUserEl > dadoCpuEl) {
    document.getElementById('risultato').innerHTML = ('Hai VINTO!');
  } else if ( dadoUserEl < dadoCpuEl) {
    document.getElementById('risultato').innerHTML = ('Hai perso!');
  } else  {
    document.getElementById('risultato').innerHTML = ('Pari!');
  }
});
