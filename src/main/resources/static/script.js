import {
  brojRadnihDanaDo,
  pomakniRasporedZa,
  formatDDMMYYYY,
  danUTjednu,
  praznici,
  kolonaDatum,
  prviRadniDanPrije,
} from './utilities.js';

let osobe = [
  'Sljiva',
  'Tino',
  'Jo',
  'Filip',
  'Petra',
  'Marin',
  'Zvonac',
  'Antonijo',
  'Tin',
  'Ena',
  'Kic',
  'Marko',
  'Studenti',
  'Zagy',
];

const danas = new Date();

danas.setHours(1, 0, 0);

// Datum formatiran u oblik dd.mm.yyyy

// Broj radnih dana od fiksnog datuma
const dana = brojRadnihDanaDo(danas, praznici);
osobe = pomakniRasporedZa(osobe, dana);

const radniDan = prviRadniDanPrije(danas);

let prethodniRadniDan = kolonaDatum(radniDan, -1);
prethodniRadniDan.setHours(2);
prethodniRadniDan = prethodniRadniDan.toISOString().slice(0, 10);

getOcjenaKomentarKontrolaJucer(prethodniRadniDan);
getOcjenaKomentarKontrolaDanas(new Date().toISOString().slice(0, 10));

for (let i = 0; i < osobe.length; i++) {
  const element = osobe[i];
  const [osoba, datum, dan] = document.getElementById(i).children;
  osoba.innerText = element;
  datum.innerText = formatDDMMYYYY(kolonaDatum(radniDan, i - 1));
  dan.innerText = danUTjednu(kolonaDatum(radniDan, i - 1));
}

async function getOcjenaKomentarKontrolaJucer(datum) {
  const response = await fetch(`http://10.10.20.24:8080/api/ocjene/${datum}`);
  if (!response.headers.get('content-type')) return;
  const data = await response.json();
  const komentar = data.komentar;
  const kontrola = data.kontrola;
  const ocjena =
    parseInt(data.perilica) +
    parseInt(data.smece) +
    parseInt(data.stednjak) +
    parseInt(data.stoloviOrmar) +
    parseInt(data.sudoper);
  document.getElementById(0).children[3].innerText = ocjena ? ocjena : 0;
  document.getElementById(0).children[4].innerText = komentar ? komentar : '';
  document.getElementById(0).children[5].innerText = kontrola ? kontrola : '';
}

async function getOcjenaKomentarKontrolaDanas(datum) {
  const response = await fetch(`http://10.10.20.24:8080/api/ocjene/${datum}`);
  if (!response.headers.get('content-type')) return;
  const data = await response.json();
  const komentar = data.komentar;
  const kontrola = data.kontrola;
  const ocjena =
    parseInt(data.perilica) +
    parseInt(data.smece) +
    parseInt(data.stednjak) +
    parseInt(data.stoloviOrmar) +
    parseInt(data.sudoper);
  document.getElementById(1).children[3].innerText = ocjena ? ocjena : 0;
  document.getElementById(1).children[4].innerText = komentar ? komentar : '';
  document.getElementById(1).children[5].innerText = kontrola ? kontrola : '';
}
