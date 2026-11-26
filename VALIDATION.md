# Prüfstand – System

## Nachprüfung 0.1.0-preview.5 – 26.11.2026

- npm test: 2 vorhandene Tests bestanden; insgesamt zehn in Common/E2E/System.
- Paketweit 43 Skill-Dateien auf Name/Beschreibung und konsistente Sicherungsanweisung geprüft; 13 unterschiedliche Markdown-Vorlagen auf fortlaufende Abschnittsnummern, Design-Asset auf Gleichheit geprüft.
- Common-Dateien über tools/distribute.mjs verteilt; Manifestprüfung in beiden Ziel-Kits bestanden. Git-Diffs auf unbeabsichtigte Änderungen und Formatfehler geprüft.
- Inhaltlicher Abgleich: Review mit/ohne Befunde, fachliche Zustimmung nach Integration, Speicherauftrag gegenüber offenem Dialog, fehlender Pushzugriff, bestehende Systemkonfiguration und Startplan gegenüber tatsächlichem E2E-Lauf. Dies ist eine Anweisungsprüfung, kein ausgeführter Modellvergleich.
- Neuer menschlicher Systemplanungsdurchlauf und Antigravity-Praxistest stehen aus. Vorhandene Tests bestätigen Werkzeuge und Schutzmechanismen; sie belegen keine garantierte Befolgung jeder Dialogregel durch alle Modelle.

## Nachprüfung 0.1.0-preview.4 – 25.11.2026

Alle zehn automatisierten Tests bestehen: Common 3 (einschliesslich zwei neuer Integritätsprüfungen), E2E 5, System 2. Geprüft: frische Git-Klone mit LF/CRLF, Migration alter Byte-Manifeste, Erkennung und Überschreibschutz echter Änderungen sowie Erhalt eigener Planungsdateien. Beide verteilten Manifeste stimmen für alle 28 Common-Dateien. 43 Skill-Dateien auf Frontmatter geprüft.

Die Dialogänderungen beruhen auf einem menschlichen define-prototype-Praxistest und wurden gegen die bestätigten Regeln gelesen. Kein neuer unabhängiger Verhaltensnachweis der überarbeiteten Planungsskills; der nächste menschliche Durchlauf beginnt bei Solution Architecture. macOS und Antigravity weiterhin nicht nachgetestet.

Windows / Node 24.11.0, 13.11.2026.

- Zwei Bootstrap-Tests bestanden: reale E2E-Commit-Grundlagen, Vorschau ohne Schreiben, erfolgreicher Aufbau, Schutz vorhandener Dateien sowie Abbruch bei fehlendem Vertrag oder Design.
- Neutrales Webprofil mit festgelegter Abhängigkeitsauflösung in ein separates Testprojekt übernommen; npm ci, TypeScript, Produktionsbuild und Browserprüfung bestanden.
- Die anschliessende separate Einkaufsdemo besteht TypeScript/Build und zwei Playwright-Tests in Microsoft Edge. Auswahl/Freigabe, unveränderter anderer Datensatz, Health-Identität und schmale Ansicht geprüft.
- Ein beim ersten Browserlauf gefundener JSON-Importfehler wurde im Profil korrigiert und erfolgreich nachgeprüft.

Das neutrale Profil ist geprüft, zusätzliche Auth-/Datenbank-/Upload-/KI-Integrationen sind noch keine geprüften Module dieser Preview. Andere Stacks, macOS, Antigravity, vollständige mehrpersonale PIV-Durchläufe und Computer Use im Verbund sind noch praktisch zu erproben.

Die Demo ist synthetisch und separat. Sie wird nicht automatisch in ein Gruppenprojekt kopiert. Erfolgreiche technische Prüfungen sind keine menschliche Abnahme.
