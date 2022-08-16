import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeFigure from 'rehype-figure'


export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkRehype).use(rehypeStringify)
    .use(rehypeFigure, { className: "my-figure" }).process(markdown)
  return result.toString()
}
