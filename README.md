# CAS PRDIG – System Starter-Kit

Ein Repository pro gebautem oder gemocktem System, für eine oder mehrere Personen. Es enthält noch keine laufende Fachanwendung und kein Demo-Datenmodell. Die Agents bauen aus euren Vorgaben den passenden Startpunkt auf.

1. «Richte mit init-project unser System-Projekt ein.» Zugriff auf das gemeinsame E2E-Projekt prüfen.
2. System-PRD erstellen; erste Ausbaustufe genau, spätere Erweiterungen grob. Designgrundsätze und System Architecture erarbeiten.
3. PRD und Architektur in frischen unabhängigen Chats prüfen und die Befunde integrieren.
4. Features mit Verantwortung und Abhängigkeiten ableiten; mit bootstrap-system den projektspezifischen Startpunkt erzeugen.
5. Feature-Planung durch A, Implementierung und Validierung durch B; anschliessend eure fachliche Abnahme.

## Ablage

Eigene führende Dokumente: docs/prd.md, docs/system-architecture.md, docs/design-brief.md, docs/features/, evidence/.
Gemeinsame Verträge bleiben im E2E-Projekt führend. project.json hält dessen tatsächliche Verbindung und Revision fest. Die Vorlagen in templates/ sind keine zweite Statusliste.

## Technischer Aufbau

Das empfohlene Webprofil verwendet Next.js, React und TypeScript. Es wird erst durch bootstrap-system an die Projektwurzel übernommen. Siehe [Bootstrap](docs/BOOTSTRAP.md).
Auth, Datenbank, Upload und KI-Anbindung werden nur bei Bedarf projektspezifisch ergänzt. Keine Beispielrollen, Datenbanktabellen oder vorgegebenen Fachmasken werden erzwungen. Für eine native Windows-App oder einen anderen Stack gelten dieselben Planungs- und Abnahmeregeln; dessen Aufbau wird separat erprobt.

[Workflow](docs/course/PIV-WORKFLOW.md) · [Darstellungen](docs/course/DIAGRAMS.md) · [Glossar](docs/course/GLOSSARY.md) · [Zusammenarbeit](docs/course/COLLABORATION.md) · [Prüfstand](VALIDATION.md)

[Modellwahl und Denkstufen](docs/course/MODEL-POLICY.md) · [Werkzeuge und Übergaben](docs/course/TOOLS.md). Für neue GitHub-Aufträge steht eine passende Issue-Vorlage bereit.
