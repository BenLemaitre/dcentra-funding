import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Web3 from "web3";
import DcentraFunding from "./abis/DcentraFunding.json";

import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";

function App() {
  const [dcentra, setDcentra] = useState({});
  const [account, setAccount] = useState("0x0");

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying Metamask"
        );
      }
    };

    const loadBlockchainData = async () => {
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const networkData = DcentraFunding.networks[networkId];
      if (networkData) {
        // assign contract
        const dcentra = new web3.eth.Contract(
          DcentraFunding.abi,
          networkData.address
        );
        setDcentra(dcentra);
      }
    };

    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <Router>
      <Navbar account={account} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Route path="/create">
          <CreateProject dcentra={dcentra} account={account} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
