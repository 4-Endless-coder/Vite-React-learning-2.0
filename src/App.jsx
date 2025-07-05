import React from 'react'
import College from './College'

function App() {
  const collegeData = [
    {
      name: 'IIT Delhi',
      city: 'Delhi',
      website: 'www.iit.com',
      student: [
        {
          name: 'Ashesh Dash',
          age:25,
          email:'ashesh@test.com'
        },
        {
          name: 'Peter',
          age:20,
          email:'peter@test.com'
        },
        {
          name: 'Sam ',
          age:29,
          email:'sam@test.com'
        }
      ]
    },
    {
      name: 'IET Alwar',
      city: 'Alwar',
      website: 'www.iet.com',
       student: [
        {
          name: 'Ashesh Dash',
          age:25,
          email:'ashesh@test.com'
        },
        {
          name: 'Peter',
          age:20,
          email:'peter@test.com'
        },
        {
          name: 'Sam ',
          age:29,
          email:'sam@test.com'
        }
      ]
    },
    {
      name: 'KCIET Hisar',
      city: 'Hisar',
      website: 'www.kciet.com',
      student: [
        {
          name: 'Ashesh Dash',
          age:25,
          email:'ashesh@test.com'
        },
        {
          name: 'Peter',
          age:20,
          email:'peter@test.com'
        },
        {
          name: 'Sam ',
          age:29,
          email:'sam@test.com'
        }
      ]
    }
  ]
  return (
    <div>
      {/* <h1>Nested Looping</h1> */}
      {collegeData.map((college, index)=> (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </div>
  )
}

export default App
