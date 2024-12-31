import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

import './App.css'

function App() {
  // Creates an array of Entry components based on mapping over the data in data.js
  const entryComponents = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        id={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
    })

  return (
    <>
      <Header />
      {entryComponents}
    </>
  )
}

export default App