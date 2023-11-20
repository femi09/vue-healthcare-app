import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientView from '../views/Patient/PatientView.vue'
import PatientCreate from '../views/Patient/PatientCreate.vue'
import PatientGallery from '../views/Patient/PatientGallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/patients',
      name: 'patient',
      component: PatientView
    }, 
    {
      path: '/patients/gallery',
      name: 'patient_gallery',
      component: PatientGallery
    },
    {
      path: '/patient/create',
      name: 'patient_create',
      component: PatientCreate
    },
  ]
})

export default router