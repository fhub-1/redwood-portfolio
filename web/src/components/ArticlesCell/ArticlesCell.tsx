import { ArticlesQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      authorLogo
      authorName
      body
      createdAt
      image
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    // <ul>
    //   {articles.map((article) => {
    //     return <li key={article.id}>{JSON.stringify(article)}</li>
    //   })}
    // </ul>
    <section className="mx-auto mt-12 max-w-screen-xl px-4 md:px-8">
      <div className="max-w-lg">
        <h1 className="text-3xl font-semibold text-gray-800">Blog</h1>
        <p className="mt-3 text-gray-500">
          Blogs that are loved by the community. Updated every hour. The
          powerful gravity waves resulting from the impact of the planets, were
          finally resolved in 2015
        </p>
      </div>
      <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
        {articles.map((article) => (
          <article className="mt-5 pt-8 md:pt-0" key={article.id}>
            <span className="block text-sm text-gray-400">
              {article.createdAt}
            </span>
            <div className="mt-2">
              <Link to={routes.article({ id: article.id })}>
                <h3 className="text-xl font-semibold text-gray-900 hover:underline">
                  {article.title}
                </h3>
              </Link>
              <p className="mt-1 leading-relaxed text-gray-400">
                {article.body}
              </p>
            </div>
            <button className="articles-center mt-2 flex text-[14px] text-blue-600 decoration-blue-600 outline-none hover:underline">
              READ MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
