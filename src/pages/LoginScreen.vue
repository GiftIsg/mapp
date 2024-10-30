<template>
   <div class="login-container flex flex-center">
      <div class="login-card q-pa-lg q-mt-lg rounded-borders shadow-2">
         <h2 class="text-center text-primary">Welcome to MASM</h2>
         <p class="text-center q-mb-md">Please log in to continue</p>

         <q-input
            v-model="memberId"
            label="Member ID"
            outlined
            dense
            :rules="[val => !!val || 'Member ID is required']"
            class="q-mb-md"
         />
         <q-input
            v-model="password"
            label="Password"
            type="password"
            outlined
            dense
            :rules="[val => !!val || 'Password is required']"
            class="q-mb-md"
         />
         <q-input
            v-model="suffix"
            label="Suffix"
            outlined
            dense
            :rules="[val => !!val || 'Suffix is required']"
            class="q-mb-md"
         />

         <q-btn
            label="Login"
            color="primary"
            @click="handleLogin"
            class="full-width q-mb-md"
            unelevated
         />

         <div class="text-center q-mt-md">
            <p class="q-mb-none">Don’t have an account?</p>
            <q-btn
               flat
               label="Activate your account"
               color="primary"
               @click="redirectToActivation"
            />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'LoginScreen',
   data() {
      return {
         memberId: '',
         password: '',
         suffix: ''
      };
   },
   methods: {
      handleLogin() {
         const loginData = {
            member_id: this.memberId,
            password: this.password,
            suffix: this.suffix
         };
         console.log('Login data:', loginData);
         // Perform your API call for login here
      },
      redirectToActivation() {
         this.$router.push({ name: 'registerAccount' });
      }
   }
}
</script>

<style scoped>
.login-container {
   height: 100vh;
   background-color: #f5f7fa;
}

.login-card {
   width: 100%;
   max-width: 400px;
   background: #ffffff;
}

.full-width {
   width: 100%;
}

.rounded-borders {
   border-radius: 8px;
}

.text-primary {
   color: #027be3;
}

.shadow-2 {
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
