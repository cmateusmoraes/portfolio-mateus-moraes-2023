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
    title: string
    subtitle: string
    description: string
  }
  about: {
    title: string
    text: string
  }
  contact: {
    title: string
    email: string
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
