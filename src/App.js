import React from 'react'
import Topbar from './components/navbar/Topbar'
import Photo from './components/slider/Photo'
import Bottom from './components/footer/Bottom'
import Card from './components/card/Card'
import Form from './components/form/Form'
import Formtwo from './components/formnext/Formtwo'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Photo/>
      <Form/>
      <Card/>
      <Formtwo/>
      <Bottom/>
    </div>
  )
}

export default App
