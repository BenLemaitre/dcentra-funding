import Web3 from 'web3'
import DcentraFunding from '../abis/DcentraFunding.json'

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.alert(
      'Non-ethereum browser detected. You should consider using metamask'
    )
  }
}

export const getDcentraContract = async () => {
  const networkId = await window.web3.eth.net.getId()
  const networkData = DcentraFunding.networks[networkId]

  if (networkData) {
    return await new window.web3.eth.Contract(
      DcentraFunding.abi,
      networkData.address
    )
  }
}

export const getProjects = async (numOfProjectsToGet) => {
  const dcentra = await getDcentraContract()
  let projects = []

  const count = !numOfProjectsToGet ? await dcentra.methods.projectCount().call() : numOfProjectsToGet 
  
  for (let i = 0; i < count; i++) {
    const project = await dcentra.methods.projects(i).call()
    if (project.title) {
      projects = [...projects, project]
    }
  }

  return projects
}

export const getProject = async id => {
  const dcentra = await getDcentraContract()
  const project = await dcentra.methods.projects(id).call()

  return project
}

export const fundProject = async (projectId, amount) => {
  try {
    const dcentra = await getDcentraContract()
    const accounts = await window.web3.eth.getAccounts()

    const hasBeenFunded = await dcentra.methods
      .updateReceivedFunds(projectId)
      .send({ from: accounts[0], value: amount })
      .on('transactionHash', hash => {
        return true
      })

    return hasBeenFunded
  } catch (err) {
    console.log(err)
    return false
  }
}

export const createProject = async ({ title, desc, goal, path }) => {
  try {
    const dcentra = await getDcentraContract()
    const accounts = await window.web3.eth.getAccounts()

    const hasCreatedProject = await dcentra.methods
      .createProject(title, desc, goal, path)
      .send({ from: accounts[0] })
      .on('transactionHash', hash => {
        console.log('project was added')
        return true
      })

    return hasCreatedProject
  } catch (err) {
    console.log(err)
    return false
  }
}
