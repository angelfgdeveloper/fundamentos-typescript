// Orientacion para Fotografías
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape = 0, // 0
  Portrait = 1,  // 1
  Square = 2,    // 2
  Panorama = 3   // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('Landscape:', landscape);
console.log('Landscape:', PhotoOrientation[0]);

enum PictureOrientation {
  Landscape = 10, // 10
  Portrait,       // 11
  Square,         // 12
  Panorama        // 13
}

console.log('Portrait:', PictureOrientation.Portrait);

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp'
}

const country: Country = Country.Mexico;
console.log('Country:', country);


enum Months {
  January = 'Enero',
  February = 'Febrero',
  March = 'Marzo',
  April = 'Abril',
  May = 'Mayo',
  June = 'Junio',
  July = 'Julio',
  August = 'Agosto',
  September = 'Septiembre',
  October = 'Octubre',
  November = 'Noviembre',
  December = 'Diciembre'
}

const firstMonth: Months = Months.January;
console.log('Mes:', firstMonth);
console.log('Mes:', Months.December);
// const monthName = Months[0];
// console.log('Mes:', monthName);