import Zombie from '../Zombie';

test('Создание экземпляра класса Zombie', () => {
  const expectedResult = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  const answer = new Zombie('test');
  expect(answer).toEqual(expectedResult);
});
