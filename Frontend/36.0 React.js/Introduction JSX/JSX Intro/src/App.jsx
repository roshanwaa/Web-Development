import './App.css'

function App() {
  const name = "Roshan";

  return (
    <div className>
      <div className="">
        <h1 className='h1Tag'>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, obcaecati, at aperiam expedita iusto quia recusandae similique, ducimus molestiae error optio! Natus iure fugiat fugit omnis eaque pariatur animi nulla!</p>
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
        <h3>💕 Roshan.waa</h3>
      </footer>
    </div>
  )
}

export default App

// In Pure JS code looks like

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World'
// document.getElementById('root').appendChild(h1)