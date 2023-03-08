const { Carrinho } = require('../../');

const buttons = document.querySelectorAll('.carrino__botao');
const itemQuantity = document.querySelector('#quantidade-item');
const itemField = document.querySelector('#valor-item');
const itemValue = document.querySelector('#valor-item').innerText;
const totalValue = document.querySelector('#valor-total-itens');
let counter = 1;

let change = Number(itemValue.replace(',', '.'));

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('subtrai')) {
            counter--;

            if(counter < 0) counter = 0;
        }

        if(btn.classList.contains('adiciona')) counter++;

        let mult = change * counter;

        let totalField = mult.toFixed(2).toString().replace('.', ',');

        itemQuantity.innerText = counter;
        itemField.innerHTML = totalField;

        totalValue.innerHTML = totalField;
    });
});



async function addItem(req, res) {
  const { name, quantity, price } = req.body;

  try {
    const item = await Item.create({ name, quantity, price });
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding item to cart' });
  }
}

async function getItems(req, res) {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting items from cart' });
  }
}

async function updateItem(req, res) {
  const id = req.params.id;
  const { quantity } = req.body;

  try {
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    await item.update({ quantity });
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating item in cart' });
  }
}

async function deleteItem(req, res) {
  const id = req.params.id;

  try {
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting item from cart' });
  }
}

module.exports = { addItem, getItems, updateItem, deleteItem };