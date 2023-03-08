export function frontDoorResponse(line) {
  return line[0]
}

export function frontDoorPassword(word) {
  const firstLetter = word[0]
  const lowerCaseWord = word.slice(1, word.length).toLowerCase()
  const capitalizedWord = firstLetter.toUpperCase() + lowerCaseWord

  return capitalizedWord
 
}

export function backDoorResponse(line) {
  const lineSinWhiteSpace = line.trim()
  return lineSinWhiteSpace[lineSinWhiteSpace.length - 1]
}

export function backDoorPassword(word) {
  const firstLetter = word[0]
  const lowerCaseWord = word.slice(1, word.length).toLowerCase()
  const politePassword = firstLetter.toUpperCase() + lowerCaseWord + ', please'

  return politePassword
}
