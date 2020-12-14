# Игра "Жизнь"

Задача решена в качестве задания для Яндекс.Дзен

## Требования к задаче

Дана доска размером M × N клеток. Клетка может находиться в одном из двух состояний: 1 — живая, 0 — мёртвая. Каждая клетка взаимодействует с восемью соседями. Правила таковы:

- Живая клетка, у которой меньше двух живых соседей, погибает.
- Живая клетка, у которой два или три живых соседа, выживает.
- Живая клетка, у которой больше трёх живых соседей, погибает.
- Мёртвая клетка, у которой три живых соседа, возрождается.

## Тестирование программы

Для тестирования программы необходимо клонировать репозиторий и перейти в директорию.  
После чего командой `node script.js` запустить скрипт.  
Далее пользователю будет предложено воспользоваться готовым стартовым состоянием доски или сгенерировать случайное. 

- Нажмите `1` для готового состояния
- Нажмите `2` для генерации случайного

Новое состояние доски будет генерироваться каждую секунду в соответствии с правилами игры

Чтобы завершить программу нажмите `Ctrl + C`

### Комментарии к программе

Размеры случайно сгенерированной доски можно изменять, меняя переменные N и M в файле script.js

Готовое состояние доски хранится в файле initialBoard.js в виде двумерного массива.