const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const matches = [...html.matchAll(/GARANT[ÍI]A/gi)];
console.log('Occurrences of GARANTIA:', matches.length);
matches.forEach((m, i) => {
  const start = Math.max(0, m.index - 100);
  const end = Math.min(html.length, m.index + 200);
  console.log(`\n--- Match ${i+1} ---`);
  console.log(html.substring(start, end).replace(/\s+/g, ' '));
});
