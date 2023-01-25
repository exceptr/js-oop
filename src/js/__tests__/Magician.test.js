import Magician from '../Magician';

test('Magician', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  const answer = new Magician('test');
  expect(result).toEqual(answer);
});
