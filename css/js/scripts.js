```js
function updateDonations(amount) {
    let totalDonations = document.getElementById('total-donations');
    let currentTotal = parseInt(totalDonations.innerText.replace('$', ''));
    totalDonations.innerText = `$${currentTotal + amount}`;
    totalDonations.style.transform = "scale(1.2)";
    setTimeout(() => {
        totalDonations.style.transform = "scale(1)";
    }, 300);
}
```
