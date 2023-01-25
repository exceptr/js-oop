import Swordsman from '../Swordsman';

test('Swordsman', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  const answer = new Swordsman('test');
  expect(result).toEqual(answer);
});
