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
            <li><p>Bacon</p>
              <img src="https://www.bing.com/ck/a?!&&p=6ee6cfe371bbd346JmltdHM9MTcwNDU4NTYwMCZpZ3VpZD0yYTNkYTY3OC04ZTcyLTYxY2QtMjlkYi1iNWExOGZkYTYwZmYmaW5zaWQ9NTYyNQ&ptn=3&ver=2&hsh=3&fclid=2a3da678-8e72-61cd-29db-b5a18fda60ff&u=a1L2ltYWdlcy9zZWFyY2g_cT1iYWNvbiBpbWFnZSZGT1JNPUlRRlJCQSZpZD0xNTdEMTVFRjY1MTU2OEQxMEUyNUZCMjBENjkyREExRkQ2Q0Y3Rjc2&ntb=1" alt="bacon" />
            </li>
            <li><p>Jamon</p></li>
            <li><p>Noodles</p></li>
          </ul>
        </div>
      </div>
      <footer>
        <h3>💕 ⓒ ⌐ Roshan.waa {currentYR}</h3>
      </footer>
    </div>
  )
}

export default App

// In Pure JS code looks like

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World'
// document.getElementById('root').appendChild(h1)