import {useState} from 'react'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElement from './utils/randomElement'
import randomNumber from './utils/randomNumber'

const arrbackgrounds: number[] = [1, 2, 3, 4]

function App() {
  const initialPhrase = randomElement(phrases)
  const initialbg = randomNumber(arrbackgrounds)

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
  const [pathRandom, setPathRandom] = useState(initialbg)

  const objStyle = {
    backgroundImage: `url('../images/fondo${pathRandom}.jpg')`,
  }

  return (
    <div
      style={objStyle}
      className='min-h-screen bg-cover bg-center flex flex-col items-center justify-center gap-6 p-4'
    >
      <h1 className='absolute top-14 text-3xl text-white font-bold drop-shadow-xl p-4'>
        Galleta de la fortuna
      </h1>
      <PhrasesCard phraseRandom={phraseRandom} />
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setPathRandom={setPathRandom}
        pathRandom={pathRandom}
        arrbackgrounds={arrbackgrounds}
      />
    </div>
  )
}

export default App
