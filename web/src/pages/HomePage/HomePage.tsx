import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="">
        Introduce the front-end developer and showcase their skills, with a
        clear call-to-action (CTA) button to view the portfolio.
      </h1>
      <p>
        learn more about me on my about page
      </p>
      <Link to={routes.about()}>About</Link>
    </>
  )
}

export default HomePage
