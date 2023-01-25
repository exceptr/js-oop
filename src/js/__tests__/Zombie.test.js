import Zombie from '../Zombie';

test('Zombie', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  const answer = new Zombie('test');
  expect(result).toEqual(answer);
});
