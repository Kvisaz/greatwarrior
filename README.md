# Маленькая игра с большой идеей
Взял за основу шаблон Phaser игры на Typescript. Тут все изменится.

В шаблоне используется Phaser CE с ts определениями.

Результат должен появляться в bin

## Структура
В Phaser все начинается с создания экземпляра Phaser.Game, в который мы заряжаем инстансы State (можно называть сценами). В State и прячется логика разных экранов, там можно посмотреть, что как работает.

## Prerequisites
* Typescript
* Phaser CE 2.10.1


## Building the Project
Simply clone or download the contents of this repository and from the root of the project, run `tsc --project .`. This will use the settings from the `tsconfig.json` file to build the project. The generated javascript bundle is located in the `bin` directory.
