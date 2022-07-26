const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'IMOCKI ING',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'IMOCKI ING',
  role: 'Obrt za tehničko ispitivanje i analizu',
  description:
    'Nudimo cjelokupne usluge iz područja zaštite na radu kao što su izrada procjene rizika radnih mjesta, izrada Pravilnika zaštite na radu…',
  resume: 'https://example.com',
  social: {
    youtube: '',
    facebook: '',
    instagram:''
    
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Što je zaštita na radu?',
    description:
      'Ukratko, zaštita na radu predstavlja cijeli sustav pravila, mjera i aktivnosti čijom se kvalitetnom primjenom ostvaruju sigurni radni uvjeti te zaštita zdravlja na radu. Sve s ciljem sprječavanja rizika u odnosu na opasnosti, štetnosti i napore koji se mogu javljati pri obavljanju poslova, a koji mogu uzrokovati ozljede na radu, profesionalne bolesti, bolesti vezane uz rad te ostale materijalne i nematerijalne štete za vrijeme rada ili u vezi s radom.',
    stack: ['Vrijeme', 'Sigurnost', 'Obaveza'],
  
  },
  {
    name: 'Odnose li se obveze zaštite na radu na sve poslodavce?',
    description:
      'Štoviše, poslodavac je u tom smislu uvijek odgovoran neovisno o tome je li zaposlio (jednog ili više) stručnjaka zaštite na radu ili je obavljanje poslova zaštite na radu ugovorio s osobom ovlaštenom za obavljanje tih poslova (ovlaštenom tvrtkom i/ili sl.).',
    stack: ['Zakon', 'Obaveza'],
  
  },
  {
    name: 'Što uključuje vođenje zaštite na radu?',
    description:
      'Svatko tko vodi zaštitu na radu mora osigurati da su u svakom trenutku ispunjene obveze propisane Zakonom o zaštiti na radu i pratećim pravilnicima. Osnovne obveze poslodavca iz zaštite na radu su posjedovanje važeće procjene rizika, provođenje osposobljavanja za rad na siguran način i osposobljavanja za početno gašenje požara svih zaposlenika, osposobljavanje dovoljnog broja zaposlenika za pružanje prve pomoći, ovlaštenika, povjerenika radnika i voditelja evakuacije',
    stack: ['Organizacija', 'Odgovornost','Dužnost'],
   
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Izrada procjene rizika radnih mjesta',
  'Izrada Pravilnika zaštite na radu',
  'Osposobljavanje radnika za rad na siguran način',
  'Ispitivanje električnih instalacija',
  'Ispitivanja tipkala za isključenje električne energije',
  'Ispitivanje radne opreme',
  'Izrada priručnika i plana osposobljavanja ovlaštenika',
  'Izrada priručnika i plana osposobljavanja povjerenika',
  'Osposobljavanje ovlaštenika poslodavca',
  'Osposobljavanje povjerenika',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
