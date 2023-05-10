let teams = [
  { code: 'DAL', name: 'Dallas Cowboys', plays: 'Arlington, TX' },
  { code: 'DEN', name: 'Denver Broncos', plays: 'Denver, CO' },
  { code: 'HOU', name: 'Houston Texans', plays: 'Houston, TX' },
  { code: 'KAN', name: 'Kansas City Chiefs', plays: 'Kansas City, MO' },
];

function playerDropDown() {
  const teamSelectorEl = document.getElementById('teamSelector');
  for (let i = 0; i < teams.length; i++) {
    let optionEl = document.createElement('option');
    const team = teams[i];
    optionEl.textContent = team.name;
    optionEl.value = team.code;
    teamSelectorEl.appendChild(optionEl);
  }
}

playerDropDown();
