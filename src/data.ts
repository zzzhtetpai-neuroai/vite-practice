import alienInvasionImg from './images/alien-invasion.png'

// The "form template" every project must follow
export type Project = {
  name: string
  image: string
  description: string
  tags: string[]
  rating: number
  githubUrl: string
}

// The list of projects
export const projects: Project[] = [
  {
    name: 'Alien Invasion',
    image: alienInvasionImg,
    description: 'PythonとOOPで作ったシューティングゲーム',
    tags: ['Python', 'pygame', 'OOP'],
    rating: 5,
    githubUrl: 'https://github.com/zzzhtetpai-neuroai/vite-practice',
  },
]