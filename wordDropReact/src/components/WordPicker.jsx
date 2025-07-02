import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Phase0 from './../assests/Phase0.drawio.png'
import Phase1 from './../assests/Phase1.drawio.png'
import Phase2 from './../assests/Phase2.drawio.png'
import Phase3 from './../assests/Phase3.drawio.png'
import Phase4 from './../assests/Phase4.drawio.png'
import Phase5 from './../assests/Phase5.drawio.png'
import Phase6 from './../assests/Phase6.drawio.png'
import Phase7 from './../assests/Phase7.drawio.png'
import './../components/wordPicker.css'






export default function WordPicker()
{
const wordBankMain = [

  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "watermelon",
  "apricot", "blackberry", "coconut", "durian", "gooseberry", "jackfruit", "kumquat", "lime", "lychee", "melon",
  "olive", "peach", "pear", "persimmon", "plum", "pomegranate", "rambutan", "soursop", "tamarind", "yuzu",
  "avocado", "blueberry", "cantaloupe", "dragonfruit", "guava", "loquat", "mandarin", "mulberry", "passionfruit", "pineapple",
  "artichoke", "asparagus", "broccoli", "cabbage", "carrot", "cauliflower", "celery", "corn", "cucumber", "eggplant",
  "fennel", "garlic", "ginger", "kale", "lettuce", "mushroom", "onion", "parsnip", "potato", "pumpkin",
  "radish", "spinach", "squash", "tomato", "turnip", "zucchini", "beet", "bokchoy", "brusselsprout", "chive",
  "collard", "endive", "leek", "okra", "shallot", "sweetpotato", "yam", "arugula", "butternut", "chayote",
  "daikon", "jicama", "kohlrabi", "rutabaga", "scallion", "snowpea", "watercress", "acorn", "bamboo", "cassava",
  "chair", "table", "desk", "sofa", "bookshelf", "lamp", "mirror", "rug", "cabinet", "bed",
  "pillow", "blanket", "curtain", "clock", "vase", "chandelier", "shelf", "dresser", "ottoman", "recliner",
  "computer", "keyboard", "monitor", "printer", "scanner", "router", "speaker", "headphone", "laptop", "tablet",
  "smartphone", "camera", "television", "radio", "projector", "console", "drone", "microphone", "webcam", "charger",
  "bicycle", "car", "truck", "motorcycle", "scooter", "train", "bus", "airplane", "helicopter", "subway",
  "tram", "ferry", "yacht", "kayak", "canoe", "skateboard", "rollerblade", "snowboard", "surfboard", "jetski",
  "guitar", "piano", "violin", "drums", "flute", "trumpet", "saxophone", "clarinet", "harp", "banjo",
  "accordion", "cello", "trombone", "ukulele", "mandolin", "harmonica", "bagpipe", "xylophone", "synthesizer", "tambourine",
  "dog", "cat", "bird", "fish", "rabbit", "hamster", "turtle", "snake", "lizard", "parrot",
  "horse", "cow", "sheep", "goat", "pig", "chicken", "duck", "goose", "turkey", "deer",
  "elephant", "lion", "tiger", "bear", "wolf", "fox", "zebra", "giraffe", "rhino", "hippo",
  "monkey", "gorilla", "chimpanzee", "lemur", "kangaroo", "koala", "panda", "sloth", "cheetah", "leopard",
  "antelope", "buffalo", "camel", "llama", "alpaca", "ostrich", "emu", "peacock", "flamingo", "penguin",
  "dolphin", "whale", "shark", "jellyfish", "octopus", "squid", "crab", "lobster", "shrimp", "seahorse",
  "starfish", "coral", "anemone", "clam", "oyster", "mussel", "barnacle", "urchin", "sponge", "walrus",
  "seal", "otter", "manatee", "crocodile", "alligator", "python", "cobra", "rattlesnake", "viper", "gecko",
  "chameleon", "iguana", "skink", "toad", "frog", "salamander", "newt", "axolotl", "tadpole", "dragonfly",
  "butterfly", "moth", "bee", "wasp", "ant", "beetle", "ladybug", "firefly", "grasshopper", "cricket",
  "abacus", "anchor", "badge", "balloon", "barrel", "basket", "beacon", "binder", "blazer", "bottle",
  "bracelet", "bridge", "bucket", "bullet", "button", "candle", "canvas", "carpet", "cereal", "chain",
  "chalk", "compass", "crayon", "crown", "dagger", "diary", "dolphin", "emerald", "envelope", "eraser",
  "feather", "filter", "flag", "flannel", "folder", "fountain", "fridge", "gadget", "glasses", "glove",
  "hammer", "headset", "hook", "jacket", "jar", "jewel", "kettle", "key", "lantern", "ledger",
  "magnet", "marker", "mask", "medal", "mitten", "napkin", "needle", "notepad", "paddle", "paint",
  "paper", "pen", "pencil", "phone", "photo", "pillowcase", "pin", "plate", "plug", "poster",
  "purse", "quilt", "ribbon", "ring", "ruler", "saddle", "sandals", "scarf", "screw", "shirt",
  "shoe", "skirt", "sock", "spoon", "stamp", "sticker", "suitcase", "sunglasses", "sweater", "tape",
  "teacup", "thread", "ticket", "tie", "towel", "tray", "umbrella", "wallet", "watch", "zipper",
  "almond", "barley", "basil", "bean", "biscuit", "bread", "butter", "cake", "cheese", "chili",
  "cider", "cocoa", "coffee", "cookie", "cream", "donut", "gravy", "honey", "jam", "juice",
  "mint", "noodle", "nutmeg", "oatmeal", "pasta", "pepper", "pickle", "pizza", "pretzel", "rice",
  "salad", "salsa", "sauce", "soup", "spice", "sugar", "syrup", "toast", "vinegar", "waffle",
  "ant", "badger", "bat", "beaver", "buffalo", "camel", "cougar", "coyote", "crane", "crow",
  "deer", "eagle", "elk", "falcon", "ferret", "finch", "gazelle", "gopher", "hawk", "hyena",
  "ibex", "jackal", "jaguar", "kestrel", "lemur", "lynx", "mole", "moose", "mouse", "otter",
  "owl", "panther", "pelican", "porcupine", "raccoon", "raven", "skunk", "sparrow", "swan", "vulture",
  "weasel", "wombat", "woodpecker", "zebu", "albatross", "bison", "boar", "caribou", "dove", "emu",
  "heron", "meerkat", "oryx", "ostrich", "puma", "quail", "reindeer", "stork", "tapir", "toucan",
  "wallaby", "warthog", "wildebeest", "yak", "badminton", "baseball", "basketball", "bowling", "boxing",
  "cricket", "curling", "fencing", "golf", "hockey", "judo", "karate", "lacrosse", "rugby", "skiing",
  "soccer", "tennis", "volleyball", "wrestling", "archery", "chess", "darts", "polo", "rowing", "sailing",
  "squash", "swimming", "yoga", "anchor", "barometer", "beaker", "bunsen", "compass", "flask", "goggles",
  "microscope", "pipette", "telescope", "thermometer", "tongs", "tripod", "vial", "backpack", "briefcase", "clipboard",
  "highlighter", "laptop", "scanner", "stapler", "tablet", "typewriter", "wheelbarrow", "wrench", "armchair",
  "bench", "bunkbed", "couch", "futon", "hammock", "mattress", "rocker", "stool", "throne", "wardrobe"
];

const phaseImages = {
    Phase0,
    Phase1,
    Phase2,
    Phase3,
    Phase4,
    Phase5,
    Phase6,
    Phase7,
}

const [usedPuzzleWords, setUsedPuzzleWords] = useState([]);
const [puzzleWord, setPuzzleWord] = useState('inapplicable');
const [puzzleWordLetters, setPuzzleWordLetters] = useState([]);
const [puzzleDisplayArray, setPuzzleDisplayArray] = useState([]);
const [letterGuess, setLetterGuess] = useState('');
const [previousWrongLetters, setPreviousWrongLetters] = useState([]);
const [wrongGuessCount, setWrongGuessCount] = useState(0);
const [currentPhaseImage, setCurrentPhaseImage] = useState('Phase0');
let randomNumber = 0;



useEffect(() => {
    //split the puzzle word's letters into an array
        const newPuzzleWordLetters = puzzleWord.split('');
        setPuzzleWordLetters(newPuzzleWordLetters);
},[puzzleWord])

useEffect(() => {
    //reset the display array to blank spaces
        const resetDisplayArray = puzzleWordLetters.map(() => '_');
        setPuzzleDisplayArray(resetDisplayArray);
},[puzzleWordLetters])

useEffect(() => {
    //update the phase image as the wrong guess count changes
    setCurrentPhaseImage(`Phase${wrongGuessCount}`);
}, [wrongGuessCount])
    

function startNewPuzzle()
{
// reset states
    setPreviousWrongLetters([]);
    setWrongGuessCount(0);
    setLetterGuess('');
// select new word from the word bank
    let newRandomNumber = Math.floor((Math.random()*wordBankMain.length));
    randomNumber = newRandomNumber;
    let newPuzzleWord = wordBankMain[randomNumber];
    if(!usedPuzzleWords.includes(newPuzzleWord)) //ensure new puzzle word has not been used this session
    {
        setUsedPuzzleWords((prev) => [...prev, newPuzzleWord]);//add puzzle word to the used words list
        setPuzzleWord(newPuzzleWord);
    }
    else
    {
        if(usedPuzzleWords.length < wordBankMain.length) // avoid infinite recursive call
        {
          startNewPuzzle();  
        }
        else
        {
            alert('You have played with all of the words in my word bank.  Please refresh the page to start again.')
        }
        
    }
}

const handleLetterGuess = (() => {
    setLetterGuess(''); //clear the input field
    userLetterGuessInputField.focus();

    if(previousWrongLetters.includes(letterGuess)) //prevents user from being penalized for the same letter more than once
    {
        alert('You have already guess that letter.  Try a different one.');
        return;
    }

    if(wrongGuessCount == 7)
    {
        alert('Game Over')
        startNewPuzzle();
        return;
    }

    if(letterGuess.length==0)
    {
        alert('Type a letter, then click "Check guess"');
        return;
    }

    else if(puzzleWordLetters.includes(letterGuess.toLowerCase()))//strict boolean requires case matching
    {
        console.log('CORRECT');
        const newDisplayArray=[...puzzleDisplayArray]
        for(let j=0;j<puzzleWordLetters.length;j++)
        {
            if(letterGuess.toLowerCase()===puzzleWordLetters[j])
            {
                newDisplayArray[j] = puzzleWordLetters[j].toUpperCase(); // display as uppercase to increase readability
            }
        }
        setPuzzleDisplayArray(newDisplayArray);
    }

    else
    {
        console.log('INCORRECT');
        setWrongGuessCount((prev) => (prev + 1));
        setPreviousWrongLetters((prev) => [...prev, letterGuess]);
    }

})




    return(
        <>
        
            <Button className='m-2' onClick={startNewPuzzle}>New Puzzle</Button>
            <div className='d-flex' id='gameBoard'>
                <section className='mx-auto my-2'>
                    <div className='p-5 border border-3 mx-auto'>
                        <img
                            id='gamePhaseImage'
                            alt = 'game phase image'
                            src = {phaseImages[currentPhaseImage]}
                        />
                    </div>
                    <h4 className='m-5'>{puzzleDisplayArray.join(" ")}</h4>
                    <div className='m-auto p-auto w-25'>
                    <Form.Control
                        className='m-auto w-50 text-center'
                        id='userLetterGuessInputField'
                        value={letterGuess}
                        onChange = {(e) => setLetterGuess(e.target.value.toUpperCase())} // display letters in uppercase for readability
                        maxLength = "1"
                    />
                    <Button className='m-2' onClick={handleLetterGuess}>Check guess</Button>
                    
                    </div>
                    <h4>Wrong Letters: {previousWrongLetters.join(", ")}</h4>
                </section>    
            </div>



{/*   Displays variables on screen for development
<section id='devToolDisplay' className='border border-5 m-auto p-auto'>
<h3>Dev Display</h3>
<p>Random Number: {randomNumber}</p>
<p>Used Words: {usedPuzzleWords.join(", ")}</p>
<p>Puzzle Word: {puzzleWord}</p>
<p>Puzzle Word Letters: {puzzleWordLetters}</p>
<p>Display Array: {puzzleDisplayArray.join(" ")}</p>
<p>User's Letter Guess: {letterGuess}</p>
<p>Previous Wrong Letters: {previousWrongLetters.join(", ")}</p>
<p>Number of Wrong Guesses: {wrongGuessCount}</p>
<p>Phase Number: {currentPhaseImage}</p>               
</section>        
*/}
        </>
    )
}