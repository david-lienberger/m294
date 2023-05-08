# Depature App (ueK294)

## Ordnerstruktur

```
departure
|   public
|   | index.html
|   src
|   | __tests__
|   | components
|   | pages
|   |   |   dashboard.page.jsx
|   | services
|   index.jsx
```
/components: Alle Komponenten der Applikation.
<br />
/pages: Alle Seiten der Applikation.
<br />
/services: Alle Services der Applikation.

<b>Components</b>: Software-Stücke welche wiederverwendet werden. Z. B. eine Navbar.
<br />
<b>Pages</b>: Seiten der Applikation. Diese verwenden die Komponenten.
Z. B. ein Dashboard oder eine Detailansicht. Hier kommt nur Anzeige-Logik rein.
<br />
<b>Services</b>: Hier kommt die Business-Logik und API-Calls rein.


### Konventionen
Alle Dateien sind folgendermassen zu benennen:
> was.<component|page|service>.jsx

API-Calls werden mit Axios gemacht.

Forms und Form-Controls werden mit Formik und Yup gemacht.

## Setupanleitung

Dieses Backend starten.
https://github.com/it-ninjas/fuek-departure-api
> npm i

> npm start


### Projekt starten
> npm start

### Tests starten
> npm test

### Projekt linten
> npm run lint

### Projekt nach Prettier-Rules formatieren
> npm run format


### Lint Regeln

Alle Dateien sind mit ESLint gestyled worden.