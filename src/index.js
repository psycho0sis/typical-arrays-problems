
exports.min = function min(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  let minValue = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    }
  }
  return minValue;
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  let maxValue = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }
  return maxValue;
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  let avgValue = array[0]
  for (let i = 1; i < array.length; i++) {
    avgValue = avgValue + array[i]
  }
  avgValue = avgValue / array.length;

  return avgValue;
}
