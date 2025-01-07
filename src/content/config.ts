import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
  })
});

const talksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    speaker: z.object({
      name: z.string(),
      GitHubId: z.string().optional(),
      XId: z.string().optional(),
      ImageSrc: z.string(),
    }),
    session: z.object({
      id: z.number(),
      keynote: z.boolean().optional(),
      title: z.string(),
    })
  })
})

export const collections = {
  'news': newsCollection,
  'talks': talksCollection,
}
