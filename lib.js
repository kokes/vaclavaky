
let unitConv = {
    // normalize: m2
    'ft2': 0.092903,
    'm2': 1,
    'km2': 1000 * 1000,
    'ha': 100 * 100,
    'msq': 1609.344 * 1609.344,

    // normalize: kc
    'kc': 1,
    'usd': 21.475, // 1/12/2017
    'eur': 25.525,
    'gbp': 28.967,

    // normalize: kg
    'kg': 1,
    'tn': 1000,
    'lb': 0.453592,

    // normalize: people
    '1': 1,
    '2': 2,
    '4': 4,

    //normalize: m
    'm': 1,
    'km': 1000,

    // normalize m^3
    'm3': 1,
    'hl': 0.1,
    'ft3': 1/35,

    // normalize b
    'b': 1,
    'kb': 1000,
    'mb': 1000 * 1000,
    'gb': 1000 * 1000 * 1000,
    'tb': 1000 * 1000 * 1000 * 1000,
    'pb': 1000 * 1000 * 1000 * 1000 * 1000,

    // normalize: minutes
    's': 1,
    'min': 1,
    'h': 60,
    'd': 60 * 24,
    'w': 60 * 24 * 7,
    'y': 60 * 24 * 365,
};

let units = {
    'Váha': ['kg', 'kg'],
    'Rozloha': ['m2', 'm²'],
    'Cena': ['kc', 'Kč'],
    'Osob': ['1', 'lidí'],
    'Objem': ['m3', 'm³'],
    'Vzdálenost': ['m', 'm'], // TODO: chtelo by to rozlisit vzdalenost a vysku, jestli to pujde
    'Data': ['b', 'bajtů'],
    'Čas': ['min', 'minut'],
}

