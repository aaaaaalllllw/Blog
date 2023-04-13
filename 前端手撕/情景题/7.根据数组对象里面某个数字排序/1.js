const singers = [
	{ name: "Steven Tyler", band: "Aerosmith", born: 1948 },
	{ name: "Karen Carpenter", band: "The Carpenters", born: 1950 },
	{ name: "Kurt Cobain", band: "Nirvana", born: 1967 },
	{ name: "Stevie Nicks", band: "Fleetwood Mac", born: 1948 },
];

console.log(singers.sort((a, b) => a.born - b.born));
