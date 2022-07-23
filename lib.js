const units = {
    'Cena': {
        'kc': ['korun', 1],
        'usd': ['dolarů', 25.535], // 3/4/2020 (cnb.cz)
        'eur': ['eur', 27.540],
        'gbp': ['liber', 31.347],
    },
    'Váha': {
        'g': ['gramů', 1/1000],
        'kg': ['kilogramů', 1],
        'tn': ['tun', 1000],
        'lb': ['liber', 0.453592],
    },
    'Rozloha': {
        'ft2': ['čtverečních stop', 0.092903],
        'm2': ['čtverečních metrů', 1],
        'km2': ['čtverečních kilometrů', 1000 * 1000],
        'ha': ['hektarů', 100 * 100],
        'msq': ['čtverečních mil', 1609.344 * 1609.344],
    },
    'Osob': {
        '1': ['lidí', 1],
        '2': ['dvojic', 2],
        '4': ['čtyřčlenných rodin', 4],
    },
    'Objem': {
        'ml': ['mililitrů', 0.001 / 1000],
        'l': ['litrů', 0.001],
        'm3': ['metrů krychlových', 1],
        'hl': ['hektolitrů', 0.1],
        'ft3': ['krychlových stop', 1/35],
    },
    'Vzdálenost': {
        'm': ['metrů', 1],
        'km': ['kilometrů', 1000],
    },
    'Data': {
        'b': ['bajtů', 1],
        'kb': ['kilobajtů', 1000],
        'mb': ['megabajtů', Math.pow(1000, 2)],
        'gb': ['gigabajtů', Math.pow(1000, 3)],
        'tb': ['terabajtů', Math.pow(1000, 4)],
        'pb': ['petabajtů', Math.pow(1000, 5)],
        'eb': ['exabajtů', Math.pow(1000, 6)],
        'zb': ['zetabajtů', Math.pow(1000, 7)],
        'yb': ['yotabajtů', Math.pow(1000, 8)],
    },
    'Čas': {
        's': ['sekund', 1/60],
        'min': ['minut', 1],
        'h': ['hodin', 60],
        'd': ['dní', 60 * 24],
        'w': ['týdnů', 60 * 24 * 7],
        'y': ['let', 60 * 24 * 365],
    }
}

function findNorm(convs) {
    for (let [key, props] of Object.entries(convs)) {
        if (props[1] === 1) {
            return key;
        }
    }
    throw new Error(`no norm for ${convs}`);
}

function unitLookup(shortcut) {
    for (let convs of Object.values(units)) {
        if (convs.hasOwnProperty(shortcut)) {
            return {
                label: convs[shortcut][0],
                rate: convs[shortcut][1],
                norm: findNorm(convs),
            }
        }
    }
    throw new Error(`conversion for ${shortcut} not found`)
}

