<template>
    <div class="register-container flex flex-center">
       <div class="register-card q-pa-lg q-mt-lg rounded-borders shadow-2">
          <h2 class="text-center text-primary">Activate Your Account</h2>
          <p class="text-center q-mb-md">Enter your details to activate</p>
 
          <q-input
             v-model="memberId"
             label="Member ID"
             outlined
             dense
             :rules="[val => !!val || 'Member ID is required']"
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
             label="Activate"
             color="primary"
             @click="handleActivation"
             class="full-width q-mb-md"
             unelevated
          />
 
          <div class="text-center q-mt-md">
             <p class="q-mb-none">Already have an account?</p>
             <q-btn
                flat
                label="Back to Login"
                color="primary"
                @click="redirectToLogin"
             />
          </div>
       </div>
    </div>
 </template>
 
 <script>
 export default {
    name: 'RegisterAccount',
    data() {
       return {
          memberId: '',
          suffix: ''
       };
    },
    methods: {
       handleActivation() {
          const activationData = {
             member_id: this.memberId,
             suffix: this.suffix
          };
          console.log('Activation data:', activationData);
          // Insert API call for account activation here
       },
       redirectToLogin() {
          this.$router.push({ name: 'login' });
       }
    }
 }
 </script>
 
 <style scoped>
 .register-container {
    height: 100vh;
    background-color: #f5f7fa;
 }
 
 .register-card {
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
 