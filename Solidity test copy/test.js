class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

describe('Car Class', () => {
  it('can park test', () => {
    const car = new Car();
    assert.equal(car.park(), 'stopped');
  });

  it('can drive test', () => {
    const car = new Car();
    assert.equal(car.drive(), 'vroom');
  });
});
