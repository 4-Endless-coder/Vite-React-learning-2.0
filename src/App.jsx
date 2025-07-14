import React, { useState } from "react";

const App = () => {
  const [cardStyle,setCardStyle] = useState(
    {
    border: "3px solid #cccccc4f",
    width: "300px",
    boxShadow: "1px 2px 3px 0px #cccccc59",
  }
)
const [textColor, setTextColor] = useState('black')
const [grid, setGrid] = useState(true)

const updateTheme =(bgColor, textColor)=>{
   setCardStyle({...cardStyle, backgroundColor:bgColor})
   setTextColor(textColor)
}
  return (
    <>
      <h1
        style={{
          color: "#FFCB61",
          backgroundColor: "#000",
          border: "2px solid black",
          borderRadius: "15px",
          width: "300px",
          margin: "10px",
        }}
      >
        Inline Style in React
      </h1>
      <button onClick={()=>updateTheme('#ccc', 'green')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white', 'black')}>Default Theme</button>
      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>  
      <div style={{display: grid?'flex':'block' , flexWrap:'wrap',}}>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "300px" }}
            src="https://i.pinimg.com/736x/04/5e/aa/045eaa768043a76cb8d18bf3efd424ca.jpg"
            alt=""
          />
          <div style={{padding: "10px",color:textColor}}>
            <h2>Ashesh Dash</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
