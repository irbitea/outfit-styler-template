// Objekta izveidošana
const persona = {
    vards: "Jānis",
    uzvards: "Bērziņš",
    vecums: 18,
    irNokartojisEksamenu: true
};

// Punktu notācija
console.log("Vārds:", persona.vards);
console.log("Uzvards:", persona.uzvards);
console.log("Vecums:", persona.vecums);
// nosacījums ? ir izpildīts : nav izpildīts -- cits pieraksts if else statement
console.log("Ir nokārtojis eksāmenu:", persona.irNokartojisEksamenu ? 'ir nokārtojis' : 'nav nokārtojis');

if (persona.irNokartojisEksamenu) {
    console.log('ir nokārtojis')
}
else {
    console.log('nav nokārtojis')
}

// Īpašību pievienošana
persona.profesija = "Programmētājs";
console.log("Profesija:", persona.profesija);

// Īpašību maiņa
persona.vecums = 100;
console.log("Jaunais vecums:", persona.vecums);

// Objekta iterācija
for (let atslega in persona) {
    console.log(`${atslega}: ${persona[atslega]}`);
}

// Funkcija objektā (metode)
const auto = {
    marka: "Toyota",
    modelis: "Corolla",
    pilnsNosaukums: function () {
        return `${this.marka} ${this.modelis}`;
    }
};

console.log("Auto pilns nosaukums:", auto.pilnsNosaukums());

// Objektu iebūvētās metodes
const atslēgas = Object.keys(persona);
console.log("Objekta atslēgas:", atslēgas);

const vērtības = Object.values(persona);
console.log("Objekta vērtības:", vērtības);

const pāri = Object.entries(persona);
console.log("Objekta pāri:", pāri);

// Objekts ar vairākiem līmeņiem
const persona2 = {
    vards: {
        pirmaisVards: 'Jānis',
        otraisVards: 'Pēteris'
    },
    uzvards: 'Bērziņš'
};

console.log("Pirmais vārds:", persona2.vards.pirmaisVards);
console.log("Otrais vārds:", persona2.vards.otraisVards);
persona2.name.common