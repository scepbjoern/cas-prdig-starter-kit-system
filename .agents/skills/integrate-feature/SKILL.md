---
name: integrate-feature
description: "Führt ein Feature koordiniert in den aktuellen gemeinsamen Stand zusammen und prüft die Integration."
---

# integrate-feature


Lies aktuellen Zielbranch, eigenes Issue, relevante System-/E2E-Kommentare, Vertragsrevision und tatsächliche Abnahme. Koordiniere genau eine Integration gleichzeitig je Zielbranch.
Standard: nach fachlicher Abnahme integrieren. Falls Abnahme erst im Verbund möglich ist, vorher ausdrücklich eine gemeinsame Testumgebung mit den Kandidatenständen herstellen; das Issue bleibt bis zur tatsächlichen Abnahme offen.
Führe eigene Änderungen nachvollziehbar zusammen, löse Konflikte anhand der fachlichen Bedeutung und prüfe die betroffenen Szenarien im integrierten Stand. Bei geänderten fachlichen Ergebnissen erneute Abnahme einholen.
Führe Issue, Commit-Verweise und Dokumentation nach. Pull Requests nur bei gewähltem optionalem Teamverfahren; keine Pflicht. Fremde Änderungen erhalten und niemals ungeprüft überschreiben.

Sichere die eigenen Integrationsänderungen gemäss commit samt geprüftem Push. Nenne zum Abschluss den integrierten Stand mit Link, ausgeführte Tests und tatsächlichen Abnahmestatus. Wenn noch eine menschliche Prüfung fehlt, erkläre konkret, wer welches Verhalten durchspielen und bestätigen soll. Nenne den nächsten offenen Schritt, etwa Folgefeature oder gemeinsame E2E-Prüfung. Keine pauschale «Gruppenprüfung» ohne Inhalt und keine künstliche Reviewtabelle ohne zugrunde liegenden Review.
