export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (const bird of birdsPerDay) {
    total += bird;
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  for (let i = (week - 1) * 7; i <  week * 7; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

export function fixBirdCountLog(birdsPerDay) {
  
}
