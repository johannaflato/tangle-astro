import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'
// Removing problematic dependency
// import remarkUnwrapImages from 'remark-unwrap-images'

export const remarkPlugins = [
  mdxAnnotations.remark,
  remarkGfm,
  // Removing problematic plugin
  // remarkUnwrapImages,
]
