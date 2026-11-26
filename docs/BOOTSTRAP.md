# Vom Kit zur eigenen Anwendung

Der Agent verwendet bootstrap-system. Menschen bestätigen fachlichen Umfang und Designgrundsätze. Die folgenden technischen Schritte bedient üblicherweise der Agent.

1. project.json aus init-project und die eigenen Unterlagen bereitstellen. Das E2E-Projekt muss lokal lesbar sein; der vereinbarte Commit enthält Prototype Brief, Solution Architecture und referenzierte Verträge.
2. bootstrap.example.json als bootstrap.config.json mit tatsächlichen Angaben ausfüllen. Ports vorher im E2E-Projekt vereinbaren.
3. Mit node tools/bootstrap.mjs bootstrap.config.json die Vorschau prüfen. Es werden noch keine Dateien verändert.
4. Mit --apply die neutrale Basis übernehmen. Vorhandene Anwendungsdateien werden nicht überschrieben. Ein zweiter Aufbau bricht ab.
5. Abhängigkeiten mit npm ci installieren. Den minimalen projektspezifischen Stand anhand PRD, Design und Verträgen ergänzen; optionale Fähigkeiten nur bei Bedarf.
6. npm run typecheck, npm run build und einen tatsächlichen Start prüfen. npm run dev -- --port 3101 verwendet den vorher vereinbarten Port. /api/health nennt die System-ID.
7. Passende GUI-Prüfung mit npm run test:e2e ausführen; vorab einen Playwright-Browser installieren oder einen vorhandenen unterstützten Browser wählen. TEST_PORT steuert einen separaten Testport. Ein tatsächlich ausgeführter Test wird dokumentiert.

Eine andere Systemart darf ein anderes Profil nutzen. Diese Vorschau liefert nur den Webkern; sie behauptet keine geprüften Windows-/Mac-Desktop-Stacks oder fertigen Auth-/Datenbankmodule.

## Datierter Webprofilstand

Vor dem Aufbau profiles/web-next/PROFILE.md lesen und die tatsächlich verwendete Node-/npm-Version mit der Architektur abgleichen. Das Profil preview.6 wurde mit Node24.22.3/npm11.19.1 geprüft; neue Terminals nicht stillschweigend mit einer anderen globalen Laufzeit verwenden. Installierte Versionen dokumentieren. Paketdatei und Lockfile gemeinsam pflegen, keine pauschale latest-Auflösung.

Das Kursprofil ist kein Upgrade-Skript für eine schon aufgebaute Anwendung. Bei vorhandenen eigenen Paketdateien eine beauftragte Migration mit Erhalt eigener Abhängigkeiten durchführen und passend nachtesten. Für einen Mock-Gesamtauftrag nach neutralem Bootstrap direkt den vereinbarten Umfang implementieren, validieren und zur menschlichen Abnahme geben; einzelne Feature Plans sind dafür keine Pflicht.

bootstrap-system liefert das technische Fundament, nicht den vollständigen Gesamtbau. Für Mock-Umsetzung oder einen begrenzten Nicht-Mock-Bauversuch ruft der neue Implementierungschat build-system auf; dieser nutzt bootstrap-system bei Bedarf und übernimmt anschliessend Fachfunktionen, Prüfungen und Übergabe.
