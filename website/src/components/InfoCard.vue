<template>
 <div class="mx-6 bg-white p-4 my-8 rounded-lg shadow-xl pt-4 lg:items-center lg:h-auto">
     <h2> {{ info.opener }}
      <small> <span class="text-muted">{{ info.preposition }}</span></small>
      </h2> <p class="lead">{{ info.point }}</p>
    </div>
</template>

<script type="text/javascript">
  export default {
    name:"InfoCard",
    props: ['info'],
  };
</script>