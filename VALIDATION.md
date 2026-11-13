# Prüfstand – System

Windows / Node 24.11.0, 13.11.2026.

- Zwei Bootstrap-Tests bestanden: reale E2E-Commit-Grundlagen, Vorschau ohne Schreiben, erfolgreicher Aufbau, Schutz vorhandener Dateien sowie Abbruch bei fehlendem Vertrag oder Design.
- Neutrales Webprofil mit festgelegter Abhängigkeitsauflösung in ein separates Testprojekt übernommen; npm ci, TypeScript, Produktionsbuild und Browserprüfung bestanden.
- Die anschliessende separate Einkaufsdemo besteht TypeScript/Build und zwei Playwright-Tests in Microsoft Edge. Auswahl/Freigabe, unveränderter anderer Datensatz, Health-Identität und schmale Ansicht geprüft.
- Ein beim ersten Browserlauf gefundener JSON-Importfehler wurde im Profil korrigiert und erfolgreich nachgeprüft.

Das neutrale Profil ist geprüft, zusätzliche Auth-/Datenbank-/Upload-/KI-Integrationen sind noch keine geprüften Module dieser Preview. Andere Stacks, macOS, Antigravity, vollständige mehrpersonale PIV-Durchläufe und Computer Use im Verbund sind noch praktisch zu erproben.

Die Demo ist synthetisch und separat. Sie wird nicht automatisch in ein Gruppenprojekt kopiert. Erfolgreiche technische Prüfungen sind keine menschliche Abnahme.
