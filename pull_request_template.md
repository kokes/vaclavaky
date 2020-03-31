Přidáváte-li novou jednotku, je dobré přidat více jak jeden propočet - např. u auta krom ceny i jeho hmotnost. U ovoce krom ceny a hmotnosti i jeho objem atd.

Vícero přepočtů se přidává jednoduše - prostě rozšíříte konverzní slovník. Jednotlivé hodnoty mohou mít délku 1-3, konkrétně jde o

1. konverzní poměr samotný,
2. popisek (pokud např. není jasné, čeho je to vzdálenost, podle které osy),
3. zdroje (seznam URL, i když je to jen jedna adresa).


```
{
    label: 'vozů Škoda Fabia',
    conversions: {
        'Vzdálenost': [ 3.992 ],
        'Cena': [ 269900, null, ['https://www.skoda-auto.cz/modely/fabia/fabia']],
        'Váha': [ 1150 ],
        'Rozloha': [ 4262 * 1732 / (1000 * 1000), 'půdorys auta' ],
    },
},
```
