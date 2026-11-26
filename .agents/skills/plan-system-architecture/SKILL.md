---
name: plan-system-architecture
description: "Plant den technischen Aufbau eines Systems aus PRD, Design und verbindlichen E2E-Verträgen."
---

# plan-system-architecture


Lies docs/course/PLANNING-DIALOGUE.md sowie aktuelle PRD-, Design- und E2E-Quellen. Fachliche Klärung im bestehenden System-Planungschat führen; bestätigte Entscheidungen übernehmen. Beim natürlichen Speicherauftrag oder ausdrücklichen Ausarbeitungsauftrag docs/system-architecture.md nach der nummerierten Vorlage schreiben und gemäss commit sichern. Ein verständlicher Überblick erklärt Systemgrenzen, Datenflüsse und fachliche Konsequenzen; der technische Teil gibt anderen Agents ausreichend konkrete Vorgaben.
Empfohlenes Webprofil: profiles/web-next. Wähle optionale Datenhaltung, Auth, Upload oder KI nur bei Bedarf. Ein anderer Stack, etwa native Windows-App, ist zulässig; erläutere Plattform-/Demofolgen und plane passende Prüfmittel.
Gemeinsame Verträge nicht lokal neu definieren. Plane Start-/Testkonfiguration, feste Verbundports und getrennte lokale Parallelports. Dokumentiere wesentliche Entscheidungen. Lasse die Architektur unabhängig reviewen und Befunde integrieren, bevor systematisch darauf gebaut wird.

Zum Abschluss die gespeicherte Architektur verlinken und fachlichen Überblick selbst lesen lassen. Nächster Schritt: neuer unabhängiger Chat mit @review-architecture, danach zurück in diesen Autorenchat mit @integrate-architecture-review und Berichtspfad. Nach bestätigter Architektur folgen slice-features und der passende technische Aufbau. Die geplanten Startvorgaben und tatsächliche Repository-Adresse der E2E-Koordination zur Nachführung von solution.json mitgeben; geplante Befehle noch nicht als erprobt ausweisen.

Beauftragte eigene Ergebnisänderungen gemäss den gemeinsamen Sicherungsregeln und Skill commit passend prüfen, gezielt committen und auf den vorgesehenen GitHub-Branch pushen; Remote-Stand prüfen. Offene fachliche Klärung und rein lesende Arbeit erzeugen keinen automatischen Speicherauftrag.

## Webprofil bewusst auswählen

Lies profiles/web-next/PROFILE.md und dessen tatsächlich fixierte Paketdateien. Vor neuer Einrichtung die aktuellen Herstellerempfehlungen, Support- und Sicherheitshinweise mit dem datierten Kursprüfstand vergleichen. Stabile, etablierte und zusammenpassende Versionen bevorzugen; nicht automatisch latest und nicht ungeprüft historische Pins übernehmen. Prüfdatum, Node/npm und Paketversionen sowie begründete Abweichungen in der Architektur festhalten. Zusätzliche Bibliotheken bedarfsgerecht auf Kompatibilität prüfen. Das getestete Kursprofil ist eine belastbare Ausgangskombination, keine Garantie für jede Erweiterung.

Vorhandene Anwendungen nicht bei jedem Aufruf automatisch upgraden. Beim beauftragten Profilwechsel deren eigene Paketdateien, Lockfile, Laufzeit und technische Architektur gezielt abgleichen; Fachumfang, Daten und Verträge erhalten. Geplante Versionen von tatsächlich installierten/geprüften unterscheiden. Mocks werden nach bestätigter Planung normalerweise als Gesamtumfang gebaut und gezielt nachgebessert; keine Pflicht zu einzelnen Feature Plans.
