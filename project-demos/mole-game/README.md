## 总结

1. 该游戏的核心在于 设置一个数组，存储各个 mole 的状态 设置时间间隔 Date.now() + timeInterval
2. requestAnimationFrame 控制页面状态变更,通过各个 next 时间点来控制是否更新 mole 的状态

```js

const nextFrame = () => {
  const now = Date.now();
  for (let i = 0; i < moles.length; i++) {
    if ( now > moles[i].next) {
      getNextStatus(moles[i]);
    }
  }
  requestAnimationFrame(nextFrame);
};

requestAnimationFrame(nextFrame);
```