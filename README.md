# Depature App (ueK294)

## Ordnerstruktur

```
departure
|   public
|   | index.html
|   src
|   | __tests__
|   | assets
|   |   | i18n
|   |   |   de-translations.json
|   |    _variables.scss
|   | components
|   | pages
|   |   |   dashboard.page.jsx
|   |   |   dashboard.page.scss
|   | services
|   |   auth.service.js
|   |interceptors
|   |   request.interceptor.js
|   |   response.interceptor.js
|   |guards
|   |   auth
|   |   |   auth.guard.jsx
|   index.jsx
```
/components: Alle Komponenten der Applikation.
<br />
/pages: Alle Seiten der Applikation.
<br />
/services: Alle Services der Applikation.
<br />
/assets/i18n: Die Übersetzungsdateien
<br />
/assets/_variables.scss: Custom-CSS
<br />
/guards/auth/auth.guard.jsx: Guard für die Authentifizierung
<br />
/interceptors/: Interceptor, einen für Response und Request.

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
>
> npm run setup
> 
> npm start


### Projekt starten
> npm i
>
> npm start

### Tests starten
> npm test

### Projekt linten
> npm run lint

### Projekt nach Prettier-Rules formatieren
> npm run format


### Lint Regeln
Das Projekt verwendet die airbnb-StyleGuides, React-StyleGuides und Custom-StyleGuides.
