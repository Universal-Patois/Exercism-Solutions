//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  const letterValues = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  }

  let score = 0

  if (word) {
    word.toUpperCase().split('').forEach(letter => {
      Object.keys(letterValues).forEach(key => {
        if (letterValues[key].includes(letter)) {
          score += parseInt(key)
        }
      })
    })
  }

  return score
};

