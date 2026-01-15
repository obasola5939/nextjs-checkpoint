// src/app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { Metadata } from 'next'
import { Filter, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects | John Doe',
  description: 'Browse through my portfolio of web development projects.',
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/johndoe/ecommerce',
    liveUrl: 'https://ecommerce-demo.johndoe.dev',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/johndoe/taskapp',
    liveUrl: 'https://tasks.johndoe.dev',
    category: 'Web App',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool with natural language processing and custom templates.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'Docker'],
    githubUrl: 'https://github.com/johndoe/ai-content',
    liveUrl: 'https://aicontent.johndoe.dev',
    category: 'AI/ML',
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracking application with workout plans and progress analytics.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'Expo'],
    githubUrl: 'https://github.com/johndoe/fitness-app',
    liveUrl: 'https://fitness.johndoe.dev',
    category: 'Mobile',
  },
  {
    id: 5,
    title: 'Real Estate Dashboard',
    description: 'Dashboard for real estate agents to manage properties, clients, and transactions.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'AWS'],
    githubUrl: 'https://github.com/johndoe/realestate-dashboard',
    liveUrl: 'https://realestate.johndoe.dev',
    category: 'Dashboard',
  },
  {
    id: 6,
    title: 'Crypto Trading Bot',
    description: 'Automated cryptocurrency trading bot with machine learning predictions and risk management.',
    image: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w=600&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'Binance API', 'Redis', 'FastAPI'],
    githubUrl: 'https://github.com/johndoe/crypto-bot',
    liveUrl: 'https://cryptobot.johndoe.dev',
    category: 'AI/ML',
  },
]

const categories = ['All', 'Full Stack', 'Web App', 'Mobile', 'AI/ML', 'Dashboard']

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore my portfolio of web applications, mobile apps, and innovative solutions
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-4xl font-bold gradient-text">50+</div>
          <div className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</div>
        </div>
        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-4xl font-bold gradient-text">30+</div>
          <div className="text-gray-600 dark:text-gray-400 mt-2">Happy Clients</div>
        </div>
        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-4xl font-bold gradient-text">15+</div>
          <div className="text-gray-600 dark:text-gray-400 mt-2">Technologies</div>
        </div>
        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-4xl font-bold gradient-text">5+</div>
          <div className="text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
        </div>
      </div>
    </div>
  )
}
