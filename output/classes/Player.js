export class Player {
    constructor(name, age, country, abc) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
