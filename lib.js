
let unitConv = {
    // normalize: m2
    'ft2': 0.092903,
    'm2': 1,
    'km2': 1000 * 1000,
    'ha': 100 * 100,
    'msq': 1609.344 * 1609.344,

    // normalize: kc
    'kc': 1,
    'usd': 25.535, // 3/4/2020 (cnb.cz)
    'eur': 27.540,
    'gbp': 31.347,

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
    's': 1/60,
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
        'label': 'vozů Škoda Fabia',
        'conversions': {
            // 'Objem': [ 315 / 1000, 'plných kufrů Škody Fabia'], // TODO: tohle jsou kufry, ne cely auta, takze to je nefer
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
    {
        'label': 'koleček paprikáše',
        'conversions': {
            'Váha': {
                'units': 0.0027,
            },
            'Rozloha': {
                'units': 0.003025,
                'desc': 'vyskádaných do mřížky',
            },
            'Cena': {
                'units': 0.6183000000006184,
            },
            'Vzdálenost': {
                'units': 0.002,
                'desc': 'na tloušťku',
            }
        }
    },
    {
        'label': 'víček',
        'conversions': {
            'Váha': {
                'units': 0.002,
            },
            'Cena': {
                'units': 0.014,
            }
        }
    },
    {
        'label': 'disket',
        'conversions': {
            'Rozloha': {
                'units': 0.008277000000000001,
            },
            'Data': {
                'units': 1440000,
            }
        }
    },
    {
        'label': 'Václaváků',
        'conversions': {
            'Rozloha': {
                'units': 42255, // wiki říká 682 * 60
            }
        }
    },
    {
        'label': 'Českých republik',
        'conversions': {
            'Osob': {
                'units': 10578820,
            },
            'Rozloha': {
                'units': 78866000000,
            }
        }
    },
    {
        'label': 'Prah',
        'conversions': {
            // TODO: pocet osob
            'Rozloha': {
                'units': 496000000,
            }
        }
    },
    {
        'label': 'cheeseburgerů',
        'conversions': {
            'Cena': {
                'units': 33,
                'sources': [
                    'https://www.mcdonalds.cz/menu/hovezi-burgery/cheeseburger/',
                ]
            }
        }
    },
    {
        'label': 'Airbusů A380-800',
        'conversions': {
            'Osob': {
                'units': 868,
            },
            'Váha': {
                'units': 276800,
            },
            'Vzdálenost': {
                'units': 73,
            }
        }
    },
    {
        'label': 'stadionů Wembley',
        'conversions': {
            'Osob': {
                'units': 90000,
            },
            'Rozloha': {
                'units': 7140,
            },
            'Cena': {
                'units': 23927000000,
            }
        }
    },
    {
        'label': 'O2 Arén',
        'conversions': {
            'Osob': {
                'units': 17360,
            },
            'Rozloha': {
                'units': 7140,
            },
            'Cena': {
                'units': 8000000000,
            }
        }
    },
    {
        'label': 'stadionů Strahov',
        'conversions': {
            'Rozloha': {
                'units': 62876.25,
            },
            'Osob': {
                'units': 250000,
            }
        }
    },
    {
        'label': 'hamburgerů (Big Mac)',
        'conversions': {
            // 'Cena': [ null, 'hamburgerů (Big Mac)' ] // TODO
            'Váha': {
                'units': 0.24,
                'sources': [
                    'https://weightofstuff.com/whats-the-weight-of-mcdonalds-burgers/#Big_Mac',
                ]
            }
        }
    },
    {
        'label': 'bytů v Praze (2+kk)',
        'conversions': {
            'Rozloha': {
                'units': 50,
            },
            'Cena': {
                'units': 5000000,
            }
        }
    },
    {
        'label': 'plejtváků obrovských',
        'conversions': {
            // oboji prumer dospelych v severnim pacifiku, samci a samice se trochu lisi
            'Vzdálenost': {
                'units': 24.5,
            },
            'Váha': {
                'units': 106000,
            }
        }
    },
    {
        'label': 'balónků plných hélia (pro vzlet)',
        'conversions': {
            // balonek ma 30 cm v prumeru, cca, tak vemem 4/3 * pi * r^3
            'Objem': {
                'units': 0.014137166941154066,
                'sources': [
                    'https://science.howstuffworks.com/science-vs-myth/everyday-myths/question185.htm',
                ]
            },
            'Váha': {
                'units': 0.014137166941154067,
                'sources': [
                    'https://science.howstuffworks.com/science-vs-myth/everyday-myths/question185.htm',
                ]
            }
        }
    },
    {
        'label': 'vajíček na hniličku',
        'conversions': {
            'Čas': {
                'units': 4.5,
            }
        }
    },
    {
        'label': 'pracovních dob',
        'conversions': {
            'Čas': {
                'units': 480,
            }
        }
    },
    {
        'label': 'pořadů Nory Fridrichové',
        'conversions': {
            'Čas': {
                'units': 10080,
            }
        }
    },
    {
        'label': 'těhotenství',
        'conversions': {
            'Čas': {
                'units': 403200,
            }
        }
    },
    {
        'label': 'stáří vesmírů',
        'conversions': {
            'Čas': {
                'units': 7238563200000000,
            }
        }
    },
    {
        'label': 'kilometrů chůze',
        'conversions': {
            'Čas': {
                'units': 12,
            },
            'Vzdálenost': {
                'units': 1000,
            }
        }
    },
    {
        'label': 'fotbalových hřišť v Edenu',
        'conversions': {
            'Rozloha': {
                'units': 7140,
            }
        }
    },
    {
        'label': 'nádrží Slapy',
        'conversions': {
            'Rozloha': {
                'units': 11626000,
            },
            'Vzdálenost': {
                'units': 43000,
            },
            'Objem': {
                'units': 269300000,
            }
        }
    },
    {
        'label': 'rozloh Texasu',
        'conversions': {
            'Rozloha': {
                'units': 696241000000,
            }
        }
    },
    {
        'label': 'postelí (šířka 160 cm)',
        'conversions': {
            'Rozloha': {
                'units': 3.2,
            }
        }
    },
    {
        'label': 'obědů',
        'conversions': {
            'Cena': {
                'units': 150,
            }
        }
    },
    {
        'label': 'průměrných hrubých mezd',
        'conversions': {
            'Cena': {
                'units': 34077,
                'sources': [
                    'https://www.czso.cz/csu/czso/cri/prumerne-mzdy-1-ctvrtleti-2020',
                ]
            }
        }
    },
    {
        'label': 'průměrných hrubých mezd v Praze',
        'conversions': {
            'Cena': {
                'units': 42760,
                'sources': [
                    'https://www.czso.cz/csu/czso/cri/prumerne-mzdy-1-ctvrtleti-2020',
                ]
            }
        }
    },
    {
        'label': 'průměrných starobních důchodů',
        'conversions': {
            'Cena': {
                'units': 14400,
                'sources': [
                    'https://ct24.ceskatelevize.cz/ekonomika/3094577-prumerny-duchod-ma-pristi-rok-vzrust-o-zhruba-800-korun-vlada-mozna-tentokrat-nic',
                    'https://www.mpsv.cz/documents/20142/511219/30_12_2019+TZ_Co+se+meni+v+roce+2020.pdf/098c9a52-daab-742b-a7c1-3ae5c9b61a34',
                ]
            }
        }
    },
    {
        'label': 'jednorázových příspěvků důchodcům (tzv. rouškovné)',
        'conversions': {
            'Cena': {
                'units': 14500000000,
                'sources': [
                    'https://apps.odok.cz/veklep-detail?pid=ALBSBSUGDF2F',
                    'https://www.irozhlas.cz/zpravy-domov/jana-malacova-rouskovne-vyroky-prispevek-pro-duchodce-seniori_2009020827_dok',
                ]
            },
            'Osob': {
                // tohle je hrubej odhad - bude se to počítat podle toho, kdo bude k listopadu 2020 pobírat důchod
                'units': 2900000,
                'sources': [
                    'https://apps.odok.cz/veklep-detail?pid=ALBSBSUGDF2F',
                    'https://www.irozhlas.cz/zpravy-domov/jana-malacova-rouskovne-vyroky-prispevek-pro-duchodce-seniori_2009020827_dok',
                ]
            }
        }
    },
    {
        'label': 'okresních nemocnic',
        'conversions': {
            'Cena': {
                'units': 1500000000,
                'sources': [
                    'https://zdravi.euro.cz/denni-zpravy/z-domova/nova-nemocnice-je-drazsi-nez-se-cekalo-musi-se-skrtat-452717',
                ]
            }
        }
    },
    {
        'label': 'závodů Tour de France', // 2020
        'conversions': {
            'Vzdálenost': {
                'units': 3484.2 * 1000,
                'sources': [
                    'https://en.wikipedia.org/wiki/2020_Tour_de_France',
                ],
            },
            'Čas': {
                'units': 87 * 60 + 20 + 5/60, // Pogacaruv cas
                'sources': [
                    'https://en.wikipedia.org/wiki/2020_Tour_de_France',
                ],
            },
        },
    },
    {
        'label': 'kilometrů dálnic',
        'conversions': {
            'Cena': {
                'units': 152000000,
                'sources': [
                    'https://eurozpravy.cz/domaci/politika/214234-kolik-u-nas-stoji-kilometr-dalnice-jsme-na-tom-lepe-nez-pred-peti-lety-ujistil-prezident-nku/',
                ]
            }
        }
    },
    {
        'label': 'majetků Andreje Babiše',
        'conversions': {
            'Cena': {
                'units': 88000000000,
            }
        }
    },
    {
        'label': 'let elektřiny pro ČR',
        'conversions': {
            // cena 3,50 Kč/KWh; spotřeba 70177 GWh/rok
            'Cena': {
                'units': 245619500000,
                'sources': [
                    'https://www.cenyenergie.cz/spotreba-elektriny-vody-plynu-a-tepla-v-ceske-republice/',
                ]
            }
        }
    },
    {
        'label': 'ročních rozpočtů Česka',
        'conversions': {
            'Cena': {
                'units': 1309300000000,
            }
        }
    },
    {
        'label': 'dětských plínek',
        'conversions': {
            'Cena': {
                'units': 5,
            }
        }
    },
    {
        'label': 'lahvových piv',
        'conversions': {
            'Cena': {
                'units': 11.34,
                'sources': [
                    'https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=statistiky&katalog=31779',
                ]
            }
        }
    },
    {
        'label': 'krabiček cigaret',
        'conversions': {
            'Cena': {
                'units': 100,
            }
        }
    },
    {
        'label': 'Klapzubových jedenáctek',
        'conversions': {
            'Osob': {
                'units': 11,
            }
        }
    },
    {
        'label': 'vagónů dlouhý vlak',
        'conversions': {
            'Vzdálenost': {
                'units': 24.5,
            }
        }
    },
    {
        'label': 'krát z Prahy do Brna',
        'conversions': {
            'Vzdálenost': {
                'units': 205000,
            }
        }
    },
    {
        'label': 'poloměrů Země',
        'conversions': {
            'Vzdálenost': {
                'units': 6371000,
            }
        }
    },
    {
        'label': 'krát ze Země na Měsíc',
        'conversions': {
            'Vzdálenost': {
                'units': 384400000,
            }
        }
    },
    {
        'label': 'krát ze Země na Slunce (AU)',
        'conversions': {
            'Vzdálenost': {
                'units': 149597870700,
            }
        }
    },
    {
        'label': 'planet Země',
        'conversions': {
            'Osob': {
                'units': 7713468000,
                'sources': [
                    'https://population.un.org/wpp/Publications/Files/WPP2019-Wallchart.pdf',
                ]
            },
            'Rozloha': {
                'units': 510072000000000,
                'sources': [
                    'https://en.wikipedia.org/wiki/Earth',
                ]
            },
            'Objem': {
                'units': 1.08321e+21,
                'sources': [
                    'https://en.wikipedia.org/wiki/Earth',
                ]
            },
            'Váha': {
                'units': 5.97237e+24,
                'sources': [
                    'https://en.wikipedia.org/wiki/Earth',
                ]
            },
            'Čas': {
                'units': 2386224000000000,
                'desc': 'stáří',
                'sources': [
                    'https://en.wikipedia.org/wiki/Age_of_the_Earth',
                ]
            },
            'Vzdálenost': {
                'units': 40075000,
                'desc': 'po rovníku',
            }
        }
    },
    {
        'label': 'tisícikorunových bankovek',
        'conversions': {
            'Rozloha': {
                'units': 0.011692,
                'sources': [
                    'https://www.cnb.cz/export/sites/cnb/cs/verejnost/.galleries/pro_media/konference_projevy/vystoupeni_projevy/download/rezabek_20080321_bankovka_1000Kc.pdf',
                ]
            },
            'Váha': {
                'units': 0.001,
                'sources': [
                    'https://www.cnb.cz/export/sites/cnb/cs/verejnost/.galleries/pro_media/konference_projevy/vystoupeni_projevy/download/rezabek_20080321_bankovka_1000Kc.pdf',
                ]
            },
            'Vzdálenost': {
                'units': 0.158,
                'desc': 'na délku',
                'sources': [
                    'https://www.cnb.cz/export/sites/cnb/cs/verejnost/.galleries/pro_media/konference_projevy/vystoupeni_projevy/download/rezabek_20080321_bankovka_1000Kc.pdf',
                ]
            },
            'Cena': {
                'units': 1000,
            }
        }
    },
    {
        'label': 'padesátikorun',
        'conversions': {
            'Rozloha': {
                'units': (Math.pow(27.5/2, 2) * Math.PI) / (1000*1000),
                'sources': [
                    'https://www.cnb.cz/cs/bankovky-a-mince/mince/50-kc/',
                ]
            },
            'Váha': {
                'units': 9.7/1000,
                'sources': [
                    'https://www.cnb.cz/cs/bankovky-a-mince/mince/50-kc/',
                ]
            },
            'Vzdálenost': {
                'units': 0.0275,
                'desc': 'vyskládané vedle sebe',
                'sources': [
                    'https://www.cnb.cz/cs/bankovky-a-mince/mince/50-kc/',
                ]
            },
            'Cena': {
                'units': 50,
            }
        }
    },
    {
        'label': 'půllitrů piva',
        'conversions': {
            'Objem': {
                'units': 0.0005,
            }
        }
    },
    {
        'label': 'lidských vlasů',
        'conversions': {
            'Vzdálenost': {
                'units': 0.000075,
                'desc': 'na tloušťku',
                'sources': [
                    'https://en.wikipedia.org/wiki/Hair%27s_breadth',
                ]
            }
        }
    },
    {
        'label': 'olympijských bazénů',
        'conversions': {
            'Objem': {
                'units': 2500,
            }
        }
    },
    {
        'label': 'ročních spotřeb piva v ČR',
        'conversions': {
            'Objem': {
                'units': 1650000,
                'sources': [
                    'https://www.irozhlas.cz/ekonomika/pivo-narust-spotreba-produkce-konzumace-alkoholu-cesky-svaz-pivovaru-a-sladoven_1904091237_anj',
                ]
            }
        }
    },
    {
        'label': 'praček',
        'conversions': {
            'Váha': {
                'units': 80,
            },
            'Objem': {
                'units': 0.306,
                'sources': [
                    'https://lifestyle.euronics.co.uk/buyers-guide/washing-machine/size/',
                    'https://twitter.com/41actionnews/status/1158871610876682240',
                ]
            },
            'Rozloha': {
                'units': 0.36,
                'sources': [
                    'https://lifestyle.euronics.co.uk/buyers-guide/washing-machine/size/',
                    'https://twitter.com/41actionnews/status/1158871610876682240',
                ]
            }
        }
    },
    {
        'label': 'traktorů pro mladé a začínající zemědělce',
        'conversions': {
            'Váha': {
                'units': 1710,
                'sources': [
                    'https://www.zetor.cz/zetor-utilix-technicke-parametry#obsah',
                    'https://twitter.com/HerbertPavera/status/1215366274240389120',
                ]
            },
            'Cena': {
                'units': 511615,
                'sources': [
                    'https://ehlzetor.cz/soubory/novinky_soubory/file-22-6.pdf',
                    'https://twitter.com/HerbertPavera/status/1215366274240389120',
                ]
            },
            'Vzdálenost': {
                'units': 3.59,
                'desc': 'na délku',
                'sources': [
                    'https://www.zetor.cz/zetor-utilix-technicke-parametry#obsah',
                    'https://twitter.com/HerbertPavera/status/1215366274240389120',
                ]
            },
            'Rozloha': {
                'units': 5.8158,
                'sources': [
                    'https://www.zetor.cz/zetor-utilix-technicke-parametry#obsah',
                    'https://twitter.com/HerbertPavera/status/1215366274240389120',
                ]
            }
        }
    },
    {
        'label': 'CD',
        'conversions': {
            'Data': {
                'units': 700000000,
            }
        }
    },
    {
        'label': 'DVD',
        'conversions': {
            'Data': {
                'units': 4700000000,
            }
        }
    },
    {
        'label': 'pevných disků (16 TB)',
        'conversions': {
            'Data': {
                'units': 17592186044416,
                'sources': [
                    'https://www.seagate.com/www-content/datasheets/pdfs/ironwolf-16tb-DS1904-13-1905US-en_US.pdf',
                ]
            },
            'Cena': {
                'units': 13890,
                'sources': [
                    'https://www.alza.cz/seagate-ironwolf-16tb-d5665111.htm?o=1',
                ]
            },
            'Váha': {
                'units': 0.67,
                'sources': [
                    'https://www.seagate.com/www-content/datasheets/pdfs/ironwolf-16tb-DS1904-13-1905US-en_US.pdf',
                ]
            },
            'Rozloha': {
                'units': 0.014970931500000001,
                'desc': 'půdorys disku',
                'sources': [
                    'https://www.seagate.com/www-content/datasheets/pdfs/ironwolf-16tb-DS1904-13-1905US-en_US.pdf',
                ]
            },
            'Vzdálenost': {
                'units': 0.02611,
                'desc': 'naskládaných na sebe',
                'sources': [
                    'https://www.seagate.com/www-content/datasheets/pdfs/ironwolf-16tb-DS1904-13-1905US-en_US.pdf',
                ]
            },
            'Objem': {
                'units': 0.000390891021465,
                'sources': [
                    'https://www.seagate.com/www-content/datasheets/pdfs/ironwolf-16tb-DS1904-13-1905US-en_US.pdf',
                ]
            }
        }
    },
    {
        'label': 'informačních systémů pro evidenci vozidel',
        'conversions': {
            'Cena': {
                'units': 484379403,
                'sources': [
                    'https://www.irozhlas.cz/zpravy-domov/ministerstvo-dopravy-statni-fond-dopravni-infrastruktury-e-shop-dalnicni-znamky_2001161742_dok',
                    'https://smlouvy.gov.cz/smlouva/11357620',
                ]
            }
        }
    },
    {
        'label': 'rozpětí křídel orlů skalních',
        'conversions': {
            'Vzdálenost': {
                'units': 2.025,
                'sources': [
                    'https://twitter.com/_Karoliinka_/status/1242900637660176387',
                    'https://www.allaboutbirds.org/guide/Golden_Eagle/id',
                ]
            }
        }
    },
    {
        'label': 'rolí toaletního papíru',
        'conversions': {
            'Vzdálenost': {
                'units': 19.26875,
                'sources': [
                    'https://www.rohlik.cz/1307939-zewa-camomile-comfort-toaletni-papir-3-vrstvy-16ks',
                ]
            },
            'Cena': {
                'units': 12.4375,
                'sources': [
                    'https://www.rohlik.cz/1307939-zewa-camomile-comfort-toaletni-papir-3-vrstvy-16ks',
                ]
            },
            'Rozloha': {
                'units': 1.8305312500000002,
                'sources': [
                    'https://www.rohlik.cz/1307939-zewa-camomile-comfort-toaletni-papir-3-vrstvy-16ks',
                ]
            }
        }
    },
    {
        'label': 'tapírů nadél',
        'conversions': {
            'Vzdálenost': {
                'units': 2,
                'sources': [
                    'https://www.facebook.com/bionag/photos/a.1517805361845838/2326913190935047/?type=3&theater',
                    'https://cs.wikipedia.org/wiki/Tap%C3%ADrovit%C3%AD',
                ]
            }
        }
    },
    {
        'label': 'koňských délek',
        'conversions': {
            'Vzdálenost': {
                'units': 2.4,
                'sources': [
                    'https://en.wikipedia.org/wiki/Horse_length',
                ]
            },
            'Čas': {
                'units': 0.0033333333333333335,
                'sources': [
                    'https://en.wikipedia.org/wiki/Horse_length',
                ]
            }
        }
    },
    {
        'label': 'let provozu České televize',
        'conversions': {
            'Čas': {
                'units': 525600,
                'sources': [
                    'https://img.ceskatelevize.cz/boss/document/1594.pdf',
                ]
            },
            'Cena': {
                'units': 6760000000,
                'sources': [
                    'https://img.ceskatelevize.cz/boss/document/1594.pdf',
                ]
            }
        }
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

const natMap = {
    36: 'sextilionů',
    33: 'kvintiliard',
    30: 'kvintilionů',
    27: 'kvadriliard',
    24: 'kvadrilionů',
    21: 'triliard',
    18: 'trilionů',
    15: 'biliard',
    12: 'bilionů',
    9: 'miliard',
    6: 'milionů',
    3: 'tisíc',
    0: 'jednotek',
}

// u hodnoty urci, jestli ji muzem vyjadrit jako AeB, např. 1300 = 1.3e3
function maxPow(val) {
    // jdi od nejvyssich mocnin k nejnizsim - at chytnem tu nejvyssi moznou
    const convs = Object.entries(natMap).sort(x => -parseInt(x[0]));
    for (let [pow, text] of convs) {
        if (val >= Math.pow(10, pow)) {
            let nval = val / Math.pow(10, pow);
            return { baseVal: nval, pow: parseInt(pow) }
        }
    }
    return { baseVal: val, pow: 0 }
}

function natVal(val) {
    const { baseVal, pow } = maxPow(val)
    // pro jednotky nepsat jednotky, jen pro tisíce a výš
    if (pow === 0)
        return numFormat(baseVal);

    return `${numFormat(baseVal)} ${natMap[pow]}`;
}

function numToText(number, mul, unit, gr) {
    let num = parseInput(number);
    if (isNaN(num)) {
        return null;
    }

    num *= Math.pow(10, parseInt(mul));

    num *= unitConv[unit];

    let res = [];
    for (let conv of convTgObj) {
        const el = conv.conversions[gr];
        if (!el) {
            continue;
        }
        let nval = natVal(num / el.units);
        let conversions = {};
        for (let [tp, mp] of Object.entries(conv.conversions)) {
            if (tp === gr) continue;

            conversions[tp] = {
                val: num / el.units * mp.units,
                natval: natVal(num / el.units * mp.units),
                unitLabel: units[tp][1],
                unitNorm: units[tp][0],
                description: mp[1],
            }
        }
        res.push({
            origVal: num / el.units,
            value: nval,
            unit: conv.label,
            sources: el.sources,
            conversions: conversions,
            normalisation: el.units + ' ' + units[gr][1],
            description: el.desc,
        });
    }
    res.sort((a, b) => b.origVal - a.origVal);

    return res;
}
