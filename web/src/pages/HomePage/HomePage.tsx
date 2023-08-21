import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ArticlesCell />
      <h1>hello</h1>
    </>
  )
}

export default HomePage
