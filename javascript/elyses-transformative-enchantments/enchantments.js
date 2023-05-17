// @ts-nocheck

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => {
    return card * 2
  })
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((array, card) => {
    array.push(card)
    if (card === 3) {
      array.push(card, card)
    } 
    return array
  }, [])
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(4, -4)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

// const deck = [3, 6, 1, 7, 2, 8];
// const expected = [6, 1, 8, 3, 7, 2];

// export function sandwichTrick(deck) {
//   let last = deck.pop()
//   let first = deck.shift()

// The length of the deck is altered here from 6 to 4
// So when deck.splice is used the deck.length is getting the right spot in insert last & first
// This is because last already contains the value of the last index (8)
// And First the value of (3)

//   deck.splice(deck.length/2 , 0, last, first)
//   return deck
// }


export function sandwichTrick(deck) {
  deck.splice(deck.length/2 - 1, 0, deck.pop(), deck.shift());

// -1 needs to be used here because the original array is not modified yet
// So when the middle is determined if the above method is used (length/2) we get index 3
// But when pop(), then shift() modify the array and then splice inserts them
// They will be inserted at index 3 (2) which is no longer the middle of the modified array ( [6, 1, 7, 2] )

  return deck;
}
/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  throw new Error('Implement the twoIsSpecial function');
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  throw new Error('Implement the perfectlyOrdered function');
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  throw new Error('Implement the reorder function');
}
