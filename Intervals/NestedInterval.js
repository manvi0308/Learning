let timerId = setTimeout(function tick()  {
    console.log('Tick tick...');
    timerId = setTimeout(tick,1000);
}, 2000);