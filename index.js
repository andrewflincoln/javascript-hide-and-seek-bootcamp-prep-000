
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lists.length; i++) {
    lists[i] = lists[i] + n
  }
}
