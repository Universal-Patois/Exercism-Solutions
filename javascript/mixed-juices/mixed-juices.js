export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let limesNeeded = 0
  let wedges = wedgesNeeded
  let i = 0

  while (wedges > 0 && limes.length > 0) {

    switch(limes[i]) {
      case 'small':
        wedges -= 6;
        limes.shift();
        limesNeeded += 1;
        break;
      case 'medium':
        wedges -= 8;
        limes.shift();
        limesNeeded += 1;
        break;
      case 'large':
        wedges -= 10;
        limes.shift();
        limesNeeded += 1;
        break;     
    }
  }
  return limesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */


export function remainingOrders(timeLeft, orders) {
  let remainingTime = timeLeft;
  let i = 0;

  do {
    remainingTime -= timeToMixJuice(orders[i]);
    i++;
  }
  while (remainingTime > 0);
}
