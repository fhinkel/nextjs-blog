import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeFigure from 'rehype-figure'
import remarkPrism from "remark-prism";


export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeFigure, { className: "my-figure" })
    .process(markdown)
  return result.toString()
}
