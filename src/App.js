// import React, { useState, useEffect } from 'react'
// import { loadWeb3, getDcentraContract } from './utils'

// import Navbar from './components/navbar'

// function App() {
//   const [dcentra, setDcentra] = useState({})
//   const [account, setAccount] = useState('0x0')

//   useEffect(() => {
//     const account = async () => {
//       const accounts = await window.web3.eth.getAccounts()
//       setAccount(accounts[0])
//     }

//     const contract = async () => {
//       const dcentra = await getDcentraContract()
//       setDcentra(dcentra)
//     }

//     loadWeb3()
//     account()
//     contract()
//   }, [])

//   return (
//     <Router>
//       <Navbar account={account} />
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/projects" component={Projects} />
//         <Route path="/create">
//           <CreateProject dcentra={dcentra} account={account} />
//         </Route>
//       </Switch>
//     </Router>
//   )
// }

// export default App
