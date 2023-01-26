import Undead from '../Undead';

test('Создание экземпляра класса Undead', () => {
  const expectedResult = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  const answer = new Undead('test');
  expect(answer).toEqual(expectedResult);
});