const convTgObj = [
    {
        label: 'vozů Škoda Fabia',
        conversions: {
            'Vzdálenost': [ 3.992 ],
            // 'Objem': [ 315 / 1000, 'plných kufrů Škody Fabia'], // TODO: tohle jsou kufry, ne cely auta, takze to je nefer
            'Cena': [ 269900, ['http://www.skoda-auto.cz/modely/fabia/fabia']],
            'Váha': [ 1150 ],
            'Rozloha': [ 4262 * 1732 / (1000 * 1000) ],
        },
    },
    {
        label: 'koleček paprikáše',
        conversions: {
            'Váha': [ 2.7 / 1000 ],
            'Rozloha': [ 5.5 * 5.5 / (100 * 100) ],
            'Cena': [ 229 / 370.37037037 ],
            'Vzdálenost': [ 0.2 / 100 ],
        },
    },
    {
        label: 'víček',
        conversions: {
            'Váha': [ 1/500 ],
            'Cena': [ 7 * 1/500 ],
        },
    },
    {
        label: 'disket',
        conversions: {
            'Rozloha': [ 8.9 * 9.3 / (100 * 100) ],
            'Data': [ 1440 * 1000 ],
        },
    },
    {
        label: 'Václaváků',
        conversions: {
            'Rozloha': [ 42255 ], // wiki říká 682 * 60
        },
    },
    {
        label: 'Českých republik',
        conversions: {
            'Osob': [ 10578820 ],
            'Rozloha': [ 78866 * 1000 * 1000 ],
        },
    },
    {
        label: 'Prah',
        conversions: {
            // TODO: pocet osob
            'Rozloha': [ 496 * 1000 * 1000 ],
        },
    },
    {
        label: 'cheeseburgerů',
        conversions: {
            'Cena': [ 29 ],
        },
    },
    {
        label: 'Airbusů A380-800',
        conversions: {
            'Osob': [ 868 ],
            'Váha': [ 276800 ],
            'Vzdálenost': [ 73 ],
        },
    },
    {
        label: 'stadionů Wembley',
        conversions: {
            'Osob': [ 90000 ],
            'Rozloha': [ 105*68 ],
            'Cena': [ 23.927 * 1000 * 1000 * 1000 ],
        }
    },
    {
        label: 'O2 Arén',
        conversions: {
            'Osob': [ 17360 ],
            'Rozloha': [ 105*68 ],
            'Cena': [ 8 * 1000 * 1000 * 1000 ],
        }
    },
    {
        label: 'stadionů Strahov',
        conversions: {
            'Rozloha': [ 310.5 * 202.5 ],
            'Osob': [ 250000 ],

        },
    },
    {
        label: 'hamburgerů (Big Mac)',
        conversions: {
            'Váha': [ 240 / 1000, ['https://weightofstuff.com/whats-the-weight-of-mcdonalds-burgers/#Big_Mac']],
            // 'Cena': [ null, 'hamburgerů (Big Mac)' ] // TODO
        },
    },
    {
        label: 'vajíček na hniličku', conversions: { 'Čas': [ 4.5 ], },
    },
    {
        label: 'pracovních dob', conversions: { 'Čas': [ 60 * 8 ], },
    },
    {
        label: 'pořadů Nory Fridrichové', conversions: { 'Čas': [ 60 * 168 ], },
    },
    {
        label: 'těhotenství', conversions: { 'Čas': [ 60 * 24 * 7 * 40 ], },
    },
    {
        label: 'stáří vesmírů', conversions: { 'Čas': [ 60 * 24 * 365 * 13.772 * 1000 * 1000 * 1000 ], },
    },
    {
        label: 'kilometrů chůze', conversions: { 'Čas': [ 60 / 5 ], },
    },
    // TODO: vycistit nasledujici
    {
        label: "fotbalových hřišť v Edenu",
        conversions: { "Rozloha": [ 7140 ], },
    },
    {
        label: "nádrží Slapy",
        conversions: { "Rozloha": [ 11626000 ], },
    },
    {
        label: "rozloh Texasu",
        conversions: { "Rozloha": [ 696241000000 ], },
    },
    {
        label: "postelí (šířka 160 cm)",
        conversions: { "Rozloha": [ 3.2 ], },
    },
    {
        label: "obědů",
        conversions: { "Cena": [ 150 ], },
    },
    {
        label: "průměrných mezd",
        conversions: { "Cena": [ 29346 ], },
    },
    {
        label: "průměrných mezd v Praze",
        conversions: { "Cena": [ 37046 ], },
    },
    {
        label: "okresních nemocnic",
        conversions: { "Cena": [ 1500000000, ['https://zdravi.euro.cz/denni-zpravy/z-domova/nova-nemocnice-je-drazsi-nez-se-cekalo-musi-se-skrtat-452717'] ], },
    },
    {
        label: "kilometrů dálnic",
        conversions: { "Cena": [ 152000000, ['https://eurozpravy.cz/domaci/politika/214234-kolik-u-nas-stoji-kilometr-dalnice-jsme-na-tom-lepe-nez-pred-peti-lety-ujistil-prezident-nku/'] ], },
    },
    {
        label: "majetků Andreje Babiše",
        conversions: { "Cena": [ 88000000000 ], },
    },
    {
        label: "let elektřiny pro ČR",
        // cena 3,50 Kč/KWh; spotřeba 70177 GWh/rok
        conversions: { "Cena": [ 245619500000, ['https://www.cenyenergie.cz/spotreba-elektriny-vody-plynu-a-tepla-v-ceske-republice/'] ], },
    },
    {
        label: "ročních rozpočtů Česka",
        conversions: { "Cena": [ 1309300000000 ], },
    },
    {
        label: "dětských plínek",
        conversions: { "Cena": [ 5 ], },
    },
    {
        label: "lahvových piv",
        conversions: { "Cena": [ 11.34, ['https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=statistiky&katalog=31779'] ], },
    },
    {
        label: "krabiček cigaret",
        conversions: { "Cena": [ 100 ], },
    },
    {
        label: "Klapzubových jedenáctek",
        conversions: { "Osob": [ 11 ], },
    },
    {
        label: "vagónů dlouhý vlak",
        conversions: { "Vzdálenost": [ 24.5 ], },
    },
    {
        label: "krát z Prahy do Brna",
        conversions: { "Vzdálenost": [ 205000 ], },
    },
    {
        label: "poloměrů Země",
        conversions: { "Vzdálenost": [ 6371000 ], },
    },
    {
        label: "krát okolo Země (na rovníku)",
        conversions: { "Vzdálenost": [ 40075000 ], },
    },
    {
        label: "krát ze Země na Měsíc",
        conversions: { "Vzdálenost": [ 384400000 ], },
    },
    {
        label: "krát ze Země na Slunce (AU)",
        conversions: { "Vzdálenost": [ 149597870700 ], },
    },
    {
        label: "půllitrů piva",
        conversions: { "Objem": [ 0.0005 ], },
    },
    {
        label: "olympijských bazénů",
        conversions: { "Objem": [ 2500 ], },
    },
    {
        label: "ročních spotřeb piva v ČR",
        conversions: { "Objem": [ 1650000, ['https://www.irozhlas.cz/ekonomika/pivo-narust-spotreba-produkce-konzumace-alkoholu-cesky-svaz-pivovaru-a-sladoven_1904091237_anj'] ], },
    },
    {
        label: "praček",
        conversions: { "Objem": [ 0.306, ['https://lifestyle.euronics.co.uk/buyers-guide/washing-machine/size/', 'https://twitter.com/41actionnews/status/1158871610876682240']], },
    },
    {
        label: "CD",
        conversions: { "Data": [ 700000000 ], },
    },
    {
        label: "DVD",
        conversions: { "Data": [ 4700000000 ], },
    },
    {
        label: "metrů 16TB disků na sobě",
        conversions: {
            // TODO: rozmery, vaha
            "Data": [ 612792033703561.9, ['https://www.seagate.com/www-content/datasheets/pdfs/ironwolf-16tb-DS1904-13-1905US-en_US.pdf']],
        },
    }
]

