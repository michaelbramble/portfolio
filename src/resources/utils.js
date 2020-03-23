function drawCode(){
  let c = document.getElementById('code').childNodes;

  c.forEach(delayLoop(addClass, 50));
}

function delayLoop(fn, delay){
  return (x, i) => {
    setTimeout(() => {
      fn(x);
    }, i * delay);
  };
}

function addClass(e){
  e.classList.add('typed');
}

export {drawCode};