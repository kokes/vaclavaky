import logging
from string import Template
from urllib.request import urlopen

TMPL_FILENAME = "external.js.tmpl"
OUTPUT_FILENAME = "external.js"
CNB_URL = "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt"


def CNB():
    ret = dict()
    curr = {"USD", "GBP", "EUR"}
    with urlopen(CNB_URL) as r:
        data = r.read().decode()

    for line in data.splitlines():
        parts = line.strip().split("|")
        if len(parts) == 5 and parts[3] in curr:
            assert parts[2] == "1"  # mnozstvi
            ret[parts[3]] = parts[-1].replace(",", ".")

    return ret


funcs = [
    CNB,
]

if __name__ == "__main__":
    logging.getLogger().setLevel(logging.INFO)

    logging.info("Nacitam template %s", TMPL_FILENAME)
    with open(TMPL_FILENAME, encoding="utf-8") as f:
        tmpl = Template(f.read())

    replacements = dict()
    for func in funcs:
        logging.info("Nacitam data z %s", func.__name__)
        replacements.update(func())

    logging.info("Zapisuju zmeny do %s", OUTPUT_FILENAME)
    with open(OUTPUT_FILENAME, "wt", encoding="utf-8") as fw:
        fw.write(tmpl.substitute(replacements))
