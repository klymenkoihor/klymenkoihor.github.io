
//Events-------------------------------------------------------
window.addEventListener('load', eventHandler);

function eventHandler (e){
    var startElement = document.getElementsByClassName('startElement');
    [].forEach.call(startElement, function(item){
        item.addEventListener('click', handleStartElementClick);
    });

    var draggableElements = document.getElementsByClassName('draggableElements');
    Array.prototype.forEach.call(draggableElements, function(item){
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });

    var droppableElements = document.getElementsByClassName('droppableElements');
    [].forEach.call(droppableElements, function(item){
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);

        item.addEventListener('dragstart', handleDragStartOfDroppableElement);
        item.addEventListener('dragend', handleDragEndOfDroppabeElement);
    });

    var cols = document.getElementsByClassName('cols');
    [].forEach.call(cols, function(item){
        item.addEventListener('dragenter', handleDragEnterOnColumn);
        item.addEventListener('dragleave', handleDragLeaveOnColumn);
        item.addEventListener('dragover', handleDragOverOnColumn);
        item.addEventListener('drop', handleDropOnColumn);
    });
}
//Creation HTML
function handleStartElementClick(e) {
    var startElement = e.target;
    var div = e.target.parentNode;
    startElement.remove();
    var input = document.createElement('input');
    input.classList.add('initialLink');
    input.placeholder = 'Add list';
    var button = document.createElement('button');
    button.classList.add('saveList');
    button.innerHTML = 'Save';
    var link = document.createElement('a');
    link.classList.add('close');
    link.innerHTML = 'X';
    var inp = div.appendChild(input);
    inp.focus();
    div.appendChild(button);
    div.appendChild(link);

    var close = div.getElementsByClassName('close');
    [].forEach.call(close, function(item){
        item.addEventListener('click', handleCloseClick);
    });

    var save = div.getElementsByClassName('saveList');
    [].forEach.call(save, function(item){
        item.addEventListener('click', handleSaveClick);
    });
}


function handleCloseClick(e) {
    debugger;
    var close = e.target;
    var div = close.parentNode;
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    var startElement = document.createElement('div');

    startElement.classList.add('startElement');
    startElement.innerHTML = 'Add list';
    div.appendChild(startElement);

    var el = div.getElementsByClassName('startElement');
    [].forEach.call(el, function(item){
        item.addEventListener('click', handleStartElementClick);
    });
}

function handleSaveClick(e){
    var save = e.target;
    var div = save.parentNode;
    var input = div.getElementsByClassName('initialLink')[0];
    var link = div.getElementsByClassName('close')[0];
    save.remove();
    link.remove();
    input.classList.remove('initialLink');
    input.classList.add('finalLink');
    var closeLink = document.createElement('a');
    closeLink.classList.add('closeLink');
    closeLink.innerHTML = 'X';
    div.appendChild(closeLink);
    var addLink = document.createElement('a');
    addLink.href = '#';
    addLink.classList.add('add');
    addLink.innerHTML = 'Add card...';
    div.appendChild(addLink);

    addLink.addEventListener('click', handleAddCardClick);

    var body = document.getElementsByTagName('body')[0];
    var newDiv = document.createElement('div');
    newDiv.classList.add('column');
    var innerDiv = document.createElement('div');
    innerDiv.classList.add('startElement');
    innerDiv.innerHTML = 'Add list';
    body.appendChild(newDiv).appendChild(innerDiv);
    innerDiv.addEventListener('click', handleStartElementClick);
    closeLink.addEventListener('click', handleCloseLinkClick);
}

function handleAddCardClick(e) {
    var addCard = e.target;
    var div = addCard.parentNode;
    addCard.style.display = 'none';

    var input = document.createElement('input');
    input.classList.add('inputCard');
    input.setAttribute('autofocus', '');
    div.insertBefore(input, addCard);

    var button = document.createElement('button');
    button.classList.add('saveCardButton');
    button.innerHTML = 'Add card';
    div.appendChild(button);
    var link = document.createElement('link');
    link.classList.add('close');
    link.innerHTML = 'X';
    div.appendChild(link);

    button.addEventListener('click', handleSaveCardClick);

    link.addEventListener('click', handleCancelCardCreationClick);
    //addCard.style.display = 'block';

}


function handleCloseLinkClick(e){
    var div = e.target.parentNode;
    div.remove();
}

