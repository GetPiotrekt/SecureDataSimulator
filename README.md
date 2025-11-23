🇵🇱 SecureDataSimulator

Projekt ma na celu uświadomienie użytkownikom, dlaczego bezpieczeństwo danych jest ważne, oraz w jaki sposób chronić się przed wyciekiem poufnych informacji.
Aplikacja demonstruje:
	•	Szyfrowanie danych — zamiana tekstu na formę nieczytelną dla osób nieuprawnionych.
	•	Ataki na hasła — pokazanie, jak łatwo można złamać proste hasła oraz jakie metody stosują atakujący.

⚙️ 2. Funkcjonalności aplikacji

Aplikacja oferuje pięć głównych funkcji:

🔐 Szyfrowanie AES
	•	Zamienia tekst na zaszyfrowaną postać, którą da się odczytać tylko przy użyciu właściwego klucza.

🔐 Szyfrowanie RSA
	•	Używa dwóch kluczy:
	•	publicznego do szyfrowania,
	•	prywatnego do odszyfrowania danych.

🧨 Atak brute-force
	•	Sprawdza wszystkie możliwe kombinacje znaków.
	•	Pokazuje, jak długo trwa złamanie prostego hasła.

📚 Atak słownikowy
	•	Korzysta z listy popularnych haseł (np. 123456, qwerty, password).
	•	Szybszy niż brute-force, ale mniej skuteczny wobec unikalnych haseł.

🔥 Połączony atak
	•	Najpierw wykonuje atak słownikowy.
	•	Jeśli nie znajdzie hasła, przechodzi do brute-force.

🔐 3. Opis algorytmów szyfrowania

3.1 AES (Advanced Encryption Standard)

AES to jeden z najpopularniejszych i najbezpieczniejszych algorytmów szyfrowania symetrycznego.
Działa na zasadzie przekształcania danych w kilku rundach, co sprawia, że bez klucza odczytanie informacji jest praktycznie niemożliwe.

3.2 RSA (Rivest–Shamir–Adleman)

RSA to algorytm asymetryczny, używający dwóch kluczy:
	•	publicznego — udostępnianego innym, służy do szyfrowania,
	•	prywatnego — przechowywanego w tajemnicy, służy do odszyfrowywania.

Jest powszechnie używany w certyfikatach SSL, komunikacji szyfrowanej i podpisach cyfrowych.

💥 4. Opis ataków

4.1 Atak brute-force

Polega na sprawdzaniu każdej możliwej kombinacji znaków.
Im dłuższe i bardziej skomplikowane hasło, tym trudniej je złamać.

4.2 Atak słownikowy

Wykorzystuje gotowe listy najpopularniejszych haseł.
Bardzo skuteczny wobec prostych i powtarzalnych haseł.

4.3 Atak połączony

Łączy obie metody:
	1.	Najpierw sprawdza słownik.
	2.	Jeśli brak wyników — przechodzi do brute-force.

🛠 5. Technologie wykorzystane w aplikacji

Aplikacja została zbudowana przy użyciu:
	•	HTML — struktura interfejsu,
	•	CSS — stylowanie,
	•	JavaScript — logika działania oraz obsługa algorytmów,
	•	CryptoJS — biblioteka umożliwiająca szyfrowanie AES i RSA.

🧪 6. Przykłady wyników
	•	6.1 Wynik szyfrowania AES
	•	6.2 Wynik szyfrowania RSA
	•	6.3 Przykład działania brute-force
	•	6.4 Przykład działania ataku słownikowego
	•	6.5 Wynik połączonego ataku

📝 7. Wnioski i rekomendacje

Aplikacja pokazuje, że:
	•	słabe hasła są niezwykle łatwe do złamania,
	•	ataki brute-force i słownikowe są skuteczne wobec użytkowników stosujących proste hasła,
	•	najlepszą ochroną jest:
	•	stosowanie długich i złożonych haseł,
	•	blokada liczby prób logowania,
	•	szyfrowanie danych kluczowymi algorytmami (np. AES, RSA).