// functions

function parseInput(inp) {
    let ret = inp.trim().replace(/\s+/g, '');
    ret = ret.replace(',', '.');

    return parseFloat(ret);
}

function numFormat(val) {
    let ret = val.toFixed(2).replace('.', ',');
    ret = ret.replace(/,0+$/, '');
    if (ret === '0') {
        return `<sup>1</sup>&frasl;<sub>${Math.round(1/val)}</sub>`;
    }
    return ret;
}

function natVal(val) {
    let nat = [
        [12, 'bilionů'],
        [9, 'miliard'],
        [6, 'milionů'],
        [3, 'tisíc']
    ]
    for (let el of nat) {
        if (val >= Math.pow(10, el[0])) {
            let nval = val / Math.pow(10, el[0]);
            return `${numFormat(nval)} ${el[1]}`;
        }
    }
    return numFormat(val);
}

function numToText(number, mul, unit, gr) {
    let num = parseInput(number);
    if (isNaN(num)) {
        return null;
    }

    num *= Math.pow(10, parseInt(mul));

    num *= unitConv[unit];

    let res = [];
    // convTg[gr].sort((a, b) => a[0] - b[0]); // TODO: sort res?
    for (let conv of convTgObj) {
        const el = conv.conversions[gr];
        if (!el) {
            continue;
        }
        let nval = natVal(num / el[0]);
        let conversions = {};
        for (let [tp, mp] of Object.entries(conv.conversions)) {
            if (tp === gr) continue;

            conversions[tp] = {
                val: num / el[0] * mp[0],
                natval: natVal(num / el[0] * mp[0]),
                unitLabel: units[tp][1],
                unitNorm: units[tp][0],
            }
        }
        res.push({
            value: nval,
            unit: conv.label,
            sources: el[1],
            conversions: conversions,
            normalisation: el[0] + ' ' + units[gr][1],
        });
    }

    return res;
}
