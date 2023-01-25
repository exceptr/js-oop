import Undead from '../Undead';

test('Undead', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  const answer = new Undead('test');
  expect(result).toEqual(answer);
});
