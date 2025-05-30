const form = document.getElementById('incomeForm');
const tableBody = document.querySelector('#incomeTable tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = form.amount.value;
    const date = form.date.value;
    const category = form.category.value;
    const notes = form.notes.value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${parseFloat(amount).toFixed(2)}</td>
        <td>${date}</td>
        <td>${category}</td>
        <td>${notes}</td>
    `;
    tableBody.appendChild(row);

    form.reset();
});