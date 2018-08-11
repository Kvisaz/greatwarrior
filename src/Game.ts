module MyGame {

	export class Game extends Phaser.Game {

		constructor() {

			super(800, 600, Phaser.AUTO, 'content', null);

			this.state.add('Boot', Boot, false); // настройка игры и загрузка ассетов для прелоадера
			this.state.add('Preloader', Preloader, false); // основной экран с прогрессбаром для загрузки
			this.state.add('MainMenu', MainMenu, false);
			this.state.add('Level1', Level1, false);

			this.state.start('Boot');
		}

	}

}