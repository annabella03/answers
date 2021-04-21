function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj[`${prop}`];
    return true;
  }
  return false;
}

const obj = { a: 1, b: 2, c: 3 };

console.log(removeProperty(obj, 'b'));
console.log(removeProperty(obj, 'd'));
