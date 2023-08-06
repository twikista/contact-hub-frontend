export const transformFile = (file, setFile) => {
  console.log(file)
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    setFile(reader.result)
  }
}
