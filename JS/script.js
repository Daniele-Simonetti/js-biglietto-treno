// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// 1.chiedere all'utente il numero di chilometri che vuole percorrere
let NumeroKm = parseInt(prompt('Indica il numero di KM da percorrere'));
console.log('numero di chilometri', NumeroKm);
// 2.chiedere l'età del passeggero
let EtaPasseggero = parseInt(prompt('Indica età del passeggero'));
console.log('Età del passeggero', EtaPasseggero);
// 3.calcola il prezzo del biglietto per il numero di km
let PrezzoBigliettoBase = NumeroKm * 0.21;
console.log('Prezzo dei chilometri in euro', PrezzoBigliettoBase, '€');
// 4.applicare le due varianti degli sconti e proiettarle a schermo
if (EtaPasseggero < 18) {
  let PrezzoJunior = (PrezzoBigliettoBase * 20) / 100;
  PrezzoJunior = parseInt(PrezzoBigliettoBase - PrezzoJunior).toFixed(2);
  console.log('prezzo junior', PrezzoJunior, '€');
  // proiezione a schermo
  document.getElementById('Prezzo').innerHTML = 'Questo è il prezzo ' + PrezzoJunior + ' €';
} else if (EtaPasseggero > 65) {
  let PrezzoSenior = (PrezzoBigliettoBase * 40) / 100;
  PrezzoSenior = parseInit(PrezzoBigliettoBase - PrezzoSenior).toFixed(2);
  console.log('prezzo senior', PrezzoSenior, ' €');
  // proiezione a schermo
  document.getElementById('Prezzo').innerHTML = 'Questo è il prezzo ' + PrezzoSenior + ' €';
} else {
  console.log('prezzo intero', PrezzoBigliettoBase);
  // proiezione a schermo
  document.getElementById('Prezzo').innerHTML = 'Questo è il prezzo ' + PrezzoBigliettoBase + ' €';
}


