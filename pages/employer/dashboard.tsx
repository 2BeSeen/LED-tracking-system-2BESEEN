import { useState, useEffect } from 'react'
import { NextPage } from 'next'

interface WorkLog {
  id: string;
  userId: string;
  startTime: string;
  endTime: string | null;
  type: string;
  address: string | null;
  kilometers: number | null;
  installationType: string | null;
  installationSize: number | null;
  materials: string | null;
}

const EmployerDashboard: NextPage = () => {
  const [workLogs, setWorkLogs] = useState<WorkLog[]>([])

  useEffect(() => {
    // Hier zou je normaal gesproken een API-call doen om de werklogs op te halen
    // Voor nu gebruiken we dummy data
    setWorkLogs([
      {
        id: '1',
        userId: 'user1',
        startTime: '2023-05-01T09:00:00Z',
        endTime: '2023-05-01T17:00:00Z',
        type: 'ON_SITE',
        address: 'Klantadres 1, Stad',
        kilometers: 50,
        installationType: 'MOBILE_LED_6M2',
        installationSize: null,
        materials: 'Schermen, kabels',
      },
      // Voeg meer dummy data toe indien nodig
    ])
  }, [])

  return (
    <div>
      <h1>Werkgever Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Werknemer ID</th>
            <th>Start Tijd</th>
            <th>Eind Tijd</th>
            <th>Type</th>
            <th>Adres</th>
            <th>Kilometers</th>
            <th>Installatie Type</th>
            <th>Installatie Grootte</th>
            <th>Materialen</th>
          </tr>
        </thead>
        <tbody>
          {workLogs.map((log) => (
            <tr key={log.id}>
              <td>{log.userId}</td>
              <td>{new Date(log.startTime).toLocaleString()}</td>
              <td>{log.endTime ? new Date(log.endTime).toLocaleString() : 'Nog bezig'}</td>
              <td>{log.type}</td>
              <td>{log.address}</td>
              <td>{log.kilometers}</td>
              <td>{log.installationType}</td>
              <td>{log.installationSize}</td>
              <td>{log.materials}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployerDashboard
