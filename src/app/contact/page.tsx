// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm/ContactForm'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Github, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | John Doe',
  description: 'Get in touch with me for collaboration, opportunities, or just to say hello!',
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have a project in mind? Let's collaborate and bring your ideas to life!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">john@example.com</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Typically replies within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">San Francisco, California</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Available for remote work worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-400">Within 24 hours</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">For all business inquiries</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <h3 className="font-semibold text-lg mb-4">Connect on Social</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-effect p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Send className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">What services do you offer?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full-stack web development, mobile app development, API development, 
              cloud architecture, and technical consulting.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">What is your typical project timeline?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Small projects: 2-4 weeks, Medium projects: 1-3 months, 
              Large projects: 3-6 months. Timeline varies based on complexity.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Do you work with international clients?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, I work with clients worldwide. I'm experienced in remote collaboration 
              across different time zones.
            </p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">What are your rates?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Rates vary based on project scope and complexity. I offer both hourly 
              and project-based pricing. Contact me for a detailed quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