function handleSaveCardClick(e) {
    var button = e.target;
    var div = button.parentNode;
debugger;
    var lastInput = div.getElementsByTagName('input');
    lastInput = lastInput[lastInput.length - 1];
    lastInput.classList.remove('inputCard');
    lastInput.classList.add('inputSavedCard');
    var newCardInput = document.createElement('input');
    newCardInput.classList.add('inputCard');
    newCardInput.setAttribute('autofocus', '');
    var addLink = div.getElementsByClassName('add')[0];
    div.insertBefore(newCardInput, addLink);



/*    var delCard = document.createElement('a');
    delCard.classList.add('delCardLink');
    delCard.innerHTML = 'X';
    lastInput.appendChild(delCard);*/


}

function handleCancelCardCreationClick(e) {
    debugger;
    var link = e.target;
    var div = link.parentNode;
    var button = div.getElementsByClassName('saveCardButton')[0];
    var lastInput = div.getElementsByTagName('input');
    lastInput = lastInput[lastInput.length - 1];
    var linkAdd = div.getElementsByClassName('add')[0];
    linkAdd.style.display = 'block';
    link.remove();
    button.remove();
    lastInput.remove();


}

//Drag Events-------------------------------------------------------
var dragStart = false;
function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', this.id);
    dragStart = true;
//    document.getElementById('drag').innerHTML = 'dragstart= ' + dragstart;

    //e.dataTransfer.setDragImage();
/*    window.addEventListener = ('mousemove', mouseFunc);

    function mouseFunc(e){
        debugger;
        var lat = e.screenX;
        var long = e.screenY;
        document.getElementById('data').innerHTML = lat +' '+ long;
        }*/
}

function handleDragEnd(e){
    dragStart = false;
//    document.getElementById('drag').innerHTML = 'dragstart= ' + dragStart;
    //this.classList.remove('rotate');
    //window.removeEventListener = ('mousemove', mouseFunc);
}

function handleDragEnter(){
    //e.preventDefault();
/*    var el = document.createElement('div');
    el.className = 'shadow';
    var last = this.childNodes;
    last = [].filter.call(last, function(item) {
        return item.nodeType == 1;
    });
    last = last[last.length-1];
    this.insertBefore(el, last);*/
}

function handleDragLeave(e){

}

function handleDragOver(e){
    e.preventDefault();
/*    var shaded = document.getElementsByClassName('shadow')[0];
    if (shaded){
        var parent = shaded.parentNode;
        parent.removeChild(shaded);
    }*/
}

function handleDrop(e){
    debugger;
    e.preventDefault();
    e.stopPropagation();
    var id = e.dataTransfer.getData('text');
    var el = document.getElementById(id);
    var last = this.childNodes;
    last = [].filter.call(last, function(item) {debugger;
        return item.nodeType == 1;

        //item.className == 'draggableElements';
    });
    last = last[last.length-1];
    this.insertBefore(el, last);

    /*var elem = document.getElementById('shadow');
    this.removeChild(elem);*/
}



//переміщення стовпців
function handleDragStartOfDroppableElement(e){
   // e.dataTransfer.effectAllowed = 'move';
   // e.dataTransfer.setData('text', this.id);
}
function handleDragEndOfDroppabeElement(){

}


function handleDragEnterOnColumn(){

}
function handleDragLeaveOnColumn(){

}
function handleDragOverOnColumn(){

}
function handleDropOnColumn(){
    e.preventDefault();
    e.stopPropagation();
    var id = e.dataTransfer.getData('text');
    var el = document.getElementById(id);
}

















/*

function handleDragStart(e) {

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', this.id);
    //e.dataTransfer.setDragImage();
}

function handleDragEnd(e){
    //this.classList.remove('rotate');
}

function handleDragEnter(){
    e.preventDefault();
    var el = document.createElement('div');
    el.className = 'shadow';
    var last = this.childNodes;
    last = [].filter.call(last, function(item) {
        return item.nodeType == 1;
    });
    last = last[last.length-1];
    this.insertBefore(el, last);
}

function handleDragLeave(e){

}

function handleDragOver(e){
    e.preventDefault();
    var shaded = document.getElementsByClassName('shadow')[0];
    if (shaded){
        var parent = shaded.parentNode;
        parent.removeChild(shaded);
    }


    /!*    alert(
            "screenX value: " + e.screenX + "\n"
            + "screenY value: " + e.screenY + "\n"
        );*!/
}

function handleDrop(e){
    e.preventDefault();
    e.stopPropagation();
    var id = e.dataTransfer.getData('text');
    var el = document.getElementById(id);
    var last = this.childNodes;
    last = [].filter.call(last, function(item) {
        return item.nodeType == 1;
    });
    last = last[last.length-1];
    this.insertBefore(el, last);

    var elem = document.getElementById('shadow');
    this.removeChild(elem);
}*/
