function bunny(name, age) {
	this.name = name;
	this.age = age;
	this.type = "bunny";
	this.image = "bunny.jpg"
}

function quokka(name, age) {
	this.name = name;
	this.age = age;
	this.type = "quokka";
	this.image = "quokka.jpg"
}

function puffin(name, age) {
	this.name = name;
	this.age = age;
	this.type = "puffin";
	this.image = "puffin.jpeg"
}


var animals = [new puffin(), new quokka(), new bunny()];

var names = ["puff", "quok", "bun", "random", "hello", "sup", "woo"];

function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	var randomIndex = generateRandomIndex(names.length);
	return names[randomIndex];
}

function generateRandomAge() {
	var randomIndex = generateRandomIndex(5);
	return randomIndex;
}

function generateRandomAnimal() {
	var randomIdx = generateRandomIndex(animals.length);
	var randomAnimal = animals[randomIdx];
	if (randomAnimal instanceof bunny) {
		return new bunny(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceof quokka) {
		return new quokka(generateRandomName(), generateRandomAge());
	}
	if (randomAnimal instanceof puffin) {
		return new puffin(generateRandomName(), generateRandomAge());
	}

}