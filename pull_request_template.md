Přidáváte-li novou jednotku, je dobré přidat více jak jeden propočet - např. u auta krom ceny i jeho hmotnost. U ovoce krom ceny a hmotnosti i jeho objem atd.

Přepočty máme pro následující: Váha, Rozloha, Cena, Osob, Objem, Vzdálenost, Data, Čas

A podporujeme tři propriety:

1. `units` - kolik toho je (např. u fábie a ceny by šlo o 269900), jednotky lze buďto použít ty výchozí pro danou metriku (např. metry pro vzdálenost), nebo určit klíč `unit`, který specifikuje jednotku vaší hodnoty
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
