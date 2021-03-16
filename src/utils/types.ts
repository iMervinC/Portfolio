export type NavType = 'home' | 'about' | 'projects' | 'blogs' | 'contacts'

export interface Data {
  title: string
  logo: string
  preview: string
  description: string
  tech: {
    frontend: string[]
    backend: string[]
  }
  url: string
  source: string
}

export interface ProjData extends Data {
  onClick?: () => void
}
