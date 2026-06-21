# Rübentimer

Ein Echtzeit-Tracking-Tool für Rübenbeete auf dem **Cytooxien Skyblock** Server.  
Entwickelt von **Perfect2003**.

---

## Features

### Beet-Tracking
- Beete hinzufügen, umbenennen und löschen
- **Wachstums-Timer** – zeigt an wie lange die Rübe noch braucht bis sie reif ist (manuell anpassbar, bis auf die Sekunde genau)
- **Wachstum pausiert automatisch**, sobald das Beet kein Wasser mehr hat – läuft erst weiter, sobald wieder gegossen wird
- **Wasser-Timer** – Silberne Gießkanne (12h) oder Goldene Gießkanne (24h), manuell anpassbar
- **Verdorrungs-Timer** – startet automatisch wenn das Wasser leer ist
- **Dünger-Timer** – trackt die 4h Wirkung des Düngers, manuell anpassbar
- **Standzeit** – zeigt seit wann das Beet ursprünglich angelegt wurde (Tage/Stunden/Minuten), bleibt unabhängig vom Dünger-Button korrekt
- **Notizfeld** pro Beet für eigene Kommentare
- **Drag & Drop** – Beete lassen sich frei per Maus sortieren, die Reihenfolge bleibt für alle erhalten
- **Mehrfachauswahl** – mehrere Beete gleichzeitig auswählen und in einem Schritt bewässern, düngen, zurücksetzen oder löschen

### Karten- & Listenansicht
- **Kartenansicht** – große, übersichtliche Kacheln mit allen Details
- **Listenansicht** – kompakte Tabellenform für viele Beete auf einen Blick, sortierbar nach Verdorrung, Reife, Wasser, Dünger, Gewicht, Mutation, Marktwert oder Name
- Auswahl wird gespeichert und bleibt beim nächsten Besuch erhalten

### Marktwert-Berechnung
- Globaler Marktpreis (für alle synchron, mit Tausenderpunkten)
- Marktwert wird erst angezeigt wenn die Rübe **reif** ist
- **Mutationen** beeinflussen den Preis:
  - Goldene Rübe (×10) – im Namen golden hervorgehoben
  - Form-Mutation: Stachelig, Quadratisch, Explosiv, Lebendig
  - Gewichts-Multiplikator (bis ×5) – berechenbar direkt über den Pixel-Abstand zum Beetrand
- **Gesamtwert** aller reifen Beete im Header

### Marktpreis-Verlauf
- Diagramm mit Log-Skala, Achsenbeschriftung passt sich dynamisch an die sichtbaren Werte an
- Zeitraum wählbar: 7 Tage, 1 Monat, 3 Monate, Alles
- Preisverlauf-Liste mit Datum und Uhrzeit, einzelne Einträge löschbar (übernimmt automatisch den nächsten gültigen Preis)
- Export als **CSV** oder **PDF** (mit Diagramm im gleichen Look wie auf der Website), eigene Zeitraum-Auswahl beim Export
- Marktpreis-Eingabe per Mod direkt aus dem Spiel möglich (liest den Hogy-Turnips-Preis automatisch aus)

### Echtzeit-Synchronisation
- Alle Daten werden live über **Firebase Firestore** synchronisiert
- Mehrere Spieler können gleichzeitig Beete verwalten
- Anonyme Firebase-Authentifizierung für sicheres Schreiben

### Bearbeitungsschutz
- Passwortschutz für alle Schreibaktionen (Wasser, Dünger, Mutation, Löschen, Beet hinzufügen, etc.)
- Einmal pro Gerät freischalten, bleibt dauerhaft gespeichert

### Online-Anzeige & Logs
- Zeigt wie viele Personen die Seite gerade geöffnet haben
- **Besuchslog** mit Datum, Uhrzeit, Gerät und Browser (passwortgeschützt)
- **Aktivitäts-Log** protokolliert alle Aktionen auf den Beeten (Wasser, Dünger, Mutationen, Anlegen, Löschen, Umbenennen) mit Zeitstempel (passwortgeschützt)

### Backup
- Komplettes Backup (Beete, Marktpreis, Preisverlauf) als JSON herunterladen
- Backup wiederherstellen per Datei-Upload

---

## Technischer Stack

| Technologie | Verwendung |
|---|---|
| HTML / CSS / JS | Frontend (Single-Page, keine Frameworks) |
| Firebase Firestore | Echtzeit-Datenbank |
| Firebase Authentication | Anonyme Anmeldung für Schreibschutz |
| GitHub Pages | Hosting |
| jsPDF | PDF-Export des Preisverlaufs |
| Fabric Mod (Java) | Automatisches Auslesen des Marktpreises im Spiel |

---

## Timer-Übersicht

| Timer | Dauer |
|---|---|
| Wachstum | 48 Stunden (pausiert ohne Wasser) |
| Wasser (Silber) | 12 Stunden |
| Wasser (Gold) | 24 Stunden |
| Verdorrung | 4 Tage nach letzter Bewässerung |
| Dünger | 4 Stunden |

---

*Made by Perfect2003*
