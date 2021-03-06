import Header from '../components/Header'
import Meta from '../components/Meta'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const About = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle} />
      <Header
        head={pageTitle}
        description={pageDescription}
      />
    </div>
  )
}

export default About
