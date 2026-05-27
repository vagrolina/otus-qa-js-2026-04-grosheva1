function kolobok (name) {
    switch (name) {
        case 'дедушка':
            return 'Я от дедушки ушел';
        case 'заяц':
            return 'Я от зайца ушел';
        case 'лиса':
            return 'Меня съели';
        default:
      return 'Я вас не знаю, но от вас я тоже уйду!';

    }
}

console.log(kolobok('дедушка'));
console.log(kolobok('лиса'));
console.log(kolobok('заяц'));

function newYear (name) {
    return `${name}! ${name}! ${name}!`
}

console.log(newYear('Дед Мороз'));
console.log(newYear('Снегурочка'));