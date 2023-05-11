/**
 * Funkcija vraća broj radnih dana od fiksnog datuma do danas. Preskačemo vikende i praznike
 * @param {Date} datum - datum do kojeg brojimo radne dane
 * @param {Object} praznici - datumi praznika
 * @returns {integer}
 */
export function brojRadnihDanaDo(datum, praznici) {
  let pocetak = new Date('2023-04-19');
  const ukupnoDana = brojDana(pocetak, datum);
  let brojRadnihDana = 0;
  for (let i = 0; i < ukupnoDana; i++) {
    pocetak = dodajDane(pocetak, 1);
    if (
      !(
        praznici[pocetak.toLocaleDateString('en-CA')] ||
        pocetak.getDay() === 0 ||
        pocetak.getDay() === 1 ||
        pocetak.getDay() === 6
      )
    ) {
      brojRadnihDana++;
    }
  }
  return brojRadnihDana;
}

/**
 * Funkcija dinamički pomiče osobe, ovisno o broju radnih dana
 * @param {string[]} osobe - Osobe koje su zadužene za red u kuhinji s redoslijedom od fiksnog datuma
 * @param {integer} dana - Broj radnih dana od fiksnog datuma
 * @returns {string[]} - Novi raspored
 */
export function pomakniRasporedZa(osobe, dana) {
  const pomak = dana > osobe.length ? dana % osobe.length : dana;
  return osobe.concat(osobe.splice(0, pomak));
}

/**
 * Funkcija uzima datum i konvertira ga u string oblika dd.mm.yyyy
 * @param {Date} datum
 * @returns {string}
 */
export function formatDDMMYYYY(datum) {
  return `${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}`;
}

/**
 * Funkcija vraća dan u tjednu
 * @param {Date} datum
 * @returns {string}
 */
export function danUTjednu(datum) {
  let dan;
  switch (datum.getDay()) {
    case 0:
      dan = 'Nedjelja';
      break;
    case 1:
      dan = 'Ponedjeljak';
      break;
    case 2:
      dan = 'Utorak';
      break;
    case 3:
      dan = 'Srijeda';
      break;
    case 4:
      dan = 'Četvrtak';
      break;
    case 5:
      dan = 'Petak';
      break;
    case 6:
      dan = 'Subota';
  }
  return dan;
}

/**
 * Funkcija dodaje dane na određeni datum
 * @param {Date} datum - datum na koji dodajemo dane
 * @param {integer} dana - broj dana koji dodajemo
 * @returns {Date}
 */
export function dodajDane(datum, dana) {
  let noviDatum = new Date(datum.getTime());
  noviDatum.setDate(noviDatum.getDate() + dana);
  return noviDatum;
}
/**
 * Funkcija za prikaz datuma i dana u tablici. Funkcija gleda unaprijed i unazad i preskače vikende i praznike
 * @param {Date} datum
 * @param {integer} brojIteracije
 * @returns {Date}
 */
export function kolonaDatum(datum, brojIteracije) {
  let pomocniDatum = new Date(datum.getTime());
  if (brojIteracije === 0) {
    return pomocniDatum;
  }
  if (brojIteracije === -1) {
    while (brojIteracije < 0) {
      pomocniDatum = dodajDane(pomocniDatum, -1);
      if (
        !(
          praznici[pomocniDatum.toLocaleDateString('en-CA')] ||
          pomocniDatum.getDay() === 0 ||
          pomocniDatum.getDay() === 1 ||
          pomocniDatum.getDay() === 6
        )
      ) {
        brojIteracije++;
      }
    }
    return pomocniDatum;
  }

  while (brojIteracije > 0) {
    pomocniDatum = dodajDane(pomocniDatum, 1);
    if (
      !(
        praznici[pomocniDatum.toLocaleDateString('en-CA')] ||
        pomocniDatum.getDay() === 0 ||
        pomocniDatum.getDay() === 1 ||
        pomocniDatum.getDay() === 6
      )
    ) {
      brojIteracije--;
    }
  }
  return pomocniDatum;
}

/**
 * Funkcija vraća dan prije određenog datuma koji nije vikend ili praznik
 * @param {Date} datum - Stari datum
 * @returns {Date} - Novi datum
 */
export function prviRadniDanPrije(datum) {
  let pomocniDatum = new Date(datum.getTime());
  while (true) {
    if (
      !(
        praznici[pomocniDatum.toLocaleDateString('en-CA')] ||
        pomocniDatum.getDay() === 0 ||
        pomocniDatum.getDay() === 1 ||
        pomocniDatum.getDay() === 6
      )
    ) {
      return pomocniDatum;
    } else {
      pomocniDatum = dodajDane(pomocniDatum, -1);
    }
  }
}

/**
 * Funkcija vraća broj dana između 2 datuma
 * @param {Date} pocetak
 * @param {Date} kraj
 * @returns {integer}
 */
function brojDana(pocetak, kraj) {
  const datum1 = new Date(pocetak.getTime());
  const datum2 = new Date(kraj.getTime());

  // Dan u milisekundana
  const jedanDan = 1000 * 60 * 60 * 24;

  // Razlika u milisekundama
  const razlika = datum2.getTime() - datum1.getTime();

  // Razlika u danima
  const razlikaDana = Math.round(razlika / jedanDan);

  return razlikaDana;
}

export const praznici = {
  '2023-01-01': 'Nova Godina',
  '2023-01-06': 'Sveta tri kralja',
  '2023-04-09': 'Uskrs',
  '2023-04-10': 'Uskrsni ponedjeljak',
  '2023-05-01': 'Praznik rada',
  '2023-05-30': 'Dan državnosti',
  '2023-06-08': 'Tijelovo',
  '2023-06-22': 'Dan antifašističke borbe',
  '2023-08-05': 'Dan domovinske zahvalnosti',
  '2023-08-15': 'Velika Gospa',
  '2023-11-01': 'Dan svih svetih',
  '2023-11-18': 'Sjećanje na Vukovar',
  '2023-12-25': 'Božić',
  '2023-12-26': 'Sveti Stjepan',
  '2024-01-01': 'Nova Godina',
  '2024-01-06': 'Sveta tri kralja',
  '2024-03-31': 'Uskrs',
  '2024-04-01': 'Uskrsni ponedjeljak',
  '2024-05-01': 'Praznik rada',
  '2024-05-30': 'Dan državnosti',
  '2024-05-30': 'Tijelovo',
  '2024-06-22': 'Dan antifašističke borbe',
  '2024-08-05': 'Dan domovinske zahvalnosti',
  '2024-08-15': 'Velika Gospa',
  '2024-11-01': 'Dan svih svetih',
  '2024-11-18': 'Sjećanje na Vukovar',
  '2024-12-25': 'Božić',
  '2024-12-26': 'Sveti Stjepan',
};
