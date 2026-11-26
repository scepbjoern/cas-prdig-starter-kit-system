---
name: bootstrap-system
description: "Erzeugt aus bestätigten Systemvorgaben einen ersten startbaren projektspezifischen Stand ohne Demo-Fachlichkeit."
---

# bootstrap-system


Lies project.json, PRD, System Architecture, gegebenenfalls Design Brief sowie die tatsächlich zugänglichen E2E-Verträge. Prüfe Revision, System-ID, Ports und offene fachliche Entscheidungen. Keine generische Demo als Ausgangsprodukt übernehmen.
Für das Webprofil folge docs/BOOTSTRAP.md und tools/bootstrap.mjs: zunächst Vorschau, dann gezielte Anlage. Das Programm liefert nur neutrale technische Dateien. Ergänze den minimalen projektspezifischen Stand passend zu echten Anforderungen, Design und synthetischen Daten.
Auth, Persistenz, Upload, E-Mail und KI nur bei Bedarf. Eigene Tabellen/Rollen entstehen aus dem Projekt; keine Beispieldatenbank zurückbauen. Alternativstack separat passend aufbauen und prüfen.
Installiere Abhängigkeiten, prüfe Typen/Build und starte tatsächlich auf dem vereinbarten Port. Prüfe Health und eine passende erste Ansicht beziehungsweise API. Dokumentiere die ausgeführten Checks und Grenzen; ein Build allein ist kein Laufnachweis.
Dieser Skill richtet das technische Fundament ein. Die Umsetzung regulärer Features folgt über plan-feature/implement-feature; ein Mock-Gesamtbau oder Nicht-Mock-Bauversuch wird durch build-system im getrennten Implementierungschat geführt. Wenn build-system dich als Vorbereitung nutzt, danach zu dessen Auftrag zurückkehren; hier keine zweite Gesamtbauanleitung führen.

Beauftragte eigene Ergebnisänderungen gemäss den gemeinsamen Sicherungsregeln und Skill commit passend prüfen, gezielt committen und auf den vorgesehenen GitHub-Branch pushen; Remote-Stand prüfen. Offene fachliche Klärung und rein lesende Arbeit erzeugen keinen automatischen Speicherauftrag.

Lies vor dem Aufbau profiles/web-next/PROFILE.md und gleiche die gewählten Versionen mit der bestätigten Systemarchitektur ab. Prüfe die tatsächlich verwendete Node-/npm-Laufzeit, Support-/Sicherheitshinweise und die Kompatibilität optionaler Pakete. Bei bewusstem Versionswechsel Paketdatei und Lockfile gemeinsam aktualisieren und nachtesten, nicht blind latest installieren. Bestehende Anwendungen nicht erneut bootstrappen oder ungefragt upgraden; dort nur beauftragte gezielte Migration mit Erhalt eigener Dateien.
