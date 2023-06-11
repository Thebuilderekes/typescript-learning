//Enums uses PascalCase naming convention

const enum Color {
	Red,
	Green,
	Blue,
}

let selectedColor: Color = Color.Red;

const enum Sizes {
	Small = 1,
	Medium,
	Large,
}

let mySize: Sizes = Sizes.Medium;

console.log(mySize);