const convTgObj = [
    {
        'label': 'vozů Škoda Fabia',
        'emoji': ['🚙', '🚗'],
        'conversions': {
            // 'Objem': [ 315 / 1000, 'plných kufrů Škody Fabia'], // TODO: tohle jsou kufry, ne cely auta, takze to je nefer
            'Osob': {
                'units': 5,
                'sources': [
                    'https://www.skoda-auto.cz/modely/fabia/fabia',
                ],
            },
            'Vzdálenost': {
                'units': 3.997,
                'sources': [
                    'https://www.skoda-auto.cz/modely/fabia/fabia',
                ],
            },
            'Cena': {
                'units': 339900,
                'sources': [
                    'https://www.skoda-auto.cz/modely/fabia/fabia',
                ],
            },
            'Váha': {
                'units': 1150,
                'sources': [
                    'https://www.skoda-auto.cz/modely/fabia/fabia',
                ],
            },
            'Rozloha': {
                'units': 3.997 * 1.958, // délka krát šířka (včetně zrcátek)
                'sources': [
                    'https://www.skoda-auto.cz/modely/fabia/fabia',
                ],
                'desc': 'půdorys auta',
            },
            'Objem': {
                'units': 3.997 * 1.958 * 1.452, // délka krát šířka (včetně zrcátek) krát výška (bounding box)
                'sources': [
                    'https://www.skoda-auto.cz/modely/fabia/fabia',
                ],
                'desc': '"v kvádru"',
            }
        }
    },
    {
        'label': 'letadel F-35',
        'emoji': ['✈️'],
        'conversions': {
            'Osob': {
                'units': 1,
                'desc': 'Jde o třídu jednosedadlových stíhacích letounů',
                'sources': [
                    'https://cs.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
                ]
            },
            'Vzdálenost': {
                'units': 15.4,
                'desc': 'Délka letadla F-35B: 15,4 m',
                'sources': [
                    'https://cs.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
                ]
            },
            'Cena': {
                'units': 3515796800,
                'desc': 'Historické nákupy: 140-152 mil. USD',
                'sources': [
                    'https://www.seznamzpravy.cz/clanek/domaci-politika-prehledne-kolik-budou-stat-stihacky-z-usa-a-jak-by-se-zmenily-zakladny-209449',
                    'https://www.google.com/search?q=146000000+USD+to+CZK',
                ]
            },
            'Váha': {
                'units': 14700,
                'desc': 'Hmotnost prázdného stroje F-35B: 14 700 kg',
                'sources': [
                    'https://cs.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
                ]
            },
            'Rozloha': {
                'units': 42.7,
                'desc': 'Nosná plocha F-35B: 42,7 m²',
                'sources': [
                    'https://cs.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
                ]
            },
            'Objem': {
                'units': (27300 - 14700 - 100)/1000, // Rozdíl mezi hmotností prázdného stroje a maximální vzletovou hmotností. Odečítám ještě 100kg jako váhu pilota s výstrojí.
                'desc': 'Maximální množství vody, kterou by bylo možné přepravit pomocí F-35B',
                'sources': [
                    'https://cs.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
                ]
            }
        }
    },
    {
        'label': 'koleček paprikáše',
        'conversions': {
            'Váha': {
                // 'units': 0.0027,
                'units': 2.7,
                'unit': 'g',
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
        'emoji': ['💾'],
        'conversions': {
            'Rozloha': {
                'units': 93.7 * 90 / (1000 * 1000),
                'sources': [
                    'https://www.fileformat.info/media/measurements.htm',
                ],
            },
            'Objem': {
                'units': 93.7 * 90 * 3.3 / (1000 * 1000 * 1000),
                'sources': [
                    'https://www.fileformat.info/media/measurements.htm',
                ],
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
                'units': 78866,
                'unit': 'km2',
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
        'label': {
            'one': 'cheeseburger',
            'several': 'cheeseburgery',
            'many': 'cheeseburgerů',
            'frac': 'cheeseburgeru',
        },
        'emoji': ['🍔'],
        'conversions': {
            'Cena': {
                'units': 39,
                'sources': [
                    'https://www.mcdonalds.cz/menu/hovezi-burgery/cheeseburger/',
                ]
            }
        }
    },
    {
        'label': 'Airbusů A380-800',
        'emoji': ['🛩️'],
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
        'label': 'částic koronaviru',
        'conversions': {
            'Osob': {
                'units': 1 / (800*1000*1000),
                'sources': [
                    'https://www.novinky.cz/koktejl/clanek/veskery-koronavirus-sars-cov-2-na-celem-svete-by-se-vesel-na-cajovou-lzicku-40342646',
                    'https://aproblemsquared.libsyn.com/website/series-of-teeth-and-queries-of-cheese',
                ]
            },
            'Objem': {
                'units':
                    4/3 * Math.PI * Math.pow(75 * Math.pow(10, -9), 3) // objem jedne castice
                    * Math.pow(Math.PI / (3 * Math.sqrt(2)), -1), // sphere packing
                'sources': [
                    'https://www.novinky.cz/koktejl/clanek/veskery-koronavirus-sars-cov-2-na-celem-svete-by-se-vesel-na-cajovou-lzicku-40342646',
                    'https://aproblemsquared.libsyn.com/website/series-of-teeth-and-queries-of-cheese',
                ]
            }
        }
    },
    {
        'label': 'stadionů Wembley',
        'emoji': ['🏟️'],
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
        'label': 'Bruntálů',
        'conversions': {
            'Rozloha': {
                'units': 29.34 * 1000 * 1000,
                'sources': [
                    'https://cs.wikipedia.org/wiki/Brunt%C3%A1l',
                ],
            },
            'Osob': {
                'units': 16138,
                'sources': [
                    'https://cs.wikipedia.org/wiki/Brunt%C3%A1l',
                ],
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
                'units': 40,
                'unit': 'w',
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
        'emoji': ['🛏️'],
        'conversions': {
            'Rozloha': {
                'units': 3.2,
            }
        }
    },
    {
        'label': 'obědů',
        'emoji': ['🍱', '🍲', '🥗', '🥪', '🥘'],
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
        'emoji': ['🏥'],
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
        'label': {
            'one': 'dětská plínka',
            'several': 'dětské plínky',
            'many': 'dětských plínek',
            'frac': 'dětské plínky',
        },
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
        'label': 'hasičských helem v plastech',
        'conversions': {
            'Čas': {
                'units': 24*60*365,
                'desc': 'běžnou konzumací',
                'sources': [
                    'https://www.reuters.com/article/environment-plastic-diet-wider-image-int-idUSKBN28I178',
                    'https://www.novinky.cz/koktejl/clanek/plasty-v-nasem-jidle-a-piti-za-rok-snime-celou-hasicskou-helmu-40344721',
                ]
            },
            'Váha': {
                'units': 0.252,
                'desc': 'běžnou konzumací',
                'sources': [
                    'https://www.reuters.com/article/environment-plastic-diet-wider-image-int-idUSKBN28I178',
                    'https://www.novinky.cz/koktejl/clanek/plasty-v-nasem-jidle-a-piti-za-rok-snime-celou-hasicskou-helmu-40344721',
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
        'emoji': ['🌍'],
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
        'emoji': ['🚜'],
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
        'emoji': ['💿'],
        'conversions': {
            'Data': {
                'units': 700000000,
            }
        }
    },
    {
        'label': 'DVD',
        'emoji': ['📀'],
        'conversions': {
            'Data': {
                'units': 4.7,
                'unit': 'gb',
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
        'emoji': ['🦅'],
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
        'emoji': ['🧻'],
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
                'unit': 'm',
                'sources': [
                    'https://en.wikipedia.org/wiki/Horse_length',
                ]
            },
            'Čas': {
                'units': 1/5,
                'unit': 's',
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
    603: {'one': 'centiliarda', 'several': 'centiliardy', 'many': 'centiliard', 'frac': 'centiliardy'},
    600: {'one': 'centilion', 'several': 'centiliony', 'many': 'centilionů', 'frac': 'centilionu'},
    303: {'one': 'kvinkvagintilliarda', 'several': 'kvinkvagintilliardy', 'many': 'kvinkvagintilliard', 'frac': 'kvinkvagintilliardy'},
    180: {'one': 'trigintilion', 'several': 'trigintiliony', 'many': 'trigintilionů', 'frac': 'trigintilionu'},
    120: {'one': 'vigintilion', 'several': 'vigintiliony', 'many': 'vigintilionů', 'frac': 'vgintilionu'},
    63: {'one': 'deciliarda', 'several': 'deciliardy', 'many': 'deciliard', 'frac': 'deciliardy'},
    60: {'one': 'decilion', 'several': 'deciliony', 'many': 'decilionů', 'frac': 'decilionu'},
    57: {'one': 'noniliarda', 'several': 'noniliardy', 'many': 'noniliard', 'frac': 'noniliardy'},
    54: {'one': 'nonilion', 'several': 'noniliony', 'many': 'nonilionů', 'frac': 'nonilionu'},
    51: {'one': 'oktiliarda', 'several': 'oktiliardy', 'many': 'oktiliard', 'frac': 'oktiliardy'},
    48: {'one': 'oktilion', 'several': 'oktiliony', 'many': 'oktilionů', 'frac': 'oktiolionu'},
    45: {'one': 'septiliarda', 'several': 'septiliardy', 'many': 'septiliard', 'frac': 'septiliardy'},
    42: {'one': 'septilion', 'several': 'septiliony', 'many': 'septilionů', 'frac': 'septilionu'},
    39: {'one': 'sextiliarda', 'several': 'sextiliardy', 'many': 'sextiliard', 'frac': 'sextiliardy'},
    36: {'one': 'sextilion', 'several': 'sextiliony', 'many': 'sextilionů', 'frac': 'sextilionu'},
    33: {'one': 'kvantiliarda', 'several': 'kvantiliardy', 'many': 'kvintiliard', 'frac': 'kvantiliardy'},
    30: {'one': 'kvitilion', 'several': 'kvintiliony', 'many': 'kvintilionů', 'frac': 'kvintilionu'},
    27: {'one': 'kvadriliarda', 'several': 'kvadriliardy', 'many': 'kvadriliard', 'frac': 'kvadriliardy'},
    24: {'one': 'kvadrilion', 'several': 'kvadriliony', 'many': 'kvadrilionů', 'frac': 'kvadrilionu'},
    21: {'one': 'triliarda', 'several': 'triliardy', 'many': 'triliard', 'frac': 'triliardy'},
    18: {'one': 'trilion', 'several': 'triliony', 'many': 'trilionů', 'frac': 'trilionu'},
    15: {'one': 'biliarda', 'several': 'biliardy', 'many': 'biliard', 'frac': 'biliardy'},
    12: {'one': 'bilion', 'several': 'biliony', 'many': 'bilionů', 'frac': 'bilionu'},
    9: {'one': 'miliarda', 'several': 'miliardy', 'many': 'miliard', 'frac': 'miliardy'},
    6: {'one': 'milion', 'several': 'miliony', 'many': 'milionů', 'frac': 'milionu'},
    3: {'one': 'tisíc', 'several': 'tisíce', 'many': 'tisíc', 'frac': 'tisíce'},
    0: {'one': 'jednotka', 'several': 'jednotky', 'many': 'jednotek', 'frac': 'jednotky'},
}

// u hodnoty urci, jestli ji muzem vyjadrit jako AeB, např. 1300 = 1.3e3
function maxPow(val) {
    // jdi od nejvyssich mocnin k nejnizsim - at chytnem tu nejvyssi moznou
    const convs = Object.entries(natMap).sort((a, b) => parseInt(b[0]) - parseInt(a[0]));
    for (let [pow, text] of convs) {
        if (val >= Math.pow(10, pow)) {
            let nval = val / Math.pow(10, pow);
            return { baseVal: nval, pow: parseInt(pow) }
        }
    }
    return { baseVal: val, pow: 0 }
}

// TODO: tests: 1 -> one, 1.00001 -> one, 1.01 -> frac, 2.002 -> several, 2.01 -> frac, ...
function sizeClass(val) {
    const valtr = parseFloat(val.toFixed(2));
    if (valtr !== parseInt(val, 10)) {
        return 'frac';
    }
    switch (valtr) {
        case 1:
            return 'one';
        case 2:
        case 3:
        case 4:
            return 'several';
        default:
            return 'many';
    }
}

// TODO: test, 2000 -> 2 tisíce, 2e6 -> 2 miliony, ale 2,3e6 -> 2.3 milionu atd.
function natVal(val) {
    const { baseVal, pow } = maxPow(val)
    // pro jednotky nepsat jednotky, jen pro tisíce a výš
    if (pow === 0)
        return numFormat(baseVal);

    const mul = natMap[pow][sizeClass(baseVal)];
    return `${numFormat(baseVal)} ${mul}`;
}

function numToText(number, mul, unit, gr) {
    let num = parseInput(number);
    if (isNaN(num)) {
        return null;
    }

    num *= Math.pow(10, parseInt(mul));

    num *= unitLookup(unit).rate;

    let res = [];
    for (let conv of convTgObj) {
        const el = conv.conversions[gr];
        if (!el) {
            continue;
        }
        // we can specify conversions as "1000 m3" now, we don't have to normalise anymore
        let normed = num / el.units;
        if (el.unit !== undefined) {
            normed /= unitLookup(el.unit).rate;
        }
        let nval = natVal(normed);
        let conversions = {};
        for (let [tp, mp] of Object.entries(conv.conversions)) {
            if (tp === gr) continue;

            // TODO: to be replaced by validation
            // if (mp.unit !== undefined && !unitLookup.hasOwnProperty(mp.unit)) {
            //     throw new Error('invalid unit ' + el.unit);
            // }
            let newNormed = normed * mp.units; // * (unitLookup[mp.unit] || 1);
            if (mp.unit !== undefined) {
                newNormed *= unitLookup(mp.unit).rate;
            }

            const finalUnit = el.unit || findNorm(units[tp]);
            conversions[tp] = {
                val: newNormed,
                natval: natVal(newNormed),
                unitLabel: unitLookup(finalUnit).label,
                unitNorm: unitLookup(finalUnit).norm,
                description: mp[1],
            }
        }
        let unitLabel = unitLookup(findNorm(units[gr])).label;
        if (el.unit !== undefined) {
            unitLabel = unitLookup(el.unit).label;
        }
        // sklonovani
        let normLabel = conv.label.many || conv.label; // muze to byt string nebo objekt (default - many)
        if (maxPow(normed).pow === 0) {
            const candidate = conv.label[sizeClass(normed)];
            if (candidate !== undefined) {
                normLabel = candidate
            }
        }

        res.push({
            origVal: normed,
            value: nval,
            unit: normLabel,
            sources: el.sources,
            conversions: conversions,
            normalisation: el.units + ' ' + unitLabel,
            description: el.desc,
            emoji: conv.emoji,
        });
    }
    res.sort((a, b) => b.origVal - a.origVal);

    return res;
}

try {
   module.exports = exports = {
       numToText,
       unitLookup,
       units,
       convTgObj,
       natMap,
   };
} catch (e) {}
