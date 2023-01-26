import Magician from '../Magician';

test('Создание экземпляра класса Magician', () => {
  const expectedResult = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  const answer = new Magician('test');
  expect(answer).toEqual(expectedResult);
});
