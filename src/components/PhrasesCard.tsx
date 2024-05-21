interface PhrasesCardProps {
  phraseRandom: {
    phrase: string
    author: string
  }
}

const PhrasesCard: React.FC<PhrasesCardProps> = ({phraseRandom}) => {
  console.log(phraseRandom)
  return (
    <p className='p-6 rounded-xl bg-white w-full max-w-96 drop-shadow-lg text-slate-500 text-lg mb-4'>
      {phraseRandom.phrase}
    </p>
  )
}

export default PhrasesCard
