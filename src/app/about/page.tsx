// src/app/about/page.tsx
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail, MapPin, Briefcase } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | John Doe',
  description: 'Learn more about my background, experience, and skills.',
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Passionate full-stack developer with 5+ years of experience building modern web applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative">
          <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="John Doe"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Hi, I'm John Doe 👋</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              With over 5 years in the industry, I've worked with startups and enterprises to create 
              scalable, performant web applications.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>San Francisco, California</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-green-500" />
              <span>Senior Full Stack Developer at TechCorp</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <span>john@example.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="glass-effect p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Master's in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400">Stanford University • 2016-2018</p>
            </div>
            <div>
              <h4 className="font-semibold">Bachelor's in Software Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400">MIT • 2012-2016</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
              <p className="text-gray-600 dark:text-gray-400">Amazon Web Services • 2020</p>
            </div>
            <div>
              <h4 className="font-semibold">Google Professional Cloud Architect</h4>
              <p className="text-gray-600 dark:text-gray-400">Google Cloud • 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
