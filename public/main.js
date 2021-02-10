function main() {
  const allSquares = document.querySelectorAll('li')

  function handleClickSquare(event) {
    const thingClickedOn = event.target

    thingClickedOn.textContent = 'X'
  }

  allSquares.forEach(square =>
    square.addEventListener('click', handleClickSquare)
  )
}

document.addEventListener('DOMContentLoaded', main)
