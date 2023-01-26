export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.defaultLength(name);
    this.defaultType(type);
  }

  defaultLength(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Допустимая длина имени от 2 до 10');
    }
  }

  defaultType(type) {
    if (Character.types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип персонажа введён не праильно, либо его не существует');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Невозможно повысить уровень мёртвого персонажа');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Вы мертвы');
    }
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
