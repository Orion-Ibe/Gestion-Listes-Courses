function addItem(name, quantity) {
    items.push({ name, quantity, purchased: false });
    updateList();
}

function deleteItem(index) {
    items.splice(index, 1);
    updateList();
}

document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const quantity = document.getElementById('item-quantity').value;
    addItem(name, quantity);
    document.getElementById('add-item-form').reset();
});
