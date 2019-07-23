
let unitConv = {
    // normalize: m2
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
};

let convTg = {
    // kg
    'Váha': [
        [ 1/6, 'Kč ve víčkách'],
        [ 1150, 'vozů Škoda Fabia'],
        [ 439985, 'Boeingů 747-8'],
    ],
    // m^2
    'Rozloha': [
        [ 42255, 'Václaváků'], // wiki říká 682 * 60, ale Cíba kouká do katastru
        // Karlák?
        [ 105 * 68, 'fotbalových hřišť v Edenu'],
        [ 310.5 * 202.5, 'Strahovských stadionů'],
        [ 11.626 * 1000 * 1000, 'nádrží Slapy'],
        [ 496 * 1000 * 1000, 'rozloh Prahy'],
        [ 78866 * 1000 * 1000, 'rozloh ČR'],
        [ 696241 * 1000 * 1000, 'rozloh Texasu'],
        [ 4262 * 1732 / (1000 * 1000), 'slisovaných Fabií Combi']
    ],
    // kč
    'Cena': [
        [ 6, 'kilogramů víček'], // víčka - 6 Kč/kg
        [ 29, 'cheeseburgerů'],
        [ 150, 'obědů'],
        // tuzemaku, vicek, platu poslance, iphonu, casopisu vlasta
        [ 29346, 'průměrných mezd'],
        [ 37046, 'průměrných mezd v Praze'],
        // http://www.skoda-auto.cz/modely/fabia/fabia
        [ 243900, 'vozů Škoda Fabia'],
        // https://eurozpravy.cz/domaci/politika/214234-kolik-u-nas-stoji-kilometr-dalnice-jsme-na-tom-lepe-nez-pred-peti-lety-ujistil-prezident-nku/
        [ 152 * 1000 * 1000, 'kilometrů dálnic'],
        [ 88 * 1000 * 1000 * 1000, 'majetků Andreje Babiše'],
        // cena 3,50 Kč/KWh; spotřeba 70177 GWh/rok
        // https://www.cenyenergie.cz/spotreba-elektriny-vody-plynu-a-tepla-v-ceske-republice/
        [ 245619500000, 'let elektřiny pro ČR'], // 245 mld 619 mil 500 tis;
        [ 1309.3 * 1000 * 1000 * 1000, 'ročních rozpočtů Česka'], // 2017
        [ 5, 'dětských plínek'],
        [ 11.34, 'lahvových piv'], // https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=statistiky&katalog=31779
        [ 100, 'krabiček cigaret'],
    ],
    'Osob': [
        [ 11, 'Klapzubových jedenáctek'],
        [ 868, 'plných Airbusů A380-800'],
        [ 17360, 'naplněných pražských O2 aren'],
        [ 90000, 'naplněných Wembley'],
        [ 250000, 'naplněných Strahovských stadionů'],
        [ 10578820, 'Českých republik'],
    ],
    // m
    'Vzdálenost': [
        [ 3.992, 'vozů Škoda Fabia za sebou'],
        [ 24.5, 'vagónů dlouhý vlak'],
        [ 205 * 1000, 'krát z Prahy do Brna'],
        [ 6371 * 1000, 'poloměrů Země'],
        [ 40075 * 1000, 'krát okolo Země (na rovníku)'],
        [ 384400 * 1000, 'krát ze Země na Měsíc'],
        [ 149597870700, 'krát ze Země na Slunce (AU)'],
    ],
    // m^3
    'Objem': [
        [ 1/2000, 'půllitrů piva'],
        [ 2500, 'olympijských bazénů'],
        [ 315 / 1000, 'plných kufrů Škody Fabia'],
        [ 16.5*1000*1000*100 / 1000, 'ročních spotřeb piva v ČR'], // https://www.irozhlas.cz/ekonomika/pivo-narust-spotreba-produkce-konzumace-alkoholu-cesky-svaz-pivovaru-a-sladoven_1904091237_anj
    ],
};

let units = {
    'Váha': 'kg',
    'Rozloha': 'm2',
    'Cena': 'Kč',
    'Osob': 'lidí',
    'Vzdálenost': 'm',
}

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
        return '< 0,01';
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
    for (let el of convTg[gr]) {
        let nval = natVal(num / el[0]);
        res.push({
            value: nval,
            unit: el[1],
        });
    }

    return res;
}
