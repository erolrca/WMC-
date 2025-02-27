//Erol Rosca, 4AAIF 21.02.2025
function istPrimzahl(n) {
    if (n <= 1 || !Number.isInteger(n)) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function checkPrimzahl() {
    const zahlInput = document.getElementById('zahl');
    const zahl = parseFloat(zahlInput.value);
    const ergebnis = document.getElementById('ergebnis');
    
    if (isNaN(zahl) || !Number.isInteger(zahl) || zahlInput.value.includes('.') || zahlInput.value.includes(',')) {
        ergebnis.textContent = "UNGÜLTIG";
        ergebnis.className = "ungueltig";
        return;
    }
    
    if (istPrimzahl(zahl)) {
        ergebnis.textContent = "JA";
        ergebnis.className = "gruen";
    } else {
        ergebnis.textContent = "NEIN";
        ergebnis.className = "rot";
    }
}
