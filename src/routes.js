import BlogComponent from './components/BlogComponent.vue'
import ProgrammComponent from './components/ProgrammComponent.vue'

export default [
  { path: '/', name: 'home', component: BlogComponent },
  { path: '/program', name: 'programm', component: ProgrammComponent },
]