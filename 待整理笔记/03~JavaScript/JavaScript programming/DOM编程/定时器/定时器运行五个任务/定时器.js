// 每个主延迟间隔的 5 个消息组。
// 从前 5 个消息的延迟 100ms 开始，接下来的 5 个消息延迟 200ms，然后是 300ms，依此类推
let lastIntervalId,
  counter = 5;
const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ', delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }
  counter += 1;
};
greeting(100);
