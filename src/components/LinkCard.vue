<template>
  <div class="content-center m-6 lg:m-2">
    <a style="text-decoration : none" :href="link.url" target="_blank">
      <div
        class="cursor-pointer max-w-sm mx-auto flow p-6 hover:bg-gray-500 rounded-lg shadow-xl"
        :class="link.color"
      >
        <div class="link">
          <span class="block relative py-2">
            <i class="absolute top-0 right-0 fas fa-external-link-alt"></i>
            <i class="absolute top-0 left-0" v-bind:class="link.icon"></i>
          </span>
          <span class="block pt-2">
            <p class="italic text-base text-black-600 leading-normal">{{ link.message }}</p>
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "LinkCard",
  props: ["link"]
};
</script>