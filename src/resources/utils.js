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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getRepoCommits(user, repo){
  fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
    .then(res => {
      let d = new Date(res[0].commit.author.date);
      let month = months[d.getMonth()];
      let day = d.getDate();
      let year = d.getFullYear();
      let dStr = `${month} ${day}, ${year}`;
      return document.getElementById('lastUpdated').innerHTML += dStr;
    })
}

export {drawCode, getRepoCommits};