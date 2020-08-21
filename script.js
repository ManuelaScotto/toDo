//////////////// COSTANTI ////////////////
const newLesson = document.getElementById('formNewLesson');
const inputNew = document.getElementById('newLesson');
const filter = document.getElementById('filter');
const btnDelete = document.getElementById('btn-delete');
const ulList = document.getElementById('list');

//////////////// EVENTI ////////////////
newLesson.addEventListener('submit', addLesson);
ulList.addEventListener('click', removeLesson);
filter.addEventListener('keyup', addFilter);
btnDelete.addEventListener('click', deleteAll);

//////////////// CALLBACK ////////////////
// aggiungi 
function addLesson(e) {
    if (inputNew.value == '') {
        alert('Non hai inserito l\'input')
    } else {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(inputNew.value.toLowerCase()));
        ulList.appendChild(item);
        let close = document.createElement('span');
        item.appendChild(close);
        let i = document.createElement('i');
        i.className = "far fa-times-circle close";
        close.appendChild(i);
        inputNew.value = '';
    }
    e.preventDefault();
}

// rimuovi singolo elemento da tag fantasma
function removeLesson(e) {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove();
    }
}

// ricerca 
let li = ulList.getElementsByTagName('li');
function addFilter(e) {
    let f = e.target.value.toLowerCase();
    console.log(li);
    Array.from(li).forEach(e => {
        let liValue = (e.firstChild.textContent);
        liValue.includes(f) ? e.style.display = 'block' : e.style.display = 'none';
    })
}

// cancella tutto
function deleteAll() {
    Array.from(li).forEach(e => {
        e.remove();
    })
}