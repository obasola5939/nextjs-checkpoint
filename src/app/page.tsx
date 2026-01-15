// src/app/page.tsx
import Hero from '@/components/Hero/Hero'
import ProjectsShowcase from '@/components/ProjectsShowcase/ProjectsShowcase'
import SkillsSection from '@/components/SkillsSection/SkillsSection'
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | John Doe - Full Stack Developer',
  description: 'Welcome to my portfolio website showcasing my projects and skills.',
}

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <ProjectsShowcase />
      <SkillsSection />
      <ExperienceTimeline />
    </div>
  )
}
