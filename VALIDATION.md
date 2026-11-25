# Prüfstand – System

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
