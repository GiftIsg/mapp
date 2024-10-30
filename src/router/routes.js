const routes = [
  {
     path: '/',
     component: () => import('layouts/MainLayout.vue'), // Adjust if using another layout
     children: [
        { path: '', component: () => import('pages/SplashScreen.vue'), name: 'splash' },
        { path: 'login', component: () => import('pages/LoginScreen.vue'), name: 'login' },
        { path: 'register', component: () => import('pages/RegisterAccount.vue'), name: 'registerAccount' }
    
     ]
  }
];

export default routes;
