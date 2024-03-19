let items = ["hello", "washing"];

const itemsDiv = document.getElementById("items");

function loadItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItems(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

renderItems();

function renderItems() {
    loadItems();
}

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

function addItems(newItem) {
    items.push(newItem);
    saveItems();
    loadItems();
}

function removeItems(idx) {
    items.splice(idx, 1);
    saveItems();
    loadItems();
}

function addNewItem() {
    const newItemInput = document.getElementById("newItemInput");
    const newItem = newItemInput.value.trim();
    if (newItem !== "") {
        addItems(newItem);
        newItemInput.value = ""; // Clear the input field after adding the item
    }
}
