// 1. forEach – izpilda funkciju katram elementam un izmaina oriģinālo masīvu
const augli = ['ābols', 'banāns', 'ķirsis'];

augli.forEach((aug) => {
    console.log('Auglis:', aug);
});

// 2. map – pārveido katru elementu un izveido jaunu masīvu
const skaitli = [1, 2, 3];
const dubultoti = skaitli.map((n) => n * 2);
console.log('Dubultoti skaitļi:', dubultoti); // [2, 4, 6]

// 3. filter – filtrē elementus pēc nosacījuma
const paraSkaitli = skaitli.filter((n) => );
console.log('Pāra skaitļi:', paraSkaitli); // [2]

// 4. reduce – reducē masīvu uz vienu vērtību (piemēram, summu) jeb ļauj saskaitīt visas vērtības masīvā
const summa = skaitli.reduce((acc, val) => acc + val, 0);
console.log('Summa:', summa); // 6

// array.reduce((accumulator, currentValue) => {
//   accumulator + currentValue;
// }, initialValue);

// accumulator: uzkrāj vērtību jeb summu
// currentValue: pašreizējais masīva elements
// initialValue: sākotnējā vērtība (ļoti ieteicams to norādīt)

// // 5. find – atrod pirmo atbilstošo elementu
const pirmaisB = augli.find((aug) => aug.startsWith('b'));
console.log('Pirmais ar b:', pirmaisB); // "banāns"

// 6. some – pārbauda, vai vismaz viens elements atbilst nosacījumam
const vecumi = [15, 18, 22];
const irPilngadigs = vecumi.some((v) => v >= 18);
console.log('Ir vismaz viens pilngadīgs:', irPilngadigs); // true

// 7. every – pārbauda, vai visi elementi atbilst nosacījumam
const visiPilngadigi = vecumi.every((v) => v >= 18);
console.log('Visi pilngadīgi:', visiPilngadigi); // false

// 8. includes – pārbauda, vai masīvs satur konkrētu vērtību
console.log('Masīvā ir banāns:', augli.includes('banāns')); // true

// 9. sort – sakārto masīvu (skaitļiem jānorāda salīdzināšanas funkcija)
const nesakartoti = [10, 1, 5];
nesakartoti.sort((a, b) => a - b);
console.log('Sakārtoti skaitļi:', nesakartoti); // [1, 5, 10]

// 10. flat – pārveido masīvu, kas satur vairākus masīvus, uz vienu kopēju masīvu
const ligzdots = [1, [2, 3], [4, [5]]];
console.log('1. līmenis:', ligzdots.flat());      // [1, 2, 3, 4, [5]]
console.log('2. līmenis:', ligzdots.flat(2));     // [1, 2, 3, 4, 5]

// 11. slice – izgriež daļu no masīva (neizmaina oriģinālu)
const burti = ['a', 'b', 'c', 'd'];
const daļa = burti.slice(1, 3);
console.log('Slice rezultāts:', daļa); // ['b', 'c']

// 12. splice – izņem/ievieto elementus (izmaina oriģinālo masīvu)
burti.splice(2, 1); // izņem 'c'
console.log('Pēc splice:', burti); // ['a', 'b', 'd']


fetch('https://restcountries.com/v3.1/all').then((response) => { if (response.ok) return response.json() }).then((value) => console.log(value))
