const formitems = document.querySelector('.add-items');
const itemList = document.querySelector('.expense')
let items = JSON.parse(localStorage.getItem('items')) || [];
// <!--empty array to store items-->
let amount = JSON.parse(localStorage.getItem('amount')) || [];
// <!-- empty array for amount-->
const clearButton = document.querySelector('.clear');


function addExpense(e) {
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;

        const text_00 = (this.querySelector('[name=amount]')).value;

        items.push(text);
        populateList(items, itemList);
        localStorage.setItem('items', JSON.stringify(items));
        
        amount.push(text_00);
        populateList(amount, itemList);
        localStorage.setItem('amount', JSON.stringify(amount));
        
        this.reset();


}

function populateList(plates = [], platesList) {
        platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <label for="item${i}">${items[i]}</label>
        <label for="item${i}">${amount[i]}</label>
        </li>
        `;
        }).join('');
}

function clearAll() {
        localStorage.clear();
        items = [];
        amount = [];
        populateList(items, itemList);
        populateList(amount, itemList);
}

formitems.addEventListener('submit', addExpense);
clearButton.addEventListener('click', clearAll);
populateList(items, itemList);
populateList(amount, itemList);