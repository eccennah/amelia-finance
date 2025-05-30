document.getElementById('incomeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const income = {
        amount: form.amount.value,
        date: form.date.value,
        category: form.category.value,
        notes: form.notes.value
    };
    let incomes = JSON.parse(localStorage.getItem('incomes')) || [];
    incomes.push(income);
    localStorage.setItem('incomes', JSON.stringify(incomes));
    form.reset();
    alert('Income added!');
    console.log(localStorage.getItem('incomes'));
});

