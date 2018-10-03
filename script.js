const formitems = document.querySelector('.add-items');
const itemList = document.querySelector('.expense')
const items = JSON.parse(localStorage.getItem('items')) || [];
// <!--empty array to store items-->
const amount = JSON.parse(localStorage.getItem('amount')) || [];
// <!-- empty array for amount-->


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

formitems.addEventListener('submit', addExpense);
populateList(items, itemList);
// populateList(amount, itemList);