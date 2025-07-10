// as instructed I need to declare three variables

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// We identified this variable as li, however, that was just for simplicity.
// The variable identifier / name did not have to be named the same as the element being created.

const li = document.createElement('li');

// create a delete button
const deleteButton = document.createElement('button');



button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = ' ❌';

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    li.append(deleteButton);
    list.append(li);

    input.value = '';       // Clear the input field
    input.focus();
  } else {
    alert('Please enter a chapter before addding');
    input.focus();
  }
})