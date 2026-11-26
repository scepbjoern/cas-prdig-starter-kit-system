# CAS PRDIG – System Starter-Kit

Ein Repository pro gebautem oder gemocktem System, für eine oder mehrere Personen. Es enthält noch keine laufende Fachanwendung und kein Demo-Datenmodell. Die Agents bauen aus euren Vorgaben den passenden Startpunkt auf.

1. Neuen System-Planungschat im gemeinsamen übergeordneten Codex-Projekt starten. System-Repo/Name, Verantwortliche und E2E-Pfad oder -URL übergeben; klonen/weiterverwenden und ausdrücklich init-project aus dem System-Repository nutzen. Zugriff auf gespeicherte E2E-Unterlagen prüfen; der E2E-Erstellungsdialog ist nicht nötig.
2. Ein gemeinsames System-PRD erstellen; Planungstiefe wählen: nur MVP, MVP detailliert mit Rest grob oder standardmässig gesamter vereinbarter Prototypumfang detailliert. Bei mehreren beteiligten Personen führt eine Person die Planung und stimmt sie mit den anderen ab. PRD in einem frischen unabhängigen Chat prüfen, Befunde im ursprünglichen Autorenchat integrieren und die Ergebnisse gemeinsam lesen.
3. Bei GUI Designgrundsätze, danach System Architecture erarbeiten. Architektur in einem frischen unabhängigen Chat prüfen und Befunde im Autorenchat integrieren. Bestätigte fachliche Entscheidungen sichern.
4. Im bisherigen System-Planungschat mit slice-features Umfang, Verantwortung und Abhängigkeiten festlegen; verlinkte Issues selbst lesen und den Bauweg wählen.
5. Reguläre Features: plan-feature im Planungschat, implement-feature/validate-feature im neuen Implementierungschat. Mocks: @build-system im neuen Implementierungschat, Gesamtumfang bauen und gezielt nachbessern. Für andere Systeme ist build-system ein optionaler begrenzter Bauversuch in eigenem Versuchsbranch. bootstrap-system wird bei fehlendem Fundament genutzt. Anschliessend eure fachliche Prüfung und Abnahme.

## Ablage

Eigene führende Dokumente: docs/prd.md, docs/system-architecture.md, docs/design-brief.md, docs/features/, evidence/.
Gemeinsame Verträge bleiben im E2E-Projekt führend. project.json hält dessen tatsächliche Verbindung und Revision fest. Die Vorlagen in templates/ sind keine zweite Statusliste.

## Technischer Aufbau

Das empfohlene Webprofil verwendet Next.js, React und TypeScript. Es wird erst durch bootstrap-system an die Projektwurzel übernommen. Siehe [Bootstrap](docs/BOOTSTRAP.md).
Auth, Datenbank, Upload und KI-Anbindung werden nur bei Bedarf projektspezifisch ergänzt. Keine Beispielrollen, Datenbanktabellen oder vorgegebenen Fachmasken werden erzwungen. Für eine native Windows-App oder einen anderen Stack gelten dieselben Planungs- und Abnahmeregeln; dessen Aufbau wird separat erprobt.

[Workflow](docs/course/PIV-WORKFLOW.md) · [Darstellungen](docs/course/DIAGRAMS.md) · [Glossar](docs/course/GLOSSARY.md) · [Zusammenarbeit](docs/course/COLLABORATION.md) · [Prüfstand](VALIDATION.md)

[Modellwahl und Denkstufen](docs/course/MODEL-POLICY.md) · [Werkzeuge und Übergaben](docs/course/TOOLS.md). Für neue GitHub-Aufträge steht eine passende Issue-Vorlage bereit.

## Einen Skill einzeln kennenlernen

Ein Skill besteht aus `SKILL.md` und bei Bedarf zugehörigen Vorlagen oder Hilfsdateien. Für [define-system-design](.agents/skills/define-system-design) ist die [Design-Brief-Vorlage](.agents/skills/define-system-design/assets/DESIGN-BRIEF.md) direkt enthalten. Lasst euren Agenten den vollständigen Skill-Ordner installieren, wenn ihr ohne vollständiges System-Kit arbeitet. Im System-Kit ist er bereits vorhanden.

Beispielauftrag: «Nutze den Skill define-system-design. Erarbeite mit mir für [System und Nutzeraufgabe] einen Design Brief. Verwende diese Referenzen, kläre nur wesentliche Lücken und baue zunächst noch keine Anwendung.» Ein Skill beschreibt ein Vorgehen; er wechselt weder automatisch das Modell noch erzeugt er von selbst einen unabhängigen Chat.

[build-system: Mock-Gesamtbau oder begrenzter Bauversuch](.agents/skills/build-system/SKILL.md). Im neuen Implementierungschat den Skill aus diesem System-Repository aufrufen; er liest die gespeicherten Grundlagen und Issues selbst.
