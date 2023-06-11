//If you are not going to hve a return value

const hotelNames: string[] = ["monte crystal", "ebitari", "jubilee"];

function logHotels(hotel: string[]): void {
	for (let i = 0; i < hotel.length; i++) {
		console.log(hotel[i]);
	}
}

logHotels(hotelNames);
