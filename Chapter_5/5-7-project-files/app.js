class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}



class Customer extends Person {
  constructor(firstName, lastName, phone, memebership) {
    super(firstName, lastName);

    this.phone = phone;
    this.memebership = memebership;
  }

  static getMemebershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMemebershipCost());
