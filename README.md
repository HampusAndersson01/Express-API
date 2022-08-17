# Express-API

I den här laborationen ska du individuellt skapa ett enklare REST-API i NodeJS med
express och typescript. Då API:et skall har funktionalitet för CRUD skall det finnas 4 st
endpoints inkluderat GET, DELETE, PUT och POST för en resurs. Varje endpoint skall
utföra vad dess anropsmetod ämnar att utföra, dvs. POST för att lägga till, PUT för att
uppdatera, GET för att hämta osv. GET anropet skall hämta alla objekt. Vad API:et
hanterar för typ av resurs väljer du själva, det viktiga är att det finns minst 4 st egenskaper
för ett objekt varav en egenskap är id. Projektet skall inte ha någon databas utan istället ha
all data sparad lokalt i serverfilen (exempelvis en array med produkter). För att testa ert
API rekommenderas du att använda VS Code tilläget REST Client.

För att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub.
Inlämningen sker som vanligt via läroplattformen där du ska zippa ihop din projektmapp.
I din projektmapp ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en
titel, beskrivning av projektet, vilka krav som är uppfyllda, info om hur projektet byggs
och körs. Kom ihåg att ta bort node_modules!!!

## Krav för godkänt ##

- [ ] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [ ] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [ ] Datan som API:et hanterar sparas lokalt i serverfilen
- [ ] APIét ska svara med 404 om datan saknas.
- [X] Git & GitHub har använts
- [X] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [ ] Uppgiften lämnas in i tid!

## Krav för väl godkänt ##

- [ ] Alla punkter för godkänt är uppfyllda
- [ ] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [ ] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [ ] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objektigare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
