import { Container } from 'react-bootstrap'

const Header = (props: Record<string, string>) => {
  const { head, description } = props
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head} Page</h1>
        <p className="lead text-capitalize">{description}</p>
      </div>
    </Container>
  )
}

export default Header
