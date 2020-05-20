# redpacket-rain

A redpacket rain component based on typescript and vanilla js.

## Installing

Using npm:

``` bash
$ npm install @autots/redpacket -S
```

**Note:** cdn is not supported at now, maybe you can deliver the file `dist/redpacket.min.js` to your own cdn server.

## Example
### 1. Used in modular manner

``` js
import RedPacket from '@autots/redpacket';

const redPacket = new RedPacket({
  imgUrl: '//s.autoimg.cn/www/site/livechannel/images/',
  container: 'test',
  countdownTime: 3,
  remainTime: 30,
  rainType: [
    { score: 1, speed: 1, ratio: 7 },
    { score: 2, speed: 1, ratio: 2 },
    { score: 10, speed: 1, useless: 70, ratio: 1 }
  ],
  onDurationCallBack(time, count) {
    console.log(time, count);
  },
  onStartCallBack() {
    console.log('game start');
  },
  onEndedCallBack(count) {
    console.log(`game over! your score: ${count}`);
  }
})
```

### Used in browser plugin

``` html
<script src="dist/redpacket.min.js"></script>

<script>
  const redPacket = new AutoTs.RedPacket(...); // same above
</script>
```

> There is a global variable `AutoTs`, and `RedPacket` property is the constructor.


## API

``` js
const redPacket = new RedPacket(config);
```
| Name | Type | Default | Optional | Description |
|:----------:|:-----------------------------:|:-----------:|:----:|:--------------------------|
| imgUrl                 | string | --               | NO  | base URL of images  |
| container        | string | --             | NO | id of the canvas element |
| countdownTime  | number | 0 | YES | count down from ( <= 5 ) |
| remainTime  | number | 30  | YES | game duration time |
| rainType  | ({ score: number, speed: number, useless?: number, ratio: number })[] | -- | NO | type of rain <br> 1. if pic has useless content which like glowing shadow, make sure four sides distance equal <br> 2. ratio sum of all type must equal 10 |
| onDurationCallBack      | Function                       | --               | YES | callback during game remaining countdown <br> ( time, count ) |
| onStartCallBack     | Function                       | --               | YES | callback when game start |
| onEndedCallBack   | Function                       | --               | YES | callback when game over <br>( score ) |


you can stop during the game by using:
``` js
redPacket.close();
```

## Rules
config.imgUrl is the base url of images. the names of images can not be changed, there are images you should prepare:
* raindrop${index + 1}.png  ( for (let index in config.rainType) ) 
* bingo.png  ( click effect like firework )
* meteor.png  ( decoration like meteor )
* countdown-bg.png
* countdown.png  ( vertical sprite of 5 4 3 2 1 go )
* count-bg.png  