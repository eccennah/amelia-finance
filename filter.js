function getAllEntries() {
    const incomes = JSON.parse(localStorage.getItem('incomes'));
    const expenses = JSON.parse(localStorage.getItem('expenses'));
    const incomeEntries = incomes.map(i => ({...i, type: 'income'}));
    const expenseEntries = expenses.map(e => ({...e, type: 'expense'}));
    return [incomeEntries,expenseEntries];
}

function renderTable(entries) {
    const tbody = document.querySelector('#entriesTable tbody');
    tbody.innerHTML = '';
    if (entries.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No entries found.</td></tr>';
        return;
    }
    entries.forEach(entry => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</td>
            <td>${entry.amount}</td>
            <td>${entry.date}</td>
            <td>${entry.category || ''}</td>
            <td>${entry.notes || ''}</td>
        `;
        tbody.appendChild(tr);
    });
}

function applyFilters() {
    let entries = getAllEntries();
    const type = document.getElementById('typeFilter').value;
    const date = document.getElementById('dateFilter').value;
    const minAmount = document.getElementById('minAmountFilter').value;
    const maxAmount = document.getElementById('maxAmountFilter').value;

    if (type !== 'all') {
        entries = entries.filter(e => e.type === type);
    }
    if (date) {
        entries = entries.filter(e => e.date === date);
    }
    if (minAmount) {
        entries = entries.filter(e => parseFloat(e.amount) >= parseFloat(minAmount));
    }
    if (maxAmount) {
        entries = entries.filter(e => parseFloat(e.amount) <= parseFloat(maxAmount));
    }
    renderTable(entries);
}

function resetFilters() {
    document.getElementById('typeFilter').value = 'all';
    document.getElementById('dateFilter').value = '';
    document.getElementById('minAmountFilter').value = '';
    document.getElementById('maxAmountFilter').value = '';
    renderTable(getAllEntries());
}


renderTable(getAllEntries());