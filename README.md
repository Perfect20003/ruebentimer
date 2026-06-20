# Rübentimer

Ein Echtzeit-Tracking-Tool für Rübenbeete auf dem **Cytooxien Skyblock** Server.  
Entwickelt von **Perfect2003**.

---

## Features

### Beet-Tracking
- Beete hinzufügen, umbenennen und löschen
- **Wachstums-Timer** – zeigt an wie lange die Rübe noch braucht bis sie reif ist (manuell anpassbar)
- **Wasser-Timer** – Silberne Gießkanne (12h) oder Goldene Gießkanne (24h), manuell anpassbar
- **Verdorrungs-Timer** – startet automatisch wenn das Wasser leer ist
- **Dünger-Timer** – trackt die 4h Wirkung des Düngers, manuell anpassbar
- **Standzeit** – zeigt seit wann das Beet ursprünglich angelegt wurde, bleibt unabhängig vom Dünger-Button korrekt
- **Drag & Drop** – Beete lassen sich frei per Maus sortieren, die Reihenfolge bleibt für alle erhalten

### Marktwert-Berechnung
- Globaler Marktpreis (für alle synchron, mit Tausenderpunkten)
- Marktwert wird erst angezeigt wenn die Rübe **reif** ist
- **Mutationen** beeinflussen den Preis:
  - Goldene Rübe (×10)
  - Form-Mutation: Stachelig, Quadratisch, Explosiv, Lebendig
  - Gewichts-Multiplikator (bis ×5) – berechenbar direkt über den Pixel-Abstand zum Beetrand
- **Gesamtwert** aller reifen Beete im Header

### Marktpreis-Verlauf
- Diagramm mit Log-Skala, standardmäßig aktiv
- Zeitraum wählbar: 7 Tage, 1 Monat, 3 Monate, Alles
- Preisverlauf-Liste mit Datum und Uhrzeit, einzelne Einträge löschbar
- Marktpreis-Eingabe per Mod direkt aus dem Spiel möglich (liest den Hogy-Turnips-Preis automatisch aus)

### Echtzeit-Synchronisation
- Alle Daten werden live über **Firebase Firestore** synchronisiert
- Mehrere Spieler können gleichzeitig Beete verwalten

### Online-Anzeige
- Zeigt wie viele Personen die Seite gerade geöffnet haben
- Besuchslog mit Datum, Uhrzeit, Gerät und Browser (passwortgeschützt)

---

## Technischer Stack

| Technologie | Verwendung |
|---|---|
| HTML / CSS / JS | Frontend (Single-Page, keine Frameworks) |
| Firebase Firestore | Echtzeit-Datenbank |
| GitHub Pages | Hosting |
| Fabric Mod (Java) | Automatisches Auslesen des Marktpreises im Spiel |

---

## Timer-Übersicht

| Timer | Dauer |
|---|---|
| Wachstum | 48 Stunden |
| Wasser (Silber) | 12 Stunden |
| Wasser (Gold) | 24 Stunden |
| Verdorrung | 4 Tage nach letzter Bewässerung |
| Dünger | 4 Stunden |

---

*Made by Perfect2003*
