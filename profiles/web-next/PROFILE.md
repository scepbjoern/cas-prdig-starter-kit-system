# Webprofil – geprüfter Kursstand

Stand 26.11.2026, Kursversion 0.1.0-preview.6. Stabile, etablierte Produktlinien mit aktuellen Korrekturen; kein automatisches latest-Upgrade.

| Bestandteil | Geprüfte Version |
| --- | --- |
| Node.js / npm | 24.22.3 / 11.19.1 |
| Next.js | 16.4.6 |
| React / React DOM | 19.3.1 |
| TypeScript | 6.0.3 |
| @types/node | 24.19.4 |
| @types/react / @types/react-dom | 19.3.3 / 19.3.0 |
| @playwright/test | 1.65.1 |

Node24 ist die etablierte LTS-Linie; die Profilanforderung bleibt in dieser Hauptversion. Next16.4.6 enthält die November-Sicherheitskorrekturen. TypeScript6 ist eine bewusste konservative Kurswahl mit bisheriger Compiler-API/Plugin-Anbindung und eingeschränkter weiterer Patchpflege. TypeScript7 ist ebenfalls stabil, hier aber nicht getestet. Kein allgemeines Herstellerurteil zugunsten älterer Versionen.

Quellen: [Node24](https://nodejs.org/en/download/archive/v24.22.3), [Next-Sicherheit](https://nextjs.org/blog/november-2026-security-release), [Next-TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript), [TypeScript6](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/), [TypeScript7](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/). Paketdatei und Lockfile enthalten die genaue Auflösung. Vor einer neuen Einrichtung Support-/Sicherheitshinweise und zusätzliche Bibliotheken prüfen, Abweichungen in der Systemarchitektur begründen. Bestehende Anwendungen nur auf Auftrag gezielt migrieren.

Geprüft unter Windows x64/Chrome: echter Kurs-Bootstrap mit synthetischen Grundlagen, frisches Lockfile und npm ci, Typecheck, Produktionsbuild/-start, Health und GET-API mit Fehlerfall, tatsächliche Frontendinteraktion mit Backendantwort sowie vorhandener Playwright-Kurstest gegen den Entwicklungsserver. Profil-tsconfig unverändert. npm audit meldete am Prüfdatum keine bekannten Befunde; kein umfassender Sicherheitsnachweis. Kosmetisch: favicon.ico fehlt. macOS und andere Browser nicht geprüft.

Das Profil enthält den neutralen Webkern, keine Fachmasken, Beispielrollen oder Tabellen. Optionales Prisma/SQLite, Better Auth, Upload oder KI gehören nicht zum getesteten Baukasten. Nur bei tatsächlichem Bedarf ergänzen und zusammen prüfen. Mocks dürfen nach bestätigter Planung als Gesamtumfang gebaut und gezielt nachgebessert werden.
