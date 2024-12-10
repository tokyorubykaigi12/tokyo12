import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
  })
});

export const collections = {
  'news': newsCollection
}
