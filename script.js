// Funkcja szyfrująca tekst przy użyciu AES
function encryptText() {
    let text = document.getElementById('plainText').value; // Pobieramy tekst, który użytkownik chce zaszyfrować
    if (text) {
        let encrypted = CryptoJS.AES.encrypt(text, 'sekretny_klucz').toString(); // Szyfrujemy tekst przy użyciu AES
        document.getElementById('encryptedText').innerText = encrypted; // Wyświetlamy zaszyfrowany tekst
    } else {
        alert("Proszę wpisać tekst do zaszyfrowania."); // Jeśli pole jest puste, wyświetlamy komunikat
    }
}

// Funkcja do szyfrowania RSA (symulacja, ponieważ w prawdziwej aplikacji potrzeba kluczy publicznych i prywatnych)
function rsaEncryptText() {
    let text = document.getElementById('rsaPlainText').value; // Pobieramy tekst do szyfrowania
    if (text) {
        let encrypted = btoa(text);  // Prosta konwersja Base64 jako przykładowe "szyfrowanie"
        document.getElementById('rsaEncryptedText').innerText = encrypted; // Wyświetlamy zaszyfrowany tekst
    } else {
        alert("Proszę wpisać tekst do zaszyfrowania."); // Jeśli pole jest puste, wyświetlamy komunikat
    }
}

// Funkcja do symulacji ataku brute-force
function bruteForce() {
    let inputPassword = document.getElementById('password').value; // Pobieramy hasło do złamania
    if (!inputPassword) {
        alert("Proszę wpisać hasło do złamania."); // Jeśli pole jest puste, wyświetlamy komunikat
        return; // Zatrzymujemy dalsze działanie funkcji
    }

    let attempts = 0; // Zmienna do liczenia prób
    let found = false; // Flaga informująca, czy hasło zostało znalezione
    
    // Zdefiniowanie dostępnych znaków (cyfry i litery)
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Pętla po wszystkich możliwych kombinacjach (od 1 do 4 znaków)
    for (let len = 1; len <= 4; len++) {  // Zmienna len oznacza długość hasła (1-4 znaki)
        const combinations = Math.pow(characters.length, len);  // Liczba kombinacji
        for (let i = 0; i < combinations; i++) {
            let guess = '';  // Zmienna przechowująca zgadywane hasło
            let temp = i;
            for (let j = 0; j < len; j++) {
                guess = characters[temp % characters.length] + guess; // Budowanie hasła z dostępnych znaków
                temp = Math.floor(temp / characters.length); // Aktualizowanie pozycji w pętli
            }
            attempts++; // Zliczanie prób
            if (guess === inputPassword) {
                found = true; // Jeśli hasło zostało złamane, ustawiamy flagę na true
                break;
            }
        }
        if (found) break;  // Jeśli hasło zostało znalezione, kończymy dalsze sprawdzanie
    }

    // Wyświetlanie wyniku
    document.getElementById('bruteResult').innerText = found ? `Hasło złamane po ${attempts} próbach` : 'Nie udało się złamać hasła';
}

// Słownik z popularnymi hasłami (można go rozbudować)
const dictionary = [
    "123456", "password", "qwerty", "123", "1234", "admin", "abc123", "abc"
];

// Funkcja do symulacji ataku słownikowego
function dictionaryAttack() {
    let inputPassword = document.getElementById('dictionaryPassword').value; // Pobieramy hasło do złamania
    let found = false; // Flaga informująca, czy hasło zostało znalezione
    
    // Przeszukiwanie słownika
    if (dictionary.includes(inputPassword)) {
        found = true; // Jeśli hasło znajduje się w słowniku, ustawiamy flagę na true
    }

    // Wyświetlanie wyniku
    document.getElementById('dictionaryResult').innerText = found 
        ? `Hasło złamane. Zostało znalezione w słowniku.` 
        : `Hasło nie zostało znalezione w słowniku.`; // Wyświetlamy odpowiedni komunikat
}

// Funkcja do połączonego ataku (Brute-Force + Słownikowy)
function combinedAttack() {
    let inputPassword = document.getElementById('combinedPassword').value; // Pobieramy hasło do złamania
    if (!inputPassword) {
        alert("Proszę wpisać hasło do złamania."); // Jeśli pole jest puste, wyświetlamy komunikat
        return; // Zatrzymujemy dalsze działanie funkcji
    }

    let found = false; // Flaga informująca, czy hasło zostało złamane
    let method = ''; // Zmienna do przechowywania metody złamania hasła
    
    // Najpierw próbujemy hasła ze słownika
    if (dictionary.includes(inputPassword)) {
        found = true; // Jeśli hasło znajduje się w słowniku, ustawiamy flagę na true
        method = 'Słownikowy atak'; // Zapisujemy metodę, jaką użyliśmy
    }
    
    // Jeśli hasło nie zostało znalezione, przechodzimy do ataku brute-force
    if (!found) {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Definiujemy dostępne znaki
        for (let len = 1; len <= 4; len++) {  // Zmienna len oznacza długość hasła (1-4 znaki)
            const combinations = Math.pow(characters.length, len);  // Liczba kombinacji
            for (let i = 0; i < combinations; i++) {
                let guess = '';  // Zmienna przechowująca zgadywane hasło
                let temp = i;
                for (let j = 0; j < len; j++) {
                    guess = characters[temp % characters.length] + guess; // Budowanie hasła
                    temp = Math.floor(temp / characters.length); // Aktualizowanie pozycji w pętli
                }
                if (guess === inputPassword) {
                    found = true; // Jeśli hasło zostało złamane, ustawiamy flagę na true
                    method = 'Brute-Force'; // Zapisujemy metodę, jaką użyliśmy
                    break;
                }
            }
            if (found) break; // Jeśli hasło zostało złamane, kończymy dalsze sprawdzanie
        }
    }

    // Wyświetlanie wyniku
    document.getElementById('combinedResult').innerText = found 
        ? `Hasło złamane metodą: ${method}`  // Wyświetlamy metodę, jaką użyto do złamania
        : `Nie udało się złamać hasła.`; // Wyświetlamy odpowiedni komunikat, jeśli nie udało się złamać hasła
}

// Przypisanie zdarzeń do przycisków
document.getElementById('encryptBtn').addEventListener('click', encryptText); // Szyfrowanie AES
document.getElementById('rsaEncryptBtn').addEventListener('click', rsaEncryptText); // Szyfrowanie RSA
document.getElementById('bruteForceBtn').addEventListener('click', bruteForce); // Atak Brute-Force
document.getElementById('dictionaryAttackBtn').addEventListener('click', dictionaryAttack); // Atak słownikowy
document.getElementById('combinedAttackBtn').addEventListener('click', combinedAttack); // Połączony atak
