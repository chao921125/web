let div = document.createElement("div");
div.style.color = "#000";
div.style.backgroundColor = "#fff";
div.innerHTML += "[1,2,3,4,1,3] 4" + "<br/>";

  function sumIndexBasic(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}
div.innerHTML += "Basic: " + sumIndexBasic([1,2,3,4,1,3], 4) + "<br/>";

function sumIndex(array, target) {
  let hm = new Map();
  for (let i = 0; i < array.length; i++) {
    let l = array[i];
    if (hm.has(target - l))
      return [hm.get(target - l), i];
    hm.set(l, i);
  }
}

div.innerHTML += "Up: " + sumIndex([1,2,3,4,1,3], 4) + "<br/>";
document.body.appendChild(div);
