import { desc } from "drizzle-orm"
import { z } from "zod"
import { j, publicProcedure } from "../jstack"

const posts = [{name: "hello"}]

export const jobRouter = j.router({
  recent: publicProcedure.query(async ({ c, ctx }) => {
    console.log(posts);
    return c.superjson(posts)
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, c, input }) => {
      const { name } = input

      console.log("prev", posts)
      posts.push({name})
      console.log("later", posts)

      return c.superjson(posts[posts.length]);
    }),
})
