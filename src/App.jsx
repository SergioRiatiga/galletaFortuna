import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import getRandomElementFromArray from './utils/getRandomElementFromArray'

const arrBackground = [1, 2, 3, 4]

function App() {

  const initialValue = getRandomElementFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialPath = getRandomElementFromArray(arrBackground)
  const [pathRandom, setPathRandom] = useState(initialPath)

  const objStyle = {
    backgroundImage: `url('images/fondo${pathRandom}.jpg')`
  }

  return (
    <div style={objStyle} className='app'>
      
      <h1>GALLETA DE LA FORTUNA</h1>
      <div className='content'>
      <PhrasesCard phraseRandom={phraseRandom}/>
      <img  className='quotes' src="../public/images/quote-alt-right-solid-24.png" alt="comillas" />
      </div>
      <ButtonPhrase 
      setPhraseRandom={setPhraseRandom} 
      setPathRandom={setPathRandom} 
      arrBackground={arrBackground}
      />
      <p className='contactInfo'>Sergio Andrés Riatiga Ibáñez, sergioriatiga@gmail.com, <a href="https://github.com/SergioRiatiga" target="_blank">github.</a></p>
    </div>

  )
}

export default App