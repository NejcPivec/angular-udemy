const myName: string = "Nejc";

const ten: number = 10;

const add = (a: number, b: number): number => {
  return a + b;
};

interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}

const post: Post = {
  title: "Latest typescript news",
  daysOld: 10,
  published: true,
};

class Car {
  color: string;
  year: number;

  drive() {
    console.log("Vroom");
  }
}

const myCar = new Car();
myCar.drive();
