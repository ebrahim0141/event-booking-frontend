<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

    <div class="col" v-for="event in events" :key="event.id">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{{ event.title }}</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>{{ formatDateTime(event.start_time) }}</li>
            <li>{{ formatDateTime(event.end_time) }}</li>
          </ul>
          <p>{{ event.descriptions }}</p>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" @click="handleBooking(event)">Booking</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import api from '@/api/axios';
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';

const events = ref([])
const toast = useToast();
const router = useRouter();

onMounted(async () => {
  try{
    const response = await api.get('/events');
    if(response.status){
      events.value = response.data.data;
    }

  }catch(error){
    console.log(error);
  }
});

const formatDateTime = (date) => {
  const d = new Date(date)
  return d.toLocaleString()
  //return
}
const handleBooking = (event) => {

  const loggedInUser = localStorage.getItem('user')

  if(!loggedInUser){
    toast.error('no user')
  }else{
    router.push({
      path: '/member-event-confirmation',
      query: {eventId:event.id}
    })
  }
}

</script>

<style scoped>

</style>