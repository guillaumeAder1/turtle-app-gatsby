export const toMap = arr => {
  const map = {};
  for (var i in arr) {
    const str = `${arr[i].x}_${arr[i].y}`;
    map[str] = 1;
  }
  return map;
};
export const calculatePos = (turtle, dir) => {
  const { x, y } = turtle;
  let newPos;
  if (dir === 0) {
    newPos = { x, y: y - 1 };
  } else if (dir === 90) {
    newPos = { x: x + 1, y };
  } else if (dir === 180) {
    newPos = { x, y: y + 1 };
  } else if (dir === 270) {
    newPos = { x: x - 1, y };
  }
  return newPos;
};
export const outOfBound = ({ x, y }, { h, w }) => {
  const wValid = x > 0 && x <= w;
  const hValid = y > 0 && y <= h;
  return !wValid || !hValid;
};

export const collision = (posStr, map) => {
  return !!map[posStr];
};

export const randomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createRandomNumber = () => {
  const str = new Array(26)
    .fill(null)
    .map((e, i) => String.fromCharCode(65 + i));
  // number of pairs
  const maxPair = randomRange(5, 10);
  // get random letters and create array
  let randomLetters = [];
  let max = 25;
  for (var i = 1; i < maxPair; i++) {
    const index = randomRange(0, max);
    randomLetters.push(str[index]);
    str.splice(index, 1);
    max--;
  }
  // duplicate array to have twice each letter
  randomLetters = randomLetters.concat(randomLetters);
  // shuffle array
  randomLetters.sort(() => Math.random() - 0.5);
  const obj = {};
  for (var i = 1; i < randomLetters.length; i++) {
    obj[i] = randomLetters[i];
  }
  return obj;
};
