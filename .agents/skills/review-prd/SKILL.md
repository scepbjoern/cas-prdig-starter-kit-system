---
name: review-prd
description: "Prüft ein System-PRD unabhängig von dessen Erstellungsdialog auf fachliche Klarheit, Testbarkeit und Konsistenz."
---

# review-prd


Arbeite in einem frischen Kontext, der das PRD nicht mitgestaltet hat. Lies PRD, Prototype Brief, zugehörige E2E-Verträge und benötigte Design-/Architekturgrundlagen, nicht den Erstellungsdialog.
Verwende prime und das unabhängige Review-Profil aus docs/course/MODEL-POLICY.md: Astra in Codex beziehungsweise verfügbares Carbon in Antigravity bevorzugen; dokumentierte Alternativen bei begrenztem Zugang oder Kontingent nutzen.
Prüfe Systemgrenze, klare Nutzeraufgaben, widerspruchsfreie Regeln/Daten, Prioritäten, prüfbare Akzeptanzkriterien und relevante featureübergreifende Szenarien. MVP muss ausreichend konkret sein; spätere Ausbaustufen dürfen grob bleiben.
Liefere priorisierte Befunde mit Fundstellen, Auswirkung und Korrekturvorschlag nach REVIEW.md. Keine Produktionsanforderungen oder vollständige technische Taskplanung hineinprüfen. Nicht selbst das PRD umschreiben.

## Ergebnis und Weiterweg

Speichere den Review tatsächlich unter docs/ nach templates/shared/REVIEW.md, mit geprüften Revisionen, stabilen Befund-IDs und Fundstellen. Sichere ihn gemäss commit samt geprüftem Push und verlinke den Bericht.

Bei relevanten Befunden oder offenen Entscheidungen: Bitte die Studierenden, zurück in den ursprünglichen System-Planungschat mit create-prd zu wechseln und dort @integrate-prd-review samt Berichtspfad aufzurufen. Der Autorenagent arbeitet technische Korrekturen ein und klärt fachliche Entscheidungen mit ihnen. Benenne diese Entscheidungen kurz. Ohne relevante Befunde keinen künstlichen Korrekturzyklus verlangen, sondern zum nächsten vereinbarten Schritt (bei GUI Design, danach Systemarchitektur) führen. Prüfergebnis, nicht ausgeführte Tests und menschliche Zustimmung getrennt ausweisen. Kein erfundener Chattitel und keine ungeprüfte Behauptung eines gespeicherten Berichts.
