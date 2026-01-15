// src/app/blog/page.tsx
import { Metadata } from 'next'
import BlogCard from '@/components/BlogCard/BlogCard'
import { Calendar, User, Tag, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | John Doe',
  description: 'Read my thoughts on web development, technology, and best practices.',
}

// Server-side data fetching function
async function getBlogPosts() {
  // Simulating API call or database query
  return [
    {
      id: 1,
      title: 'Building Scalable Next.js Applications',
      excerpt: 'Learn how to architect and build scalable Next.js applications with best practices and modern patterns.',
      content: 'Full article content here...',
      author: 'John Doe',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'Next.js',
      tags: ['React', 'TypeScript', 'Performance'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w-600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring emerging trends and technologies that will shape web development in the coming year.',
      content: 'Full article content here...',
      author: 'John Doe',
      date: '2024-01-10',
      readTime: '10 min',
      category: 'Trends',
      tags: ['AI', 'Web3', 'AR/VR'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w-600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Mastering TypeScript for React Developers',
      excerpt: 'Advanced TypeScript patterns and techniques for building type-safe React applications.',
      content: 'Full article content here...',
      author: 'John Doe',
      date: '2024-01-05',
      readTime: '12 min',
      category: 'TypeScript',
      tags: ['React', 'Type Safety', 'Patterns'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w-600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Performance Optimization in Modern Web Apps',
      excerpt: 'Practical techniques for optimizing web application performance and user experience.',
      content: 'Full article content here...',
      author: 'John Doe',
      date: '2023-12-28',
      readTime: '15 min',
      category: 'Performance',
      tags: ['Optimization', 'Core Web Vitals', 'Lighthouse'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w-600&h=400&fit=crop',
    },
  ]
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Blog & Articles</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Thoughts, tutorials, and insights on web development, technology, and industry trends
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 relative h-64 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20" />
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="md:w-1/3 p-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {posts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {posts[0].readTime}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3">{posts[0].title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{posts[0].author}</span>
                </div>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 glass-effect p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Subscribe to my newsletter for the latest articles and updates
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
