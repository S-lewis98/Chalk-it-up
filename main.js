import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { Console } from 'console';
const log = console.log;



log("The sun was setting on the horizon, casting") ;
log(chalk.yellow(" a golden glow across the sky."));
log(chalkAnimation.neon("As the light faded, the stars began to twinkle and shimmer in the darkening blue expanse above."));
log(chalk.blue("darkening blue expanse above."));
log("In the distance, a lone figure stood atop a hill, gazing out at the breathtaking vista.");
log("The figure was a young woman,");
log(chalk.red( "with long, flowing hair the color of a field of wildflowers."));
log(chalk.bgBlack("She wore a dress of pure white, which billowed and fluttered in the evening breeze. "));
log(chalkAnimation.rainbow(" In her hand, she held a delicate crystal ball, which glowed with a rainbow of colors."));
log(chalkAnimation.rainbow("As she gazed into the ball, the young woman could see all the colors of the world swirling and swirling within it."));
log(chalk.green("She could see the vibrant greens of the forests,"));
log(chalk.blue( "the deep blues of the oceans,"));
log(chalk.red("and the fiery reds of the volcanoes.")); 
log("She could see the many hues of the people who lived on the earth");
log(chalk.hex("#E0E7EE")("- the pale skin of the snow-dwellers,"));
 log(chalk.hex("#bf9000")("the golden skin of the desert-dwellers,"));
 log(chalk.hex("#5b4e4e")(" and the dark skin of the rainforest-dwellers."));
log(chalkAnimation.glitch(" But as she gazed into the ball, the young woman saw something else as well. She saw a darkness, a shadow, that was distorting the world. She saw a force of evil that threatened to extinguish all the colors and all the beauty that existed."));
log("And so, the young woman made a decision. She would use the power of the crystal ball to fight against this darkness,"); log(chalkAnimation.rainbow("to preserve the colors and the beauty of the world.")); log("She would travel the earth, from one end to the other, gathering allies and forming an army to stand against the shadow. And so, with a fierce determination, the young woman set off into the night, her crystal ball glowing brightly in her hand. She would not rest until the colors of the world were safe once more.");




// Compose multiple styles using the chainable API
//log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
//log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
//log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
//log(chalk.green(
	//'I am a green line ' +
	//chalk.blue.underline.bold('with a blue substring') +
	// that becomes green again!'
//));

// ES2015 template literal
//log(`
///CPU: ${chalk.red('90%')}
//RAM: ${chalk.green('40%')}
//DISK: ${chalk.yellow('70%')}
//`);

// Use RGB colors in terminal emulators that support it.
//log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
//log(chalk.hex('#DEADED').bold('Bold gray!'))