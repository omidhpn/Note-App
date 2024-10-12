let $ = document
let addBtn = $.getElementById ('btn-save')
let deleteBtn = $.getElementById ('btn-icon')
let inputElem = $.getElementById ('input-field')
let mainDiv = $.getElementById ('listed')
let divColor = $.getElementById ('color-select')
let rowDiv = $.querySelector ('.row')



divColor.addEventListener ('click', function (event) {
    inputElem.setAttribute ('style', event.target.getAttribute ('style'))
})



function createNote () {

    if (inputElem.value === '') {

    } else {
        let pElem = $.createElement('p');
        pElem.className = 'card-text p-3';
        pElem.innerHTML = inputElem.value;
        let divElem = $.createElement('div');
        divElem.className = 'card shadow-sm rounded';
        divElem.setAttribute('style', inputElem.getAttribute('style'));
        divElem.append(pElem);
        mainDiv.append(divElem);
        inputElem.value = '';

        divElem.addEventListener('click', function () {
            divElem.remove();
        });
    }
}



inputElem.addEventListener ('keydown', function (event) {
    if (event.keyCode === 13) {
        createNote()
    }
})



addBtn.addEventListener ('click', createNote)



deleteBtn.addEventListener ('click', function () {

    inputElem.value = ''

})