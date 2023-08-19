import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <h1>AboutPage</h1>
      <p>
        Find me in  aut
      </p>
      <p>
        My default route is named  link to me with <br />
        <Link to={routes.home()}>Home</Link>
      </p>
    </>
  )
}

export default AboutPage
