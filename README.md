<!-- @format -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

`
/\*_ @format _/

import { useState } from 'react'
import { Spreadsheet } from 'react-spreadsheet' // Or your chosen spreadsheet component
import \* as XLSX from 'xlsx'
import ExcelUploader from './ExcelUploader' // Assuming the component above is in ExcelUploader.js

function App() {
const [spreadsheetData, setSpreadsheetData] = useState([])

const handleFileLoaded = (file) => {
const reader = new FileReader()

    reader.onload = (e) => {
      const binaryString = e.target.result
      const workbook = XLSX.read(binaryString, { type: 'binary' })

      // Assuming you want the first sheet
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]

      // Convert sheet data to JSON array
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
      setSpreadsheetData(data)
    }

    reader.readAsBinaryString(file)

}

// Prepare data for react-spreadsheet (it expects an array of arrays of objects with 'value' property)
const formattedData = spreadsheetData.map((row) =>
row.map((cell) => ({ value: cell }))
)

return (
<div>
<h1>Load Excel to Spreadsheet</h1>
<ExcelUploader onFileLoaded={handleFileLoaded} />
{formattedData.length > 0 && <Spreadsheet data={formattedData} />}
</div>
)
}

export default App

`

`
/\*_ @format _/

import Spreadsheet from 'react-spreadsheet'

const App = () => {
const data = [
[{ value: 'Vanilla' }, { value: 'Chocolate' }],
[{ value: 'Strawberry' }, { value: 'Cookies' }]
]
return <Spreadsheet data={data} />
}

export default App

`

`
import React, { useRef } from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet'; // Example component

const App = () => {
const spreadsheetRef = useRef(null);

const handleFileChange = (event) => {
const file = event.target.files[0];
if (file && spreadsheetRef.current) {
spreadsheetRef.current.open({ file: file }); // Or a similar import method
}
};

return (
<div>
<input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
<SpreadsheetComponent ref={spreadsheetRef} />
</div>
);
};

export default App;
`
