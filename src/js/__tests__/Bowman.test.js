import Bowman from '../Bowman';

test('Bowman', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  const answer = new Bowman('test');
  expect(result).toEqual(answer);
});

test('levelUp', () => {
  const result = {
    health: 100,
    level: 2,
    name: 'test',
    type: 'Bowman',
    attack: 30,
    defence: 30,
  };
  const answer = new Bowman('test');
  answer.levelUp();
  expect(answer).toEqual(result);
});

test('damage', () => {
  const result = {
    health: 92.5,
    level: 1,
    name: 'test',
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  const answer = new Bowman('test');
  answer.damage(10);
  expect(answer).toEqual(result);
});

test('Throw you dead', () => {
  expect(() => {
    const answer = new Bowman('test');
    answer.health = 0;
    answer.damage(10);
  }).toThrow('You dead');
});
