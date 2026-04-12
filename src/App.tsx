
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

function App() {


  return (
    <>
    <BrowserRouter >
     <Layout >
      <Routes>
        <Route path="/" element={''}/>
      </Routes>
     </Layout>
     </BrowserRouter>
    </>
  )
}

export default App
