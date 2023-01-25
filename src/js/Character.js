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
      throw new Error('The allowed length of the name is from 2 to 10');
    }
  }

  defaultType(type) {
    if (Character.types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('type is not properly defined');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("you can't level up the dead");
    }
    this.level++;
    this.attack = (this.attack * 20 / 100) + this.attack;
    this.defence = (this.defence * 20 / 100) + this.defence;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('You dead');
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
