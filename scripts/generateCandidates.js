
const { faker } = require('@faker-js/faker');
const fs = require('fs');

const TOTAL_CANDIDATES = 40;

const skillsPool = [
  'Lean Manufacturing',
  'Safety Compliance',
  'Team Leadership',
  'Sustainability',
  'Process Optimization',
  'Crisis Management'
];

const candidates = [];

for (let i = 1; i <= TOTAL_CANDIDATES; i++) {
  const skills = faker.helpers.arrayElements(skillsPool, 3).join(', ');

  candidates.push({
    id: i,
    name: faker.person.fullName(),
    experience_years: faker.number.int({ min: 2, max: 15 }),
    skills: skills,
    previous_role: faker.person.jobTitle()
  });
}

// Ensure output folders exist
fs.mkdirSync('/RMSS/src/components', { recursive: true });
fs.mkdirSync('sql', { recursive: true });

// Write JSON for frontend
fs.writeFileSync(
  './RMSS/src/components/candidates.json',
  JSON.stringify(candidates, null, 2)
);

// Write SQL for database
const sqlRows = candidates.map(c =>
  `(${c.id}, '${c.name.replace(/'/g, "''")}', ${c.experience_years}, '${c.skills}', '${c.previous_role.replace(/'/g, "''")}')`
).join(',\n');

const sqlOutput = `
INSERT INTO candidates (id, name, experience_years, skills, previous_role)
VALUES
${sqlRows};
`;

fs.writeFileSync('sql/sample_data.sql', sqlOutput.trim());

console.log(`✅ Successfully generated ${TOTAL_CANDIDATES} fake candidates`);
