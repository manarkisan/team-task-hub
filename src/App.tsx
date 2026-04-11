
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

function App() {


  return (
    <>
    <BrowserRouter>
     <Layout children={undefined}>
      {/* <Routes>
        <Route path="/" element={<Layout children={undefined} />}/>
      </Routes> */}
     </Layout>
     </BrowserRouter>
    </>
  )
}

export default App
