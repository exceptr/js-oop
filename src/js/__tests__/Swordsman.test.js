import Swordsman from '../Swordsman';

test('Создание экземпляра класса Swordsman', () => {
  const expectedResult = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  const answer = new Swordsman('test');
  expect(answer).toEqual(expectedResult);
});
