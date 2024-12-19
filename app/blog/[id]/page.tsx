'use client'

import { useParams } from 'next/navigation'
import { blogPosts } from '../../data/blogPosts'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPost() {
  const params = useParams()
  const id = params.id as string
  const post = blogPosts.find(post => post.id === id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{post.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 dark:text-gray-400 mr-4">{post.date}</span>
              <span className="text-gray-600 dark:text-gray-400">By {post.author}</span>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

