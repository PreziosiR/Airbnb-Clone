import * as React from 'react'
import Navbar from '../components/navbar'
import { container } from '../global.css'

const IndexPage = () => {
  return (
    <main>
    <title>Airbnb clone</title>
    <div className={container}>
      <Navbar></Navbar>
    </div>
    </main>
  )
 
}

export default IndexPage