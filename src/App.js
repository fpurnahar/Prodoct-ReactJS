import React, { Component } from 'react'
import TabelComponent from './components/TabelComponent'
import './App.css'
import {data} from './data.js'

export default class App extends Component {
render() {
  
    return (
      <div className="col-12">
        {/* {console.log(data)} */}
        <TabelComponent location={data.location} proformaInfoId={data.proformaInfoId} data={data.proformaItem} />
      </div>
    )
  }
}
