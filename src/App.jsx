import React from 'react'

function App() {
  const userData = [
    {
      name: "Ashesh Dash",
      age: 25,
      email: "ashesh@test.com",
      id: 1
    },
    {
      name: "Peter",
      age: 29,
      email: "peter@test.com",
      id: 2
    },
    {
      name: "Sam",
      age: 22,
      email: "sam@test.com",
      id: 3
    },
    {
      name: "Bruce",
      age: 20,
      email: "bruce@test.com",
      id: 4
    }
  ]

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '30px' }}>
        <thead>
          <tr style={{ backgroundColor: '#471396' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Id</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: '10px' }}>{user.name}</td>
                <td style={{ padding: '10px' }}>{user.age}</td>
                <td style={{ padding: '10px' }}>{user.email}</td>
                <td style={{ padding: '10px' }}>{user.id}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h2>Dummy Table (Static Data)</h2>
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#471396' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Ashesh Dash</td>
            <td style={{ padding: '10px' }}>ashesh@test.com</td>
            <td style={{ padding: '10px' }}>25</td>
            <td style={{ padding: '10px' }}>1</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Peter</td>
            <td style={{ padding: '10px' }}>peter@test.com</td>
            <td style={{ padding: '10px' }}>29</td>
            <td style={{ padding: '10px' }}>2</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Sam</td>
            <td style={{ padding: '10px' }}>sam@test.com</td>
            <td style={{ padding: '10px' }}>22</td>
            <td style={{ padding: '10px' }}>3</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Bruce</td>
            <td style={{ padding: '10px' }}>bruce@test.com</td>
            <td style={{ padding: '10px' }}>20</td>
            <td style={{ padding: '10px' }}>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App