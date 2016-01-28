import DS from 'ember-data';

export default DS.Model.extend({
  marca: DS.attr('string'),
  modelo: DS.attr('string'),
  peso: DS.attr('number'),
  precio: DS.attr('number'),
  descripcion: DS.attr('string'),
  fCaducidad:  DS.attr('string'),
  logo: DS.attr('string')
});

App.post.FIXTURES = [
	{
		marca: "Friskies", 
		modelo: "Perros enanos", 
		peso: 300, 
		precio: 60, 
		descripcion: "Friskies, para perros canijos", 
		fCaducidad: 1453999136
	},	
	{
		marca: "Firskies", 
		modelo: "Perros grandes", 
		peso: 600, 
		precio: 49.99, 
		descripcion: "Friskies, para perros de verdad", 
		fCaducidad: 1485535136
	},
	{
		marca: "McPerris", 
		modelo: "Plus", 
		peso: 1000, 
		precio: 35.99, 
		descripcion: "Para los más perros", 
		fCaducidad: 1456591136
	},
	{
		marca: "Doggie", 
		modelo: "Adulto", 
		peso: 100, 
		precio: 43.80, 
		descripcion: "Para perrear", 
		fCaducidad: 1454517536
	}
];
