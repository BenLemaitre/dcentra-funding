import Web3 from 'web3'
import DcentraFunding from '../abis/DcentraFunding.json'

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    return true
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
    return true
  } else {
    return false
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

export const getProjects = async category => {
  const dcentra = await getDcentraContract()
  const count = await dcentra.methods.projectCount().call()
  let projects = []

  for (let i = 0; i < count; i++) {
    const project = await dcentra.methods.projects(i).call()
    if (project.title) {
      projects = [...projects, project]
    }
  }

  if (category) {
    projects = projects.filter(project => project.category === category)
  }

  return projects
}

export const getFeaturedProjects = async () => {
  const dcentra = await getDcentraContract()
  const count = await dcentra.methods.projectCount().call()
  let projects = []

  if (count > 1) {
    // get 2 random projects
    const indexes = getRandomIndexes(count)

    for (let i = 0; i < indexes.length; i++) {
      const project = await dcentra.methods.projects(indexes[i]).call()
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

export const createProject = async ({ title, desc, goal, path, category }) => {
  try {
    const dcentra = await getDcentraContract()
    const accounts = await window.web3.eth.getAccounts()

    const hasCreatedProject = await dcentra.methods
      .createProject(title, desc, goal, path, category)
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

const getRandomIndexes = count => {
  let indexes = []
  let currentNum = 0

  do {
    currentNum = Math.floor(Math.random() * count)
    console.log(currentNum)
    if (!indexes.includes(currentNum)) {
      indexes.push(currentNum)
    }
  } while (indexes.length < 2)

  return indexes
}
