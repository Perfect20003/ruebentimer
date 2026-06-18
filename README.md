# Rübentimer

Ein Echtzeit-Tracking-Tool für Rübenbeete auf dem **Cytooxien Skyblock** Server.  
Entwickelt von **Perfect2003**.

---

## Features

### Beet-Tracking
- Beete hinzufügen, umbenennen und löschen
- **Wachstums-Timer** – zeigt an wie lange die Rübe noch braucht bis sie reif ist
- **Wasser-Timer** – Silberne Gießkanne (12h) oder Goldene Gießkanne (24h)
- **Verdorrungs-Timer** – startet automatisch wenn das Wasser leer ist
- **Dünger-Timer** – trackt die 4h Wirkung des Düngers
- Alle Timer sind **manuell anpassbar** per Klick auf den jeweiligen Wert

### Marktwert-Berechnung
- Globaler Marktpreis (für alle synchron, mit Tausenderpunkten)
- Marktwert wird erst angezeigt wenn die Rübe **reif** ist
- **Mutationen** beeinflussen den Preis:
  - Goldene Rübe (×10)
  - Form-Mutation: Stachelig, Quadratisch, Explosiv, Lebendig
  - Gewichts-Multiplikator (bis 5×)
- **Gesamtwert** aller reifen Beete im Header

### Marktpreis-Verlauf
- Diagramm mit Log-Skala (50k – 4 Mio) umschaltbar
- Preisverlauf-Liste mit Datum und Uhrzeit
- Verlauf seit dem 08.05.2026 aus dem Discord-Kanal importiert

### Echtzeit-Synchronisation
- Alle Daten werden live über **Firebase Firestore** synchronisiert
- Mehrere Spieler können gleichzeitig Beete verwalten
- Manuelle **Drag & Drop** Sortierung der Beete (bleibt nach Reload erhalten)

### Online-Anzeige
- Zeigt wie viele Personen die Seite gerade geöffnet haben

---

## Technischer Stack

| Technologie | Verwendung |
|---|---|
| HTML / CSS / JS | Frontend (Single-Page, keine Frameworks) |
| Firebase Firestore | Echtzeit-Datenbank |
| Firebase Analytics | Besucher-Statistiken |
| GitHub Pages | Hosting |

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
