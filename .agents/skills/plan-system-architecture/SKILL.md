---
name: plan-system-architecture
description: "Plant den technischen Aufbau eines Systems aus PRD, Design und verbindlichen E2E-Verträgen."
---

# plan-system-architecture


Lies aktuelle PRD-, Design- und E2E-Quellen. Schreibe docs/system-architecture.md nach Vorlage. Ein verständlicher Überblick erklärt Systemgrenzen, Datenflüsse und fachliche Konsequenzen; der technische Teil gibt anderen Agents ausreichend konkrete Vorgaben.
Empfohlenes Webprofil: profiles/web-next. Wähle optionale Datenhaltung, Auth, Upload oder KI nur bei Bedarf. Ein anderer Stack, etwa native Windows-App, ist zulässig; erläutere Plattform-/Demofolgen und plane passende Prüfmittel.
Gemeinsame Verträge nicht lokal neu definieren. Plane Start-/Testkonfiguration, feste Verbundports und getrennte lokale Parallelports. Dokumentiere wesentliche Entscheidungen. Lasse die Architektur unabhängig reviewen und Befunde integrieren, bevor systematisch darauf gebaut wird.
