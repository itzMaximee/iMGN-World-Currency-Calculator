function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currency-from').value;

    let knuts, sickles, galleons;

    switch (currencyFrom) {
        case 'knut':
            knuts = amount;
            sickles = amount * 0.03448;
            galleons = amount * 0.002028;
            break;
        case 'sickle':
            knuts = amount * 29;
            sickles = amount;
            galleons = amount * 0.05882;
            break;
        case 'galleon':
            knuts = amount * 493;
            sickles = amount * 17;
            galleons = amount;
            break;
    }

    document.getElementById('knut-result').innerText = `${knuts.toFixed(2)} Knuts`;
    document.getElementById('sickle-result').innerText = `${sickles.toFixed(2)} Sickles`;
    document.getElementById('galleon-result').innerText = `${galleons.toFixed(2)} Galleons`;
}

