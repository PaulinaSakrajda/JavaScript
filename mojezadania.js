const formSubmitButton = document.querySelector('#formSubmitButton');
const newItemInput = document.querySelector('#newItem');
const items = document.querySelector('#items');
const deleteButton = document.querySelector('#deleteButton');
const itemHelp = document.querySelector('#itemHelp');

if (!newItemInput.value) {
  formSubmitButton.disabled = true;
}

newItemInput.addEventListener('input', event => {
  if (event.target.value.length > 2) {
    formSubmitButton.disabled = false;
    itemHelp.classList.add('invisible');
  } else {
    disableSubmitButton();
  }
});

function disableSubmitButton() {
  formSubmitButton.disabled = true;
  itemHelp.classList.remove('invisible');
}

formSubmitButton.addEventListener('click', event => {
  event.preventDefault();
  createNewItem2();
});

deleteButton.addEventListener('click', clearAllItems);

function createNewItem() {
  const newElement = document.createElement('p');
  newElement.innerText = newItemInput.value;
  newElement.classList.add('card');
  newElement.classList.add('card-body');
  newElement.classList.add('item');
  items.appendChild(newElement);
  newItemInput.value = '';
  disableSubmitButton();
}

function clearAllItems() {
  items.innerHTML = '';
  newItemInput.value = '';
  disableSubmitButton();
}


items.addEventListener('click', event => {
  if (event.target.classList.contains('btn-warning')) {
    console.log(event);
    event.target.parentElement.remove();
  }
});

function createNewItem2() {
  const newElement = document.createElement('p');
  newElement.classList.add('card');
  newElement.classList.add('card-body');
  newElement.classList.add('item');
  newElement.appendChild(createNewText());
  newElement.appendChild(createNewButton());
  items.appendChild(newElement);
  newItemInput.value = '';
  disableSubmitButton();
}

function createNewText() {
  const newText = document.createElement('span');
  newText.innerText = newItemInput.value;
  return newText;
}

function createNewButton() {
  const newButton = document.createElement('button');
  newButton.classList.add('btn');
  newButton.classList.add('btn-warning');
  newButton.innerText = 'Usuń zadanie';
  return newButton;
}
