import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-sm bg-slate-900 text-white">
        Introduce the front-end developer and showcase their skills, with a
        clear call-to-action (CTA) button to view the portfolio.
      </h1>
    </>
  )
}

export default HomePage
