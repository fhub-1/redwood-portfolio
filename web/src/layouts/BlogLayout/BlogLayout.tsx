
type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
      <>
    <h1>My Redwood Blog</h1>
    <header>
      <ul>
        <li>
          {/* <Link to={routes.about()}>About my blog</Link> */}
        </li>
      </ul>
    </header>
    <main>
      {children}
    </main>
  </>
  )
}

export default BlogLayout
