 document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const expense = {
        amount: document.getElementById('amount').value,
        date: document.getElementById('date').value,
        category: document.getElementById('category').value,
        notes: document.getElementById('notes').value
    };
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    this.reset();
    alert('Expense added!');
    console.log(localStorage.getItem('expenses'));
});