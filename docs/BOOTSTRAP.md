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
