interface Point {
  x: number;
  y: number;
}

const AUTHOR = "Doman";

const p1: Point = {
  x: 5,
  y: 4,
};

const p2 = {
  x: 5,
  y: 3,
  z: 3,
};

const example2: Array<Point> = [];

example2.push(p1);
example2.push(p2);

example2.map((point) => point.x);

const exampleFunction = <T>(element: T) => element;

const test1 = exampleFunction("Doman");
