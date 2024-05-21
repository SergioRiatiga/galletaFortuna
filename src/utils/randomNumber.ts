const randomNumber = (arr: number[]): number => {
  const index: number = Math.floor(Math.random() * arr.length)
  return arr[index]
}

export default randomNumber
