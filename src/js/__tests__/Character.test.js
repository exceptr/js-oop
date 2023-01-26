import Character from '../Character';

test('Создание экземпляра класса Character', () => {
  const expectedResult = {
    health: 100, level: 1, name: 'test', type: 'Bowman',
  };
  const answer = new Character('test', 'Bowman');
  expect(answer).toEqual(expectedResult);
});

test('Проверка исключения "Допустимая длина имени от 2 до 10"', () => {
  expect(() => new Character('t', 'Bowman')).toThrowError();
});

test('Проверка исключения "Тип персонажа введён не праильно, либо его не существует"', () => {
  expect(() => new Character('test', 'Bman')).toThrowError();
});

test('Проверка исключения повышения уровня мертвого персонада', () => {
  expect(() => {
    const answer = new Character('test', 'Bowman');
    answer.health = 0;
    answer.levelUp();
  }).toThrowError();
});
