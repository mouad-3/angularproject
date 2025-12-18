export class User {
    constructor(
        public userId: number,
        public firstName: string,
        public lastName: string,
        public age: number
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    toJSON() {
        return {
            userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
        };
    }
}