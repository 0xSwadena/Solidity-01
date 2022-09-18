class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car; //need to define the var first, can't use const cause the value is not constant//

beforeEach (() => {
  car = new Car();
});

describe('Car Class', () => {
  it('can park test', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('can drive test', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
