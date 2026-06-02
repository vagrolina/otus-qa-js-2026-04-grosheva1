/**
 * Вычисляет сумму всех баллов в объекте успеваемости.
 *
 * @param {Object.<string, number>} scores - Объект, где ключ — имя пользователя, а значение — количество баллов.
 * @returns {number} Сумма всех баллов.
 */

function getScore(scores) {
  let total = 0;

  for (const name in scores) {
    total += scores[name];
  }

  return total;
}

// Пример
const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};

console.log(getScore(scores)); // 16
