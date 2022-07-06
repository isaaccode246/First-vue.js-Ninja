import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notfound from '../views/Notfound.vue'
import jobs from '../views/jobs/jobs.vue'
import jobsDetails from '../views/jobs/jobsDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/jobs",
    name: 'jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetails',
    component: jobsDetails,
    props: true
  },
  //  Redirects
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 
  // Catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: Notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
