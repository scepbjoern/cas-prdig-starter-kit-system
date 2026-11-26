---
name: integrate-prd-review
description: "Integriert unabhängige PRD-Befunde und hält deren Behandlung nachvollziehbar fest."
---

# integrate-prd-review


Lies PRD und Review. Behandle relevante Befunde als übernommen, begründet verworfen oder offene fachliche Entscheidung. Der Autor klärt fachliche Änderungen mit den Verantwortlichen und arbeitet sinnvolle Korrekturen ein.
Prüfe abhängige Architektur, Design, Feature Plans und E2E-Verträge auf Auswirkungen. Nur wesentliche Änderungen erfordern einen erneuten gezielten unabhängigen Review. Ergebnis ist ein führendes fortgeschriebenes PRD, keine Sammlung widersprüchlicher Fassungen.

## Ergebnisse lesen und fachlich bestätigen

Halte die Behandlung jedes Befunds in der bestehenden Review-/Behandlungstabelle fest. Erhalte Befund-IDs und ursprüngliche Aussagen. Die rechte Spalte «Behandlung durch Autor / Begründung» nennt konkrete Änderung und Fundstelle, begründete Nichtübernahme oder verbleibende fachliche Entscheidung. Keine widersprüchlichen parallelen Nachweise.

Verlinke im Abschluss die neue Fassung des führenden Dokuments und betroffene fachliche Begleitdokumente sowie den Bericht mit der ausgefüllten Behandlungstabelle. Bitte die Studierenden ausdrücklich, beide Ergebnisse selbst zu lesen, besonders die rechte Spalte. Benenne die fachlich relevanten Änderungen, Nichtübernahmen und offenen Fragen konkret. Bei Markdown-Bedarf auf MarkText in docs/course/TOOLS.md verweisen.

Erkläre die menschliche Prüfung: Die verantwortlichen Personen prüfen, ob diese Aussagen und Entscheidungen ihrer gewünschten Lösung entsprechen, und nennen Korrekturen oder stimmen zu. Technische Tests ersetzt dies nicht; Code oder Portnummern müssen sie dafür nicht beurteilen. Eine natürliche Rückmeldung wie «Wir haben beide Dokumente gelesen und sind mit den Änderungen einverstanden» genügt; kein festes Freigabewort verlangen. Tatsächliche Zustimmung mit Datum, Revisionen und Umfang festhalten, niemals aus bestandenen Tests ableiten.

Sichere Änderungen und später eingehende Bestätigung jeweils gemäss commit samt geprüftem Push. Erkläre bereits vor der Bestätigung, welcher nächste Schritt danach möglich ist. Nach Zustimmung erreichten Planungsstand und konkreten Weiterweg nennen; verbleibende Grenzen sichtbar halten.

Nach bestätigtem PRD: Bei GUI mit define-system-design die noch fehlenden Gestaltungsgrundlagen klären, anschliessend plan-system-architecture. Ohne GUI direkt zur Systemarchitektur. Vorhandene aktuelle Ergebnisse verwenden; wesentliche neue Erkenntnisse gezielt ins PRD zurückführen.
