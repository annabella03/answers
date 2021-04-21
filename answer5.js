function calcAngle(hour, mins) {
  const hourAngle = hour * 30;
  const minsAngle = mins * 6;

  return Math.max(hourAngle, minsAngle) - Math.min(hourAngle, minsAngle);
}

console.log(calcAngle(3, 15));
