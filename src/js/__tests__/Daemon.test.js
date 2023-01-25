import Daemon from '../Daemon';

test('Daemon', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'test',
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  const answer = new Daemon('test');
  expect(result).toEqual(answer);
});
