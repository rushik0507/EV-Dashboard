import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './components/Dashboard'
import Table from './components/Table'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
    <Table />
  </React.StrictMode>,
)
