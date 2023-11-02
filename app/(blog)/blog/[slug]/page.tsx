import React from 'react'
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'
// import { serialize } from 'next-mdx-remote/serialize'
// import remarkToc from 'remark-toc'
import { PostItem } from '@/types/Blog'
import getPostContent from '../../../_components/getPostContent'
import getPostSlugs from '../../../_components/getPostSlugs'
import Sidebar from '../../../_components/Sidebar'
import Toc from '../../_components/Toc'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs
}

const convertDate = (inputDate: string) => {
  const date = new Date(inputDate)
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return formattedDate
}

const PostPage =  async ( {params}: {params: {slug: string}} ) => {
  const { slug } = params
  const { content, frontmatter }: {content: any, frontmatter: any} = await getSource(slug)
  // const data = await getSerializedData(params.slug)

  return (
    <div className="flex flex-wrap">
      <div className="w-full mb-12 pt-32 pb-12 text-gray-800 dark:text-gray-100 bleed-bg bleed-slate-100 dark:bleed-gray-900">
        <h1 className="text-5xl font-bold mb-3">{`${frontmatter.title}`}</h1>      
        <div>{convertDate(frontmatter.publishDate)}</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="">
          <div className="mb-12 lg:hidden">
            <div className="text-blue-700 dark:text-blue-200 font-bold">Jump to...</div>
            <Toc />
          </div>
          <div className="prose dark:prose-invert">
            {content}
          </div>
        </div>
        <div className="">
          <Sidebar>
            <Toc />
          </Sidebar>
        </div>
    </div>
    </div>
  )
}

export default PostPage


async function getSource(slug: string) {
  const file = getPostContent(slug)
  const source = await compileMDX({
    source: file.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkToc],
        rehypePlugins: [rehypeSlug]
      }
    }})
  return source
}


// async function getSerializedData(slug: string) {
//   const file = getPostContent(slug)
//   const data = await serialize(file.content, {mdxOptions: {remarkPlugins: [remarkToc]}, parseFrontmatter: true})
//   return data
// }
