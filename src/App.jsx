import { useState } from 'react'
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

import './App.css'

function App() {
  const entryComponents = data.map((entry) => {
    return (
      <Entry
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