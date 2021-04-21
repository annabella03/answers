function ensure(value) {
  if (value == undefined) return Error('Value is undefined!');
  return value;
}

const a = 1;
console.log(ensure(a));
const b = false;
console.log(ensure(b));
console.log(ensure());
