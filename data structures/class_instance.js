class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.absent = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.absent += 1;
    if (this.absent >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.absent} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);
