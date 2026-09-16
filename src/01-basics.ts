import {Friend, Colleague, ColleagueHistory } from './myTypes'

// interface Friend {
 //   name: string;
 //   phone: string;
  //  age: number
//}

const friend1 = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25
};

const friend2 = {
    name: "Jane Costello",
    phone: "086-12345",
    age: 31,
};

export const friends = [friend1, friend2];
// console.log(friends);

const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@comapny.com",
        extension: 121,
    },
};

// interface Colleague {
   // name: string;
   // department: string;
   // contact: {
   //     email: string;
   //     extension: number
  //  }
// }

const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@comapny.com",
        extension: 132,
    },
};

const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
        email: "dos@comapny.com",
        extension: 125,
    },
};

// interface ColleagueHistory {
   // current: Colleague[],
   // former: Colleague[]
// }

export const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};

// console.log(colleagues.current[0]);


