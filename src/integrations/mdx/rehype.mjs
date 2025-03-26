import { toString } from 'mdast-util-to-string'
import { mdxAnnotations } from 'mdx-annotations'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import { visit } from 'unist-util-visit'

// We'll remove the custom shiki implementation and use Astro's built-in syntax highlighting

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2'] }],
  [
    remarkRehypeWrap,
    {
      node: { type: 'element', tagName: 'article' },
      start: 'element[tagName=hr]',
      transform: (article) => {
        article.children.splice(0, 1)
        let heading = article.children.find((n) => n.tagName === 'h2')
        article.properties = { ...heading.properties, title: toString(heading) }
        heading.properties = {}
        return article
      },
    },
  ],
]
