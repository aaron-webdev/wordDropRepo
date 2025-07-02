# Aaron Clure
# aaronclure.webdev@gmail.com



## Word Drop (Hangman)

## Description
- app will pick a word from the word bank and create blanks for each letter in the word
- user guesses are tracked and shown on screen to avoid repeating incorrect guesses
- if the stick figure is completed before the puzzle is solved, the users loses


## How it works
- Selecting the puzzle word
    - random number generator selects word by array index
    - new puzzle button starts the first game as well as can be used to quit a puzzle for a new one

- Preventing repeats
    - store previously generated numbers
    - if the same number is chosen twice, increment the generated number by one

- Displaying the blank spaces
    - turn the string into an array
    - array.length + 1 = number of blank spaces to display

- Handle user guess for letters
    - small text input for single letters (max length set to 1)
    - a loop through the puzzle word array will check if the letter guessed appears in the array
    - if the loop finds a match, the corresponding blank space will be updated to display the letter (this is why the puzzle word is mapped to an array)
    - if there is no match found, a counter will be incremented, the input will be added to the incorrect guesses array to be tracked and displayed, and the next shape of the stick figure will be drawn

- Handle user guess for the solve
    - use a modal to receive user input
    - the users guess to solve will be compared with the original string puzzle word for a match
    - users can only make 3 guesses to solve, upon the third incorrect guess to solve the users loses the game

- Tracking Guesses to solve
    - when the user clicks the "Solve the Puzzle!" button a counter will be incremented
    - on the third attempt if the guess in not a match the user will lose the game

- Drawing the figure upon incorrect guesses
    - stick figure parts are individual images
    - the images start with their styles set to hidden
    - the incorrect guess counter will be used to reveal the sprites in correct order

- Track and display incorrect guesses to prevent repeat incorrect guesses
    - user guesses will be added to an array
    - this array will be used to display the previously guessed incorrect letters to aid the user's next guesses
    - if the user repeats a guess there will be an alert notifying them of the repetition




    
### Future Improvements
#### "Shuffle" Button
- use a different RNG to pick the word
    - seed with the system time

#### Buttons as Input letters (options disappear as you guess like 'Guess Who')
- users will be able to click button on the screen to guess letters
- guessed letters would be shown with a strikethrough and/ or lowered opacity
- incorrect guesses could be shown in red with a lower opacity