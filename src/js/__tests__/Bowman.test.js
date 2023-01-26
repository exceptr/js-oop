import Bowman from '../Bowman';

test('Создание экземпляра класса Bowman', () => {
  const expectedResult = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('test')).toEqual(expectedResult);
});

test('Повышение уровня персонажа', () => {
  const expectedResult = {
    health: 100,
    level: 2,
    name: 'test',
    type: 'Bowman',
    attack: 30,
    defence: 30,
  };
  const answer = new Bowman('test');
  answer.levelUp();
  expect(answer).toEqual(expectedResult);
});

test('Нанесение урона персонажа', () => {
  const expectedResult = {
    health: 92.5,
    level: 1,
    name: 'test',
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  const answer = new Bowman('test');
  answer.damage(10);
  expect(answer).toEqual(expectedResult);
});

test('Проверка исключения, нанесение урона мертвому персонажу', () => {
  expect(() => {
    const answer = new Bowman('test');
    answer.health = 0;
    answer.damage(10);
  }).toThrowError();
});
