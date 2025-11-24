## To repozytorium zawiera dokumentację również w języku polskim, która znajduje się poniżej.

# 🇬🇧 SecureCrypt

    SecureCrypt is a web-based application designed to demonstrate how data encryption works and how easily weak passwords can be compromised.
    The project helps users understand the importance of strong password practices and secure data handling.

    The application shows:
        •	How encryption hides sensitive data using AES and RSA
        •	How password-cracking techniques work, exposing vulnerabilities of weak passwords

# ⚙️ 2. Application Features

    SecureCrypt provides five main functionalities: 

## 2.1 AES Encryption
	•	Converts plaintext into unreadable ciphertext.
	•	Can only be decrypted using the correct key.

## 2.2 RSA Encryption
	•	Uses a public key for encryption and a private key for decryption.
	•	Commonly used in SSL, secure messaging, and digital signatures.

## 2.3 Brute-Force Attack
	•	Tries every possible combination of characters.
	•	Demonstrates how password length and complexity affect security.

## 2.4 Dictionary Attack
	•	Uses lists of the most common passwords (e.g., “123456”, “password”).
	•	Very fast but effective only against simple passwords.

## 2.5 Hybrid Attack
	•	First performs a dictionary attack.
	•	If unsuccessful, switches to brute-force.
	•	Reflects real-world password-cracking strategies.

# 🔐 3. Encryption Algorithms

## 3.1 AES (Advanced Encryption Standard)

    AES is a symmetric encryption algorithm known for speed and high security.
    It processes data through several transformation rounds, making it extremely resistant to decryption without the correct key.

## 3.2 RSA (Rivest–Shamir–Adleman)

    RSA is an asymmetric encryption method using two keys:
        •	Public key – for encryption
        •	Private key – for decryption

    Used in:
        •	encrypted online communication,
        •	SSL certificates,
        •	secure key exchange.

# 💥 4. Attack Methods

## 4.1 Brute-Force Attack

    Attempts every possible character combination.
    The longer and more complex the password, the harder it is to crack.

## 4.2 Dictionary Attack

    Uses predefined lists of the most commonly used passwords.
    Extremely fast, but ineffective against unique or complex passwords.

## 4.3 Hybrid Attack

    Combines the two above:
        1.	Start with dictionary entries
        2.	If not found — switch to brute-force

# 🛠 5. Technologies Used
	•	HTML – UI structure
	•	CSS – styling
	•	JavaScript – application logic
	•	CryptoJS – AES & RSA implementations

# 📝 6. Conclusions & Recommendations

    SecureCrypt demonstrates that:
        •	simple passwords are extremely easy to break,
        •	brute-force and dictionary attacks remain effective against weak passwords,
        •	strong security requires:
        •	long, complex passwords,
        •	login attempt limits,
        •	encryption of sensitive data using robust algorithms (AES, RSA).

**────────────────────────**

# 🇵🇱 SecureCrypt

    SecureCrypt to aplikacja webowa stworzona w celu pokazania, jak można chronić dane poprzez szyfrowanie oraz jak działają popularne techniki łamania haseł.
    Projekt ma pomóc użytkownikom zrozumieć, dlaczego mocne hasła i odpowiednie zabezpieczenia są tak istotne w codziennym korzystaniu z technologii.

    Aplikacja demonstruje:
        •	Jak wygląda szyfrowanie danych, czyli zamiana czytelnego tekstu na formę niemożliwą do odczytania bez odpowiedniego klucza.
        •   Jak przebiegają ataki na hasła, oraz jak łatwo daje się złamać proste i popularne hasła.

# ⚙️ 2. Funkcjonalności aplikacji

    SecureCrypt udostępnia pięć głównych funkcji związanych z kryptografią i łamaniem haseł:

## 2.1 Szyfrowanie AES
	•	Zamienia tekst na zaszyfrowaną postać przy użyciu klucza.
	•	Szybkie, skuteczne i często wykorzystywane w systemach komercyjnych.

## 2.2 Szyfrowanie RSA
	•	Używa dwóch kluczy:
	•	publicznego do szyfrowania,
	•	prywatnego do odszyfrowania danych.
	•	Stosowane m.in. w certyfikatach SSL, podpisach cyfrowych i przy bezpiecznej komunikacji.

## 2.3 Atak brute-force
	•	Sprawdza wszystkie możliwe kombinacje znaków.
	•	Pozwala zobaczyć, jak złożoność hasła wpływa na czas jego złamania.

## 2.4 Atak słownikowy
	•	Wykorzystuje listę najpopularniejszych haseł (np. „123456”, „qwerty”, „password”).
	•	Bardzo szybki, lecz skuteczny tylko wobec prostych haseł.

## 2.5 Połączony atak
	•	Najpierw wykonuje atak słownikowy.
	•	Jeśli to nie wystarczy, to przechodzi do brute-force.
	•	Realistyczne odwzorowanie taktyk wykorzystywanych przez prawdziwych atakujących.

# 🔐 3. Opis algorytmów szyfrowania

## 3.1 AES (Advanced Encryption Standard)

    AES to jeden z najbezpieczniejszych i najpopularniejszych algorytmów szyfrowania symetrycznego.
    Działa w oparciu o przekształcanie danych w kilku rundach, które skutecznie uniemożliwiają odczytanie zaszyfrowanego tekstu bez klucza.

    Cechy:
        •	szybkość,
        •	wysoki poziom bezpieczeństwa,
        •	używany w bankowości, WiFi, komunikatorach i w ochronie danych użytkowników.

## 3.2 RSA (Rivest–Shamir–Adleman)

    RSA jest algorytmem asymetrycznym wykorzystującym dwa klucze:
        •	publiczny do szyfrowania,
        •	prywatny do odszyfrowania.

    Stosowany do:
        •	szyfrowanej komunikacji,
        •	podpisów cyfrowych,
        •	wymiany kluczy w protokołach sieciowych.

    Dzięki podziałowi funkcji na dwa klucze oferuje wysoki poziom bezpieczeństwa.

# 💥 4. Opis ataków

## 4.1 Atak brute-force

    Atakujący testuje wszystkie możliwe kombinacje znaków.
    Im bardziej skomplikowane i dłuższe hasło – tym dłużej trwa jego złamanie.

## 4.2 Atak słownikowy

    Korzysta z gotowych list najczęściej używanych haseł.
    Bardzo szybki, ale skuteczny tylko wtedy, gdy ofiara używa słabego, popularnego hasła.

## 4.3 Atak połączony

    Połączenie obu metod:
        1.	Najpierw sprawdzane są hasła ze słownika.
        2.	Jeśli nie zadziała – aplikacja przechodzi do brute-force.

    Jest to jedna z najczęściej stosowanych w praktyce technik łamania haseł.

# 🛠 5. Technologie wykorzystane w aplikacji

    SecureCrypt został zbudowany przy użyciu:
        •	HTML – struktura interfejsu,
        •	CSS – stylowanie wyglądu,
        •	JavaScript – logika działania aplikacji i obsługa mechanizmów szyfrowania,
        •	CryptoJS – biblioteka odpowiedzialna za implementację AES i RSA.

# 📝 6. Wnioski i rekomendacje

    SecureCrypt pokazuje, że:
        •	słabe hasła mogą zostać złamane w bardzo krótkim czasie,
        •	ataki brute-force i słownikowe są skuteczne wobec prostych haseł,
        •	aby zapewnić bezpieczeństwo danych, należy:
        •	stosować długie i złożone hasła,
        •	ograniczać liczbę prób logowania,
        •	szyfrować wrażliwe dane przy użyciu bezpiecznych algorytmów (np. AES, RSA).
