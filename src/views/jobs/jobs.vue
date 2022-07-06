<template>
    <h1> Jobs </h1>
  <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobsDetails', params: { id: job.id }}"> 
        <h2> {{ job.title }} </h2>
      </router-link>
  </div>   
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: "web developer", id: 1, Details: 'lorem' },
                { title: "web designer", id: 2, Details: 'lorem' },
                { title: "web developer vue", id: 3, Details: 'lorem' }
            ]
        }
    }
}
</script>

<style>
    .job h2 {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        color: #444;
        cursor: pointer;
    }
    .job h2:hover {
        color: #ddd;
    }
    .job a {
        text-decoration: none;
    }
</style>