const newLesson = document.getElementById('formNewLesson');
const inputNew = document.getElementById('newLesson');
const filter = document.getElementById('filter');
const btnDelete = document.getElementById('btn-delete');
const ulList = document.getElementById('list');

newLesson.addEventListener('submit', addLesson);
ulList.addEventListener('click', removeLesson);
filter.addEventListener('keyup', addFilter);
// btnDelete.addEventListener('submit', deleteAll);

function addLesson(e) {
    if (inputNew.value == '') {
        alert('Non hai inserito l\'input')
    } else {
        console.log(inputNew.value);
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

function removeLesson(e) {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove();
    }
}

function addFilter(e) {
    let f = e.target.value;
    let list = document.getElementById('list');
    console.log(f);
    console.log(list.firstChild.textContent)
    // if (!input.value.includes(f)) {
    //     console.log('not');
    // }

}
