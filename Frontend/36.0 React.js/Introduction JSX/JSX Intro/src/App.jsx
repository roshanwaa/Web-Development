import './App.css'

function App() {
  const fName = "Roshan";
  const lName = "Kumar";
  const ranNum = Math.floor(Math.random() * 100)
  const currentYR = new Date().getFullYear()
  return (
    <div className='mainContainer'>
      <div className="">
        <h1 className='h1Tag'>Hello {`${fName} ${lName}`}</h1>
        <p>Random Number is {ranNum}</p>
        <div className="container">
          <h1 className='h1Tag'>My Favourite Food</h1>
          <ul>
            <li><p>Bacon</p></li>
            <li><p>Jamon</p></li>
            <li><p>Noodles</p></li>
          </ul>
        </div>
      </div>
      <footer>
        <h3>💕 ⓒ Roshan.waa {currentYR}</h3>
      </footer>
    </div>
  )
}

export default App

// In Pure JS code looks like

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World'
// document.getElementById('root').appendChild(h1)