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
      <header>
        <h1>GALLETA DE LA FORTUNA</h1>
      </header>
      <section className='content'>
        <div className='text'>
        <PhrasesCard phraseRandom={phraseRandom}/>
        <img  className='quotes' src="../public/images/quote-alt-right-solid-24.png" alt="comillas" />
        </div>
        <div>
        <ButtonPhrase 
        setPhraseRandom={setPhraseRandom} 
        setPathRandom={setPathRandom} 
        arrBackground={arrBackground}
        />
        </div>
      </section>

      <footer className='contactInfo'>
        <p>Sergio Andrés Riatiga Ibáñez, sergioriatiga@gmail.com, <a href="https://github.com/SergioRiatiga" target="_blank">github.</a></p>
      </footer>
      
      
    </div>

  )
}

export default App