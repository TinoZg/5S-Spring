import { brojRadnihDanaDo, pomakniRasporedZa, praznici } from '../utilities.js';

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
  'Kia',
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

async function postOcjena(options) {
  const response = await fetch('http://10.10.20.24:8080/api/ocjene', options);
  location.href = '../index.html';
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();

  form.classList.add('was-validated');

  const perilica = document.querySelector('#validationCustom01').value;
  const sudoper = document.querySelector('#validationCustom02').value;
  const stednjak = document.querySelector('#validationCustom03').value;
  const smece = document.querySelector('#validationCustom04').value;
  const stoloviOrmar = document.querySelector('#validationCustom05').value;
  const datum = new Date().toISOString().slice(0, 10);
  const kontrola = document.querySelector('#Kontrola').value;
  const komentar = document.querySelector('#Komentar').value;

  const ocjena = {
    ime: osobe[1],
    perilica: parseInt(perilica),
    sudoper,
    stednjak,
    smece,
    stoloviOrmar,
    datum,
    kontrola,
    komentar,
  };

  // Set options for fetch()
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ocjena),
  };

  if (form.checkValidity()) {
    postOcjena(options);
  }
});
