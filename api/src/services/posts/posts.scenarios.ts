import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        image: 'String',
        title: 'String',
        body: 'String',
        authorLogo: 'String',
        authorName: 'String',
      },
    },
    two: {
      data: {
        image: 'String',
        title: 'String',
        body: 'String',
        authorLogo: 'String',
        authorName: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
