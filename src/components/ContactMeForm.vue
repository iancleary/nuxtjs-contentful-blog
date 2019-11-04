<template>
  <div class="container-inner mx-auto text-xl pb-4 relative">
    <h2 class="font-bold mb-6" id="contact">Contact me:</h2>

    <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
      <svg width="170px" height="170px">
        <use xlink:href="#dots-triangle" />
      </svg>
    </div>

    <div class="text-lg sm:text-lg mb-16">
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        class="mb-12"
      >
        <div class="flex flex-wrap mb-6 -mx-4">
          <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
            <label class="block mb-2 text-copy-primary" for="name">Name</label>
            <p class="hidden">
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jon Snow"
              class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
              required
            />
          </div>

          <div class="w-full px-4 md:w-1/2">
            <label class="block text-copy-primary mb-2" for="email">Email Address</label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
              required
            />
          </div>
        </div>

        <div class="w-full mb-12">
          <label class="block text-copy-primary mb-2" for="message">Message</label>

          <textarea
            id="message"
            rows="5"
            name="message"
            class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
            placeholder="Enter your message here."
            required
          ></textarea>
        </div>

        <div class="flex justify-end w-full">
          <input
            type="submit"
            value="Submit"
            class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
          />
        </div>
      </form>
    </div>
  </div>
</template>
