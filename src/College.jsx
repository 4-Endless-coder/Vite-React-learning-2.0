import Student from "./Student";

const College = ({college}) => {
    return (
        
      <div style={
        {backgroundColor: 'lightblue',
         color: '#000',
         padding:'20px',
         margin: '20px',
         borderRadius: '10px'
         }}>
          <h1>Name: {college.name}</h1>
          <ul>
            <li>
              <h3>City: {college.city}</h3>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Website: {college.website}</h3>
            </li>
            <li>
                <Student student={college.student}/>
            </li>
          </ul>
      </div>
       
    )
}

export default College;