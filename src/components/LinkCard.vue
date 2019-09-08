<template>
  <div class="content-center m-6 lg:m-2" >
    <div class="cursor-pointer max-w-sm mx-auto flow p-6 hover:bg-gray-500 rounded-lg shadow-xl" :class="link.color">
      <a style="text-decoration : none" :href="link.url" target="_blank">
        <div class="link">
          <p>
            <i :class="link.icon"></i>
          </p>
          <p class="italic text-base text-black-600 leading-normal">{{ link.message }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "LinkCard",
  props: ["link"]
};
</script>