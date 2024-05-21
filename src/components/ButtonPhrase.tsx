import randomElement from '../utils/randomElement'
import phrase from '../utils/phrases.json'
import randomNumber from '../utils/randomNumber'

interface ButtonPhraseProops {
  setPhraseRandom: React.Dispatch<
    React.SetStateAction<{
      phrase: string
      author: string
    }>
  >
  setPathRandom: React.Dispatch<React.SetStateAction<number>>
  pathRandom: number
  arrbackgrounds: number[]
}

const ButtonPhrase: React.FC<ButtonPhraseProops> = ({
  setPhraseRandom,
  setPathRandom,
  pathRandom,
  arrbackgrounds,
}) => {
  const handleRandomPhrase = () => {
    const newPhrase = randomElement(phrase)
    let newPath = randomNumber(arrbackgrounds)
    while (newPath === pathRandom) {
      newPath = randomNumber(arrbackgrounds)
    }
    setPhraseRandom(newPhrase)
    setPathRandom(newPath)
  }

  return (
    <button
      className='bg-white bg-opacity-50 p-4 rounded-lg border-white border duration-200 active:scale-95 text-slate-600 font-medium'
      onClick={handleRandomPhrase}
    >
      Probar mi suerte
    </button>
  )
}

export default ButtonPhrase
