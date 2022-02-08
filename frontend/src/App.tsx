import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App () {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  )
}

export default App
