function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.compareScores = function (s1, s2) {
    return s1.testScore - s2.testScore;
};

const student1 = new Student("Mike", 16, "10th");
const student2 = new Student("Emma", 17, "11th");

student1.testScore = 75;
student2.testScore = 88;

console.log(student1.introduce());
console.log(student2.introduce());
console.log("Student score comparison:", Student.compareScores(student1, student2));
