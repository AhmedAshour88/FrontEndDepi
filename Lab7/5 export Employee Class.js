export class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    showDetails() {
        return `${this.name} works as a ${this.position}.`;
    }
}
