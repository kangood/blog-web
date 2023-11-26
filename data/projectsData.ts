import { TechStack } from '@/components/techStack'
interface ProjectDataProps {
  title: string
  description: string
  imgSrc: string
  href: string
  techStack: TechStack[]
}

const projectsData: ProjectDataProps[] = [
  {
    title: '茶灯项目 web 前台官网',
    description: '由对SEO友好的NextJS，搭建官网',
    href: 'https://tealamp.panlore.top',
    imgSrc: '/static/images/tealamp-web-ex.png',
    techStack: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'ShadcnUI'],
  },
  {
    title: '茶灯项目 admin 后台网站',
    description: '带权限管理的React后台项目',
    href: 'https://lamp.panlore.top',
    imgSrc: '/static/images/tealamp-admin-ex.png',
    // , 'Vite', 'TailwindCSS', 'AntDesign', 'TanstackQuery'
    techStack: ['React', 'TypeScript'],
  },
]

export default projectsData
