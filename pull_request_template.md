Přidáváte-li novou jednotku, je dobré přidat více jak jeden propočet - např. u auta krom ceny i jeho hmotnost. U ovoce krom ceny a hmotnosti i jeho objem atd.

Přepočty máme pro následující:

```
let units = {
    'Váha': ['kg', 'kg'],
    'Rozloha': ['m2', 'm²'],
    'Cena': ['kc', 'Kč'],
    'Osob': ['1', 'lidí'],
    'Objem': ['m3', 'm³'],
    'Vzdálenost': ['m', 'm'],
    'Data': ['b', 'bajtů'],
    'Čas': ['min', 'minut'],
}
```

A podporujeme tři propriety:

1. `units` - kolik toho je (např. u fábie a ceny by šlo o 269900), v jednotkách popsaných výše
2. `sources` - seznam zdrojů jako list stringů, prostý seznam URL, ze kterých čerpáte
3. `desc` - volitelný popisek, který vysvětluje tuto danou konverzi - pokud např. u vzdálenosti není jasné, po které straně objektu to je


```
{
    'label': 'vozů Škoda Fabia',
    'conversions': {
        'Vzdálenost': {
            'units': 3.992,
        },
        'Cena': {
            'units': 269900,
            'sources': [
                'https://www.skoda-auto.cz/modely/fabia/fabia',
            ]
        },
        'Váha': {
            'units': 1150,
        },
        'Rozloha': {
            'units': 7.381784,
            'desc': 'půdorys auta',
        }
    }
},
```
