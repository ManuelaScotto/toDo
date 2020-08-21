////////////////////////////////////////////////////////////////
// creiamo le COSTANTI
////////////////////////////////////////////////////////////////
const newLesson = document.getElementById('formNewLesson'); //prendo il form
const inputNew = document.getElementById('newLesson'); //prendo l'input 
const filter = document.getElementById('filter'); //prendo l'input filter 
const btnDelete = document.getElementById('btn-delete'); //prendo il button azzera 
const ulList = document.getElementById('list'); //prendo la ul dove devo inserire gli elementi nuovi


////////////////////////////////////////////////////////////////
// creiamo gli EVENTI 
////////////////////////////////////////////////////////////////
newLesson.addEventListener('submit', addLesson); // siccome ho un form inserisco l'evento SUBMIT per applicarlo sul button (type='submit'), in questo modo applico l'evento sul form così posso recuperare facilmente i dati dell'input
ulList.addEventListener('click', removeLesson); // per poter cancellare ogni singolo elemento non posso creare l'evento su un elemento che non esiste in HTML, ma devo prendere l'elemento più vicino, in questo caso la ul 
filter.addEventListener('keyup', addFilter); // si attiva quando sollevo il tasto 
btnDelete.addEventListener('click', deleteAll);


////////////////////////////////////////////////////////////////
// creiamo le CALLBACK
////////////////////////////////////////////////////////////////
//aggiungiamo gli elementi 
function addLesson(e) {
    if (inputNew.value == '') { //funzione di controllo 
        alert('Non hai inserito l\'input')
    } else {
        console.log(inputNew.value);
        // creiamo il nuovo elemento li 
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(inputNew.value.toLowerCase())); // inseriamo il valore preso dall'input 
        ulList.appendChild(item); //lo stampiamo dentro ul
        // creiamo uno span per inserire l'icona delete
        let close = document.createElement('span');
        item.appendChild(close);
        let i = document.createElement('i');
        i.className = "far fa-times-circle close";
        close.appendChild(i);
        inputNew.value = ''; // per azzerare l'input una volta inviato
    }
    e.preventDefault();
}


// rimuoviamo i singoli elementi
function removeLesson(e) {
    console.log(e.target); //mi indica il tipo di elemento che sto cliccando 
    // creiamo un controllo: se l'elemento che stiamo cliccando contiene la classe delete allora rimuovi
    // senza questo controllo cliccando ad esempio nella ul mi rimuove tutto il container  
    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove(); // rimuove tutto l' li (rimuovo il secondo genitore da i )
    }
}


// ricerca
let li = ulList.getElementsByTagName('li'); //creiamo una variabile al di fuori della funzione perchè ci serve anche per quella successiva. getElementsByTagName torna una collection di li 
function addFilter(e) {
    let f = e.target.value.toLowerCase(); //valore dell'input minuscolo
    console.log(f);
    console.log(li); // la collection 
    // dobbiamo ciclare li per recuperare il contenuto di ognuno e riuscire cosi a confrontarlo con il valore dell'input
    // per fare ciò dobbiamo prima convertire la collection in array utilizzando Array.from
    Array.from(li).forEach(e => {
        let liValue = (e.firstChild.textContent); //ora possiamo recuperare il contenuto di ogni li 
        console.log(liValue);
        liValue.includes(f) ? e.style.display = 'block' : e.style.display = 'none'; //  operatore ternario (se liValue contiene f allora mostra altrimenti nascondi)
        // ALTRO METODO USANDO INDEXOF
        // if (liValue.indexOf(f) > -1) {
        //     e.style.display = 'block';
        // } else {
        //     e.style.display = 'none';
        // }
        // se f ha una posizione (quindi > 1) rispetto a liValue vuol dire che esiste (altrimenti restituisce -1) 
    })
}


// cancella tutti gli li 
// ciclo all'interno di li per rimuoverli
function deleteAll() {
    Array.from(li).forEach(e => {
        e.remove();
    })
}