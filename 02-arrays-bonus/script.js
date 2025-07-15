const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const teacher = teachers[i];
  console.log(teacher);
  reversedTeachers.push(teacher);
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

for (let i = 0; i < teachers.length; i++) {
  const thisteacher = teachers[i]

  if (thisteacher.length >= 5) {
    longNames.push(thisteacher);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = null;
isFabioPresent = teachers.includes('Fabio');

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');