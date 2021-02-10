function main() {
  let currentPlayer = 'X'
  let moveCounter = 0
  const allSquares = document.querySelectorAll('li')

  function handleClickSquare(event) {
    const thingClickedOn = event.target

    // If we already are marked as taken
    if (thingClickedOn.classList.contains('taken')) {
      //  Log a message to anyone looking
      console.log('Nopes....')

      // Get out of here, no more code to run this time
      return
    }

    if (event.target.nodeName !== 'LI') {
      console.log('We did not click on an LI')
      return
    }

    thingClickedOn.textContent = currentPlayer
    thingClickedOn.classList.add('taken')

    moveCounter++

    // Get the header to query for the first `h1`
    const header = document.querySelector('h1')
    // Interpolate a string with the header and the count of moves
    // and replace the text content of our header!
    header.textContent = `Move ${moveCounter} of Tic Tac Toe`

    // If currentPlayer is precisely the text 'X'
    if (currentPlayer === 'X') {
      // make the currentPlayer 'O'
      currentPlayer = 'O'
    } else {
      // Otherwise it was already 'O', so make it an 'X'
      currentPlayer = 'X'
    }
  }

  // allSquares.forEach(square =>
  //   square.addEventListener('click', handleClickSquare)
  // )

  const gameBoard = document.querySelector('ul')
  gameBoard.addEventListener('click', handleClickSquare)
}

document.addEventListener('DOMContentLoaded', main)
