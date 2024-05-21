interface RandomElement {
  phrase: string
  author: string
}

const randomElement = (arr: RandomElement[]): RandomElement => {
  const index: number = Math.floor(Math.random() * arr.length)
  return arr[index]
}

export default randomElement
