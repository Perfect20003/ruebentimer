# Rübentimer – Web-App

Eine **Web-App** zum Verwalten von Rübenbeeten auf **Cytooxien Skyblock**. Sie zeigt alle Beete mit Live-Timern, berechnet Gewinne anhand des Marktpreises und synchronisiert in Echtzeit mit der Rübentimer-Mod im Spiel.

Erreichbar unter: **https://perfect2003.github.io/ruebentimer/**

---

## Funktionen

- **Beet-Übersicht** mit Live-Timern: Reif, Wasser, Verdorrung, Dünger
- **Marktpreis** zentral hinterlegt, fließt in die Gewinnberechnung ein
- **Mutationen** (Gold, Form, Gewicht) pro Beet erfassbar
- **Notizen** pro Beet
- **Spiel-Position** pro Beet (manuell oder per "Im Spiel verknüpfen" mit der Mod)
- **Aktivitätsverlauf** der letzten Aktionen
- **Backup**: Daten als Datei herunterladen und wiederherstellen
- **Discord-Status**: schickt pro Beet eine Karte mit Live-Timern an einen Discord-Webhook

---

## Beet mit dem Spiel verknüpfen

Damit die Mod beim Gießen/Düngen das richtige Beet trifft, braucht jedes Beet eine Spiel-Position:

1. Beim Beet auf **Pos** klicken
2. **Im Spiel verknüpfen** wählen
3. Im Spiel die Taste drücken und die zwei diagonalen Ecken des Beets anklicken

Alternativ lässt sich die Position auch manuell eintragen (Format: `minX,Y,minZ,maxX,maxZ`).

---

## Bearbeiten-Schutz

Änderungen sind durch ein Passwort geschützt, damit nicht versehentlich etwas verstellt wird. Nur-Lesen ist ohne Passwort möglich.

---

## Technik

- Statische **HTML/JS-Seite**, gehostet über GitHub Pages
- **Firebase Firestore** für Echtzeit-Synchronisation
- Teilt sich die Datenbank (Sammlung `beete`) mit der Mod

### Hinweis zu Firebase-Limits
Der kostenlose Firebase-Tarif erlaubt 50.000 Lesevorgänge pro Tag. Die Web-App liest live mit, solange ein Tab offen ist – das verbraucht kontinuierlich Lesevorgänge. Wer das Limit ausreizt, kann die Seite schließen wenn sie nicht gebraucht wird, oder auf den Firebase-Blaze-Tarif wechseln (mit kostenlosem Grundkontingent).

---

## Aktualisieren (Deployment)

Die Seite liegt im GitHub-Repo `perfect2003/ruebentimer`. Zum Aktualisieren die `index.html` im Repo durch die neue Version ersetzen und committen – GitHub Pages übernimmt die Änderung nach kurzer Zeit automatisch.

---

*Erstellt für den persönlichen Gebrauch auf Cytooxien Skyblock.*
