import { useState } from 'react'
import { NextPage } from 'next'

const EmployeeDashboard: NextPage = () => {
  const [logType, setLogType] = useState('')
  const [address, setAddress] = useState('')
  const [installationType, setInstallationType] = useState('')
  const [installationSize, setInstallationSize] = useState('')
  const [materials, setMaterials] = useState('')

  const handleStartLog = async () => {
    // Implementeer hier de logica om een nieuwe werklog te starten
    console.log('Start new work log', { logType, address, installationType, installationSize, materials })
  }

  return (
    <div>
      <h1>Werknemer Dashboard</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleStartLog(); }}>
        <select value={logType} onChange={(e) => setLogType(e.target.value)}>
          <option value="">Selecteer log type</option>
          <option value="DRIVING">Rijden</option>
          <option value="ON_SITE">Op locatie</option>
          <option value="WASTE_DISPOSAL">Afvalverwerking</option>
        </select>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder="Adres" 
        />
        <select value={installationType} onChange={(e) => setInstallationType(e.target.value)}>
          <option value="">Selecteer installatie type</option>
          <option value="MOBILE_LED_6M2">MOBILE LED 6m2</option>
          <option value="MOBILE_LED_15M2">MOBILE LED 15m2</option>
          <option value="CONSTRUCT_LED">CONSTRUCT LED</option>
          <option value="STATIEF_LED">STATIEF LED</option>
          <option value="TOTEM_LED">TOTEM LED</option>
        </select>
        {['CONSTRUCT_LED', 'STATIEF_LED', 'TOTEM_LED'].includes(installationType) && (
          <input 
            type="number" 
            value={installationSize} 
            onChange={(e) => setInstallationSize(e.target.value)} 
            placeholder="Grootte" 
          />
        )}
        <textarea 
          value={materials} 
          onChange={(e) => setMaterials(e.target.value)} 
          placeholder="Gebruikte materialen" 
        />
        <button type="submit">Start Werklog</button>
      </form>
    </div>
  )
}

export default EmployeeDashboard
