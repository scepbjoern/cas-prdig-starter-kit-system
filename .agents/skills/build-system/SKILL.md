---
name: build-system
description: "Baut den bestätigten Mockumfang zusammenhängend oder führt einen begrenzten Bauversuch für ein anderes System durch; startet, prüft und übergibt das Ergebnis zur menschlichen Abnahme."
---

# build-system

## 1 Rolle und Auftrag bestimmen

Arbeite im neuen Implementierungschat, getrennt vom System-Planungsdialog. Falls du selbst die fachliche Systemplanung in diesem Chat erstellt hast, nenne den nötigen neuen Chat und bereite eine knappe Übergabe vor, statt hier zu implementieren. Ein Skill-Wechsel allein schafft keinen getrennten Kontext.

Lies README.md, AGENTS.md, project.json, das bestätigte PRD, System Architecture, gegebenenfalls Design Brief, aktuelle Feature-Issues und die tatsächlich erreichbaren E2E-Verträge. Verwende prime bei Bedarf. Prüfe Zielrepository, System-ID, Quellenrevisionen, vereinbarten Umfang und relevante Szenarien. Fehlender Feature Plan ist kein Hindernis; keine künstlichen Einzelpläne erzeugen. Fehlende oder widersprüchliche fachliche Grundlagen gezielt klären, keinen unbestätigten Entwurf still als Bauauftrag behandeln.

Leite aus den bestätigten Unterlagen den Bauweg ab: Mock = regulärer Gesamtbau des vereinbarten Umfangs; anderes System = optionaler begrenzter Bauversuch. Nenne kurz System, Umfang, Bauweg und nächsten Arbeitsschritt. Nur bei echter Unklarheit nachfragen. Ein ausdrücklich vereinbarter anderer Auftrag geht vor; keine automatische Implementierung aller zurückgestellten Wünsche. Bei einem Bauversuch Aufwand begrenzen (beispielsweise etwa 30 Minuten, sofern nicht anders vereinbart); nach Ablauf einen ehrlichen Zwischenstand liefern, keine Vollständigkeit behaupten.

## 2 Arbeitsstand schützen und einrichten

Prüfe Git-Status, aktuellen Branch und Remote. Erhalte fremde Änderungen, bestehende Anwendung, Daten und Konfiguration. Kein Reset, pauschales Überschreiben oder unnötiger Neubau. Ein Mock wird im System-Repository regulär weiterentwickelt. Ein reiner Bauversuch erhält im selben Repository einen eigenen Versuchsbranch (in Codex codex/…); bei paralleler Nutzung oder nötiger Isolation einen eigenen Worktree, eigene Testports und synthetische Testdaten. Nicht den Branch unter einem anderen laufenden Agenten umschalten. Keine zusätzliche Ablageorganisation von Studierenden verlangen.

Erzeuge bei fehlendem technischen Fundament mit bootstrap-system den passenden Startpunkt, danach kehre zu diesem Gesamtbauauftrag zurück. Lies das datierte Webprofil und die Architektur; bestehende Anwendungen weder neu bootstrappen noch ungefragt upgraden. Benötigte zusätzliche Pakete auf Kompatibilität prüfen. Das Profil allein ist keine Fachanwendung.

## 3 Zusammenhängend implementieren

Baue den gewählten Umfang in sinnvollen internen Schritten ohne einzelne plan-feature-Aufrufe und ohne Pflichtstopps nach technischen Tasks. Kleine offene technische oder gestalterische Details darfst du als sichtbar dokumentierte Annahmen entscheiden. Anforderungen, Schnittstellen, Datenhoheit und fachliche Kernregeln nicht still ändern. Echte fachliche Konflikte gezielt zur Entscheidung zurückgeben; die führende Planung bleibt im System-Planungschat.

Fehlende Partnersysteme dürfen für die lokale Probe simuliert werden. Halte Simulation und realen Verbund ausdrücklich auseinander. Für Mock-Gesamtbau entstandenen Code behalten und auf spätere konkrete Änderungsaufträge gezielt verbessern. Ein reiner Nicht-Mock-Versuch bleibt ein Experiment: Erkenntnisse in die Planung zurückführen, Versuchscode nicht automatisch in die reguläre Umsetzung übernehmen oder in den gemeinsamen Zielbranch mergen.

## 4 Starten, prüfen und nachbessern

Leite Prüfungen aus den vorhandenen Anforderungs-, Szenario- und Issue-IDs ab. Nutze passende Typ-/Build-Checks, starte die Anwendung tatsächlich und prüfe Health, relevante API-/Vertragsfälle und bei GUI zentrale Bedienabläufe mit Playwright oder Computer Use. Erwartetes und beobachtetes Verhalten vergleichen. Ein erfolgreicher Build allein ist kein Laufnachweis.

Behebe Fehler innerhalb des Auftrags und wiederhole die betroffenen Prüfungen. Keine Kriterien abschwächen, Tests entfernen oder nicht ausgeführte Prüfungen als bestanden darstellen. Nicht verfügbare Prüfmittel, verbleibende Fehler, dokumentierte Annahmen und noch simulierte Partner offen nennen. Kein vollständiger E2E-Nachweis aus einer lokalen Simulation ableiten. Der Implementierer validiert selbst; kein zusätzlicher Pflichtreview oder unabhängiger Validator.

## 5 Sichern und verständlich übergeben

Nutze document und die vorhandene Vorlage templates/shared/TEST-EVIDENCE.md für knappe Start-/Bedienhinweise und tatsächliche Prüfnachweise mit Revision, Umgebung, Testdaten und stabilen IDs. Pflegst du einen Versuchsstand, kennzeichne ihn als solchen; reguläre Feature-Issues nicht allein deshalb als erledigt schliessen. Fachliche Abnahme darf nur die verantwortliche Person erteilen.

Prüfe eigene Ergebnisänderungen, committe sie gezielt und pushe selbständig auf den vorgesehenen GitHub-Branch gemäss den gemeinsamen Sicherungsregeln und Skill commit; prüfe den Remote-Stand. Keine Geheimnisse oder Echtdaten veröffentlichen. Fremde Arbeit und ausdrücklich lokale Aufträge erhalten. Bei Pushproblemen Status «nur lokal gesichert», Grund und nächsten Schritt nennen.

Erkläre zum Abschluss verständlich und dem tatsächlichen Ergebnis angemessen: was funktioniert und fehlt; wie die Person das Ergebnis startet und selbst ausprobiert (bei GUI mit tatsächlicher URL); welche Annahmen und Prüfgrenzen bestehen; was sie als Nächstes tun soll. Status «Abnahme ausstehend», nicht eigenmächtig «abgenommen».

Beim Mock: konkrete Fehler oder fehlendes vereinbartes Verhalten im Implementierungschat nachbessern; keine nachträgliche Pflichtplanung jedes Features. Bei Änderungen an Anforderungen, Design, Architektur oder Verträgen: zum System-Planungschat zurück, dort Unterlagen aktualisieren und anschliessend hier neu lesen. Beim reinen Bauversuch: Erkenntnisse im Planungschat auswerten, danach regulär mit plan-feature und einem getrennten Implementierer weiterarbeiten. Auch Mocks brauchen passende Integrationsprüfungen und menschliche Abnahme.
