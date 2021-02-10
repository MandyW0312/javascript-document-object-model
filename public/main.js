function main() {
  let currentPlayer = 'X'
  const allSquares = document.querySelectorAll('li')

  function handleClickSquare(event) {
    const thingClickedOn = event.target

    thingClickedOn.textContent = currentPlayer

    // If currentPlayer is precisely the text 'X'
    if (currentPlayer === 'X') {
      // make the currentPlayer 'O'
      currentPlayer = 'O'
    } else {
      // Otherwise it was already 'O', so make it an 'X'
      currentPlayer = 'X'
    }
  }

  allSquares.forEach(square =>
    square.addEventListener('click', handleClickSquare)
  )
}

document.addEventListener('DOMContentLoaded', main)
