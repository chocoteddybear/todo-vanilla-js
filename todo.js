const doneIcon = '<i class="material-icons">done</i>';
const removeIcon = '<i class="material-icons">clear</i>';

document.getElementById("add").addEventListener("click", function() {
  const value = document.getElementById("text").value;
  if (value) addItem(value);
  document.getElementById("text").value = "";
});

function removeItem() {
  const item = this.parentNode.parentNode;
  const list = item.parentNode;

  list.removeChild(item);
}

function completeItem() {
  const item = this.parentNode.parentNode;
  const list = item.parentNode;
  const listID = list.id;
  let target;

  if (listID === "todo") {
    target = document.getElementById("complete");
  } else {
    target = document.getElementById("todo");
  }

  list.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItem(text) {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "listItem");

  const todoText = document.createElement("div");
  todoText.setAttribute("class", "todoText");
  todoText.innerText = text;

  const buttonWrap = document.createElement("div");
  buttonWrap.setAttribute("class", "buttonWrap");

  const removeButton = document.createElement("button");
  removeButton.setAttribute("class", "removeButton");
  removeButton.innerHTML = removeIcon;

  const completeButton = document.createElement("button");
  completeButton.setAttribute("id", "completeButton");
  completeButton.setAttribute("class", "completeButton");
  completeButton.innerHTML = doneIcon;

  listItem.appendChild(todoText);
  listItem.appendChild(buttonWrap);
  buttonWrap.appendChild(removeButton);
  buttonWrap.appendChild(completeButton);

  removeButton.addEventListener("click", removeItem);
  completeButton.addEventListener("click", completeItem);

  const list = document.getElementById("todo");
  list.insertBefore(listItem, list.childNodes[0]);
}

const nums = [1, 2, 3, 4, 5];
const reducer = (previousNum, currentNum) => previousNum + currentNum;

console.log(nums.reduce(reducer));
