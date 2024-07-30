// Function to toggle between dark mode and light mode
function toggleDarkMode() {
    const calculator = document.querySelector('.calculator');
    const currencySelect = document.getElementById('currency-from');
    const convertButton = document.querySelector('.convert-button');
    
    if (calculator.classList.contains('dark-mode')) {
        calculator.classList.remove('dark-mode');
        currencySelect.classList.remove('dark-mode');
        convertButton.classList.remove('dark-mode');
        document.body.style.backgroundColor = 'var(--background-color-light)';
    } else {
        calculator.classList.add('dark-mode');
        currencySelect.classList.add('dark-mode');
        convertButton.classList.add('dark-mode');
        document.body.style.backgroundColor = 'var(--background-color-dark)';
    }
}

// Add event listener to a toggle button or link

