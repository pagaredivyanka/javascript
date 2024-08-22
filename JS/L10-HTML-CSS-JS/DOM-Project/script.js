// String(25)
// console.log('25' - 5);

// window.console.log('window');

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}
function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    // console.log(cost);
    // console.log(typeof cost);


    if (cost < 40) {
        cost = cost + 10;
    }
    
    document.querySelector('.js-totat-cost').innerHTML = `$${cost}`;
}

function subscibe() {
    const buttonElement =  document.querySelector('.js-subscibe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}