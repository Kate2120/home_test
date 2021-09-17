const red = "Красный";
const yellow = "Желтый";
const green = "Зеленый";
let trafficLights = function (prev, current, limit) {
    console.log(current);
    if (prev == yellow && current == green && limit > 0) {
        return trafficLights ( green, yellow, limit -1);

    } else if (prev == yellow && current == red && limit > 0) {

        return trafficLights (red, yellow, limit -1);
    } else if (prev == red && current == yellow && limit > 0) {

        return trafficLights (yellow, green, limit -1);
    } else if(prev == green && current == yellow && limit > 0)
    {
        return trafficLights (yellow, red, limit -1);

    } else if (prev == red && current == green || prev == green && current == red ) {
        return console.log ("В светофоре так не бывает!");
    }
    else return console.log ("Светофор поломался или отключили электричество");
}
console.log (trafficLights ("Красный", "Желтый", 20)); // Функция работает при входе любых комбинаций цветов. Результатом функции является вывод цвета с текущего значения и продолжает последовательно выводеить цвета светофора (всего 20 шт, как указано в лимите), при не правильном вводе выдает ошибку.














