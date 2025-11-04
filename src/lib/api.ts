import fs from 'fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'src/data')

export interface Job {
  title: string
  text: string
  url: string
  technologies: string[]
  image: string
}

export interface Skill {
  id: string
  name: string
  category: string
  proficiency: number
}

export interface Content {
  hero: {
    greeting: string
    name: string
    title: string
    subtitle: string
  }
  about: {
    title: string
    subtitle: string
    paragraphs: string[]
    stats: Array<{
      value: number
      unit: string
      label: string
    }>
  }
  portfolio: {
    title: string
    subtitle: string
  }
  aboutSite: {
    title: string
    description: string
  }
}

export function getJobs(): Job[] {
  const fullPath = path.join(dataDirectory, 'jobs.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents)
}

export function getSkills(): Skill[] {
  const fullPath = path.join(dataDirectory, 'skills.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents)
}

export function getContent(): Content {
  const fullPath = path.join(dataDirectory, 'content.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents)
}

export function updateJobs(jobs: Job[]): void {
  const fullPath = path.join(dataDirectory, 'jobs.json')
  fs.writeFileSync(fullPath, JSON.stringify(jobs, null, 2))
}

export function updateSkills(skills: Skill[]): void {
  const fullPath = path.join(dataDirectory, 'skills.json')
  fs.writeFileSync(fullPath, JSON.stringify(skills, null, 2))
}

export function updateContent(content: Content): void {
  const fullPath = path.join(dataDirectory, 'content.json')
  fs.writeFileSync(fullPath, JSON.stringify(content, null, 2))
}
