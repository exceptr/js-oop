import Character from '../Character';

test('Instance creation Character', () => {
  const result = {
    health: 100, level: 1, name: 'test', type: 'Bowman',
  };
  const answer = new Character('test', 'Bowman');
  expect(result).toEqual(answer);
});

test('Throw the allowed length of the name is from 2 to 10', () => {
  expect(() => {
    const answer = new Character('t', 'Bowman');
  }).toThrow('The allowed length of the name is from 2 to 10');
});

test('type is not properly defined', () => {
  expect(() => {
    const answer = new Character('test', 'Bman');
  }).toThrow('type is not properly defined');
});

test("you can't level up the dead", () => {
  expect(() => {
    const answer = new Character('test', 'Bowman');
    answer.health = 0;
    answer.levelUp();
  }).toThrow("you can't level up the dead");
});
