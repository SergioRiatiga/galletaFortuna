import getRandomElementFromArray from "../utils/getRandomElementFromArray"
import phrases from '../utils/phrases.json'

const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {
	
	const handleRandomPhrase = () => {
		const newRandomPhrase = getRandomElementFromArray(phrases)
		setPhraseRandom(newRandomPhrase)
		const newPath = getRandomElementFromArray(arrBackground)
		setPathRandom(newPath)
	}
	
  return (
    <button onClick={handleRandomPhrase}>Ver otro</button>
  )
}

export default ButtonPhrase