// creo un array con vari indirizzi mail
var friendMail = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'minnie@gmail.com', 'gastone@gmail.com'];

// chiedo all'utente di inserire la propria Mail
var mailUtente = prompt ('Inserisci la tua mail');



// eseguo il ciclo che compara la mail inserita con quelle dell'Array()
for (var i = 0; i < friendMail.length; i++) {
  if (friendMail[i] == mailUtente) {
    document.getElementById('mail').innerHTML = ('mail in archivio');
  } else if {
    (friendMail[i] !== mailUtente)
  } 
    document.getElementById('mail').innerHTML = ('mail NON in archivio');
}
