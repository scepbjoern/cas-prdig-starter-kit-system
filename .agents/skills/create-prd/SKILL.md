---
name: create-prd
description: "Erstellt ein System-PRD aus dem tatsächlichen Prototyp-Auftrag und den gemeinsamen Verträgen."
---

# create-prd

Lies und beachte docs/course/PLANNING-DIALOGUE.md für fachliche Klärung, Fortschritt und Speichern. Bestätigte E2E-Entscheidungen aufgreifen, nicht erneut abfragen. Vertiefe nach dem E2E-Bauauftrag gezielt die für dieses System relevanten Digitalisierungspotenziale, Soll-Regeln und Datenbeschreibungen im Bericht und den Anhängen. Prüfe tatsächlichen Zugriff und nenne Fundstellen/IDs. Originalquellen konkretisieren den Auftrag; ausgelassene Funktionen nicht still zurückholen. Widersprüche oder Umfangserweiterungen mit der E2E-Koordination klären.


Prüfe über project.json den tatsächlichen E2E-Lesezugriff. Lies Prototype Brief, Solution Architecture und betroffene Verträge in der festgehaltenen Revision. Fehlt diese Grundlage, benenne konkret die Lücke statt ein isoliertes PRD zu erfinden.
Erarbeite mit den Verantwortlichen docs/prd.md nach templates/PRD.md: Zweck, Nutzeraufgaben, Regeln, Prioritäten, Akzeptanzkriterien und featureübergreifende Testszenarien. Kläre zu Beginn die noch nicht vereinbarte Planungstiefe: nur MVP; MVP detailliert und weitere bestätigte Stufen grob; oder gesamter bestätigter Prototypumfang detailliert (Standard und Empfehlung). Bereits vereinbarte Wahl übernehmen und im PRD festhalten. Fachliche Anforderungen früh vollständig ausarbeiten; tatsächlichen Umsetzungsumfang später bei slice-features auswählen. Keine unentschiedenen Erweiterungen hineinplanen. Mehrere Personen können dasselbe System-PRD gemeinsam verantworten.
Halte eine fachliche Feature-Übersicht, aber keine ausführbare Task-/Statusliste. Detaillierte Aufteilung folgt mit slice-features. Design Brief und System Architecture passend ergänzen; PRD unabhängig reviewen lassen.

Pro System eine gemeinsame Planung führen: Jede Person bearbeitet ihr System; bei mehreren beteiligten Personen führt eine Person den Planungsdialog und stimmt Ergebnisse mit den anderen ab. Keine parallelen konkurrierenden PRDs erzeugen. Beim Speicherauftrag die nummerierte Vorlage verwenden und gemäss commit sichern. Nach dem abgelegten PRD zu einem neuen unabhängigen Chat mit @review-prd führen; danach im ursprünglichen Autorenchat @integrate-prd-review mit Berichtspfad verwenden. Erst danach fehlendes GUI-Design und Systemarchitektur konkretisieren.

Beauftragte eigene Ergebnisänderungen gemäss den gemeinsamen Sicherungsregeln und Skill commit passend prüfen, gezielt committen und auf den vorgesehenen GitHub-Branch pushen; Remote-Stand prüfen. Offene fachliche Klärung und rein lesende Arbeit erzeugen keinen automatischen Speicherauftrag.

Anforderungen, Akzeptanzkriterien, einzelne Testszenarien und fachliche Fähigkeiten/Features mit stabilen IDs gemäss COLLABORATION.md versehen, auch in neu ergänzten Tabellen und Listen. Vorhandene IDs erhalten, Fähigkeiten mit späteren Feature-Issues verknüpfen statt deren Statusliste zu duplizieren.
