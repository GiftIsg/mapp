<template>
   <div class="fullscreen bg-white flex flex-center column">
      <img src="~assets/logo.png" alt="App Logo" class="q-mb-md" width="200" />
      <div class="loading-dots">
         <span></span>
         <span></span>
         <span></span>
      </div>
   </div>
</template>

<script>
export default {
   name: 'SplashScreen',
   mounted() {
      // Redirect to login page after 3 seconds
      setTimeout(() => {
         this.$router.push({ name: 'login' });
      }, 3000);
   }
}
</script>

<style scoped>
.fullscreen {
   height: 100vh;
}

.loading-dots {
   display: flex;
   gap: 8px;
   margin-top: 20px;
}

.loading-dots span {
   width: 10px;
   height: 10px;
   background-color: #007bff; /* Blue color */
   border-radius: 50%;
   display: inline-block;
   animation: bounce 0.6s infinite alternate;
}

.loading-dots span:nth-child(2) {
   animation-delay: 0.2s;
}

.loading-dots span:nth-child(3) {
   animation-delay: 0.4s;
}

@keyframes bounce {
   from {
      transform: translateY(0);
   }
   to {
      transform: translateY(-10px);
   }
}
</style>
