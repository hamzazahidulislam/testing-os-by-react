/** @format */

function ExcelUploader({ onFileLoaded }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      onFileLoaded(file)
    }
  }

  return <input type='file' accept='.xlsx, .xls' onChange={handleFileChange} />
}

export default ExcelUploader
