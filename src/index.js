import React from 'react'
import ReactDOM from 'react-dom'
import { ChatApp } from './ChatApp'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('root')
)
