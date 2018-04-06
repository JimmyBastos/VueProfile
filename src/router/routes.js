import Home from '@/views/Home'
import Skills from '@/views/Skills'
import Portfolio from '@/views/Portfolio'
import Cases from '@/views/Cases'
// import Blog from '@/views/blog/index'
import Contact from '@/views/Contact'

const Routes = [
  { path: '/', component: Home },
  { path: '/about', name: 'About', redirect: '/' },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/cases', name: 'Cases', component: Cases },
  // { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact }
]

export default Routes
