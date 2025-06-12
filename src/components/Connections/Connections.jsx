import React from 'react'
import './Connections.css'
import data from '../../assets/Data/text.json'

const ConnectionsPanel = () => {
  return (
    <div id='connections' className="connections-panel">
      <h3>Relevant Links</h3>
      {data.connections.map(connection => (
        <Connection connection={connection} key={connection.key} />
      ))}
    </div>
  )
}

const Connection = ({ connection }) => {
  return (
    <div  className="connection">
      <p><b>{connection.key}:</b> {connection.value}</p>
    </div>
  )
}

export default ConnectionsPanel
