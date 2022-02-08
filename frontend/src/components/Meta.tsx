import { Helmet } from 'react-helmet'

const Meta = (props: Record<string, string>) => {
  const { title } = props
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Meta
