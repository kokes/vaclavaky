# Václaváky

V médiích se nezřídka kdy objeví výrok typu "zničená úroda je velká jako sedm Václavských náměstí" nebo "za tolik peněz by se dalo koupit 200 fábií" - a mně přišlo, že tyto výroky jsou často trochu pahýlovité, že si pod nima člověk moc nepředstaví, tak jsem se snažil vytvořit kalkulačku, kde by bylo více podobných výpočtů, aby si člověk vybral, co mu je nejbližší.

Akceptujeme příspěvky - ať už formou issues nebo přímo pull requestů. Své změny můžete snadno otestovat lokálně, stačí repozitář vyklonovat a pustit přímo v prohlížeči - není třeba žádných bundlerů či instalací.

Master větev je viditelná na [vaclavaky.cz](https://vaclavaky.cz), taky máme kvíz na [vaclavaky.cz/kviz.html](https://vaclavaky.cz/kviz.html).

## Vývoj

Způsob přidávání nových přepočtů je v `pull_request_template.md`, což se vám i ukáže, když otevřete PR.

Co se týče testování, máme tu trochu dřevní podobu. Před začátkem práce si pusťe `node test.js master`, což vám vytvoří master snapshot. Po změnách stačí pustit `node test.js` (bez argumentu), což vám vytvoří nový snapshot. Když ty dva soubory porovnáte, měly by reflektovat jen vaše změny - v případě např. refaktorování lze tak snadno ověřit, že se nic nemění.

(Ve snapshotech není vše, je tam jen hlavní funkce, která dělá drtivou většinu práce.)
