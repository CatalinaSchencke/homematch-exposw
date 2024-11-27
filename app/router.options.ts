import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
        
            name: 'section2',
            path: '/seccion2',
            component: () => import('~/components/home/Section2.vue')
          
    },
    {
        
        name: 'section3',
        path: '/seccion3',
        component: () => import('~/components/home/Section3.vue')
      
},
    {
        
        name: 'section1',
        path: '/',
        component: () => import('~/components/home/TusPreferencias.vue')
      
},
  ],
} satisfies RouterConfig
