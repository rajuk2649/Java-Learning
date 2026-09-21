const voters =[
    {'name': 'Anup Kumar Pradhan',age : 30},
    {'name': 'Shamal Kumar Nag',age : 16},
    {'name': 'Shaikh Rabiul',age : 26},
]

const Eligiblevoters = voters.filter(voter => voter.age > 18);

console.log("Eligble Voters");
console.log("================");

Eligiblevoters.forEach(elvoters  => {
    console.log(`Name: ${elvoters.name} || age :${elvoters.age} \n`);
});

console.log("Non ELE Voters");
console.log("==============");

voters.filter(voter => voter.age < 18).forEach(voter =>{
     console.log(`Name: ${voter.name} || age :${voter.age} \n`);
});