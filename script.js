loadItem();

function handleHomeClick() {
    // Handle the click on the "Home" nav item
    console.log('Home clicked');
    // Remove active class from all nav items
    document.querySelectorAll('#nav_bar a').forEach(item => item.classList.remove('active'));
    // Add active class to Home nav item
    document.querySelector('#nav_home').classList.add('active');
    // You could add code here to switch to the home tab or perform other actions as needed
    document.querySelector('#home').classList.remove("hidden");
    document.querySelector('#about').classList.add("hidden");
}

function handleAboutClick() {
    console.log('About clicked');
    // Remove active class from all nav items
    document.querySelectorAll('#nav_bar a').forEach(item => item.classList.remove('active'));
    // Add active class to Workshops nav item
    document.querySelector('#nav_about').classList.add('active');
    // You could add code here to switch to the workshops tab or perform other actions as needed
    document.querySelector('#about').classList.remove("hidden");
    document.querySelector('#home').classList.add("hidden");
}

function loadItem() {
    fetch("dataset.json").then(res => res.json())
        .then((dataArray) => {
            if (dataArray !== undefined) {
                dataArray.forEach((data) => {
                    addItemCard(data);
                });
            }
        })
}

function addItemCard(item) {
    const itemList = document.getElementById('itemList');

    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';

    const itemName = document.createElement('h2');
    itemName.innerText = item.name;

    const itemDescription = document.createElement('p');
    itemDescription.innerText = item.description;

    const itemPrice = document.createElement('p');
    itemPrice.innerText = `Price: $${item.price}`;

    const itemImage = document.createElement('img');
    itemImage.src = item.imageUrl;
    itemImage.alt = 'Image of ' + item.name;

    itemCard.appendChild(itemName);
    itemCard.appendChild(itemDescription);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(itemImage);

    itemList.appendChild(itemCard);
}

document.getElementById('addItem').addEventListener('click', () => {
    const name = document.getElementById('itemname').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageurl').value;

    const newItem = { name, description, price, imageUrl };
    items.push(newItem);
    addItemCard(newItem);
    document.getElementById('itemname').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('imageurl').value = '';
});

document.getElementById('clearForm').addEventListener('click', () => {
    document.getElementById('itemname').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('imageurl').value = '';
});

// Button to delete all cards
document.getElementById('deleteAll').addEventListener('click', () => {
    const itemList = document.getElementById('itemList');
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    items = [];
});
