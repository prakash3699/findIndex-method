const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

let res=employees.find(function(val){
	return val.name.indexOf('John')>=0;
});
console.log(res);

let res1=employees.findIndex(function(val1){
	return val1.name.indexOf('John')>=0;
});
console.log(res1);

