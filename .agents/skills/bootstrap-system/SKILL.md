---
name: bootstrap-system
description: "Erzeugt aus bestätigten Systemvorgaben einen ersten startbaren projektspezifischen Stand ohne Demo-Fachlichkeit."
---

# bootstrap-system


Lies project.json, PRD, System Architecture, gegebenenfalls Design Brief sowie die tatsächlich zugänglichen E2E-Verträge. Prüfe Revision, System-ID, Ports und offene fachliche Entscheidungen. Keine generische Demo als Ausgangsprodukt übernehmen.
Für das Webprofil folge docs/BOOTSTRAP.md und tools/bootstrap.mjs: zunächst Vorschau, dann gezielte Anlage. Das Programm liefert nur neutrale technische Dateien. Ergänze den minimalen projektspezifischen Stand passend zu echten Anforderungen, Design und synthetischen Daten.
Auth, Persistenz, Upload, E-Mail und KI nur bei Bedarf. Eigene Tabellen/Rollen entstehen aus dem Projekt; keine Beispieldatenbank zurückbauen. Alternativstack separat passend aufbauen und prüfen.
Installiere Abhängigkeiten, prüfe Typen/Build und starte tatsächlich auf dem vereinbarten Port. Prüfe Health und eine passende erste Ansicht beziehungsweise API. Dokumentiere die ausgeführten Checks und Grenzen; ein Build allein ist kein Laufnachweis.
Grössere Fachfunktionen folgen über Feature Plans. Kein Code aus explorativen Mockups übernehmen.
