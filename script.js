document.getElementById("button1").addEventListener("click", function () {
  const inputValue = document.getElementById("input").value;

  const newItem = document.createElement("li");
  newItem.textContent = inputValue;

  const list = document.getElementById("list");
  list.appendChild(newItem);
});
document.getElementById("button").addEventListener("click", function () {
    const list = document.getElementById("list");
  
    if (list.lastChild) {
      list.removeChild(list.lastChild);
    } else {
      alert("Aucun élément à supprimer !");
    }
  });
  