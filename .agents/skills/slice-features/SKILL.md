---
name: slice-features
description: "Leitet aus PRD und Architektur fachlich prüfbare Features, Verantwortliche, Abhängigkeiten und GitHub-Arbeitsaufträge ab."
---

# slice-features


Lies geprüftes PRD, System Architecture, Design und relevante E2E-Verträge. Schneide fachlich vorführbare und abnehmbare Features; keine Aufteilung nur nach Datenbank/Frontend/Backend und keine Person gleich System setzen.
Vereinbare genau eine verantwortliche Person pro Feature, sinnvolle Reihenfolge und Abhängigkeiten. Wähle mit den Verantwortlichen, welche der bereits beschriebenen Fähigkeiten jetzt tatsächlich umgesetzt werden. Diese Features mit Kriterien und stabilen IDs konkret schneiden; zurückgestellte Umsetzung kenntlich machen und vorhandene Anforderungs-/Szenario-IDs verlinken. Fachliche Gesamtplanung nicht deshalb verkürzen. Lege im autorisierten Repository führende Issues und passende Milestones an; verlinke Grundlagen und Kriterien. Ohne Schreibzugriff konkrete Issue-Entwürfe liefern und den fehlenden Schritt offen nennen.
Arbeitsstatus bleibt in GitHub, PRD behält die fachliche Übersicht. Bei Teilung eines Issues Restumfang mit Kriterien und Verweisen in ein neues Issue übertragen und Milestone/Pläne konsistent nachführen; fachliche Verschiebung abstimmen.
Plane noch nicht jede technische Aufgabe aller Features. plan-feature folgt bedarfsgerecht vor der Umsetzung.

Beauftragte eigene Ergebnisänderungen gemäss den gemeinsamen Sicherungsregeln und Skill commit passend prüfen, gezielt committen und auf den vorgesehenen GitHub-Branch pushen; Remote-Stand prüfen. Offene fachliche Klärung und rein lesende Arbeit erzeugen keinen automatischen Speicherauftrag.

Für Mocks ist danach ein Gesamtauftrag für den vereinbarten Mockumfang im getrennten Implementierungschat der Normalfall. Kein einzelner Feature Plan für jede Fähigkeit nötig; Umsetzung behalten, Korrekturen mit gezielten Aufträgen bearbeiten. Der Gesamtauftrag referenziert Anforderungen, Szenarien, Architektur, Design und Verträge; er ersetzt keine Tests oder menschliche Abnahme. Für andere Systeme ist ein begrenzter schneller Bauversuch optional, danach folgt die reguläre Feature-PIV-Umsetzung. Diese Wege und den passenden nächsten Schritt ausdrücklich erklären.

## Chatführung und Abschluss

Bleibe im bisherigen System-Planungschat, in dem PRD, Design, Architektur und Reviewintegration entstanden sind. Dieser Chat übernimmt auch die Koordination; keinen zusätzlichen Pflichtchat verlangen. Bei fehlendem alten Chat aus gespeicherten aktuellen Quellen wieder einsteigen.

Zeige nach der Abstimmung den gewählten Umfang, verlinkte Issues, Verantwortliche, Abhängigkeiten und echte offene Entscheidungen. Fordere dazu auf, die Arbeitsaufträge selbst zu lesen. Nenne den konkreten nächsten Schritt: reguläre Features mit plan-feature im Planungschat, anschliessend neuer Implementierer; Mocks normalerweise mit @build-system in einem neuen Implementierungschat; andere Systeme optional als begrenzter Bauversuch ebenfalls mit @build-system. Die gespeicherten Quellen und Issues tragen den Auftrag, kein langer manueller Übergabeprompt nötig. Aus slice-features heraus nicht selbst mit dem Bau beginnen.
