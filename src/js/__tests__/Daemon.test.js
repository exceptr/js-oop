import Daemon from '../Daemon';

test('Создание экземпляра класса Daemon', () => {
  const expectedResult = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  const answer = new Daemon('test');
  expect(answer).toEqual(expectedResult);
});
