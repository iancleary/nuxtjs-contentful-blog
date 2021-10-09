<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex justify-center lg:w-auto lg:mx-16">
    <ul
      role="list"
      class="-mb-8 px-4"
    >
      <li class="relative">
        <div
          class="absolute inset-0 flex items-center"
          aria-hidden="true"
        >
          <div class="w-full border-t border-gray-500" />
        </div>
        <div class="relative flex justify-start">
          <span class="pb-8 text-lg font-bold text-gray-500">
            Experience
          </span>
        </div>
      </li>
      <li
        v-for="event in timeline"
        :key="event.id"
      >
        <div class="relative pb-8 items-center">
          <!-- <span
            v-if="(eventIdx !== timeline.length - 1)"
            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          /> -->
          <div class="relative flex space-x-2 justify-between">
            <div class="flex items-center">
              <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-6 ring-white']">
                <component
                  :is="event.icon"
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div class="min-w-0 flex-auto justify-between pl-4">
              <div class="flex justify-between items-center">
                <p class="text-md font-bold text-gray-500">
                  {{ event.organization }}
                </p>
                <div class="flex items-start text-right text-md text-gray-500 font-bold">
                  {{ event.location }}
                </div>
              </div>
              <div class="flex justify-between items-start">
                <p class="text-left text-md italic test-gray-500">
                  {{ event.position }}
                </p>
                <div class="flex items-start text-right text-sm whitespace-nowrap text-gray-500 space-x-1">
                  <time :datetime="event.datetimeStart">{{ event.dateStart }}</time>
                  <div>-</div>
                  <time :datetime="event.datetimeEnd">{{ event.dateEnd }}</time>
                </div>
              </div>
              <div class="text-sm text-gray-500 font-italic">
                <p
                  v-for="content in event.content"
                  :key="content"
                >
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/vue/solid';




import CheckIcon from '@/components/atoms/CheckIcon.vue';
import ThumbUpIcon from '@/components/atoms/ThumbUpIcon.vue';
import UserIcon from '@/components/atoms/UserIcon.vue';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

const timeline = [
  {
    id: 1,
    content: [
      'Co-developed the system test plan for our Viasat-3 Satellite Payloads',
      'Authored predictive models of system performance from module level test data',
      'Reallocated specs to improve schedule',
      ],
    position: 'Systems Engineer – Satellite Payloads',
    organization: 'Viasat, Inc.',
    location: 'Tempe, AZ',
    dateStart: 'September 2017',
    datetimeStart: '2017-09-20',
    dateEnd: 'Present',
    datetimeEnd: today,
    icon: UserIcon,
    iconBackground: 'bg-blue-400',
  },
  {
    id: 2,
    content: [
      'Designed wire bond interfaces for amplifiers and mixers in the 20-30 GHz range on a Rogers PCB Substrate',
      'Iterated the design of a 3-stage 20 GHz Mitsubishi LNA Amplifier and Hairpin filter',
      'Implemented reference designators for wire bond to improve quality in the design, test, and manufacturing processes',
      ],
    position: 'RF Engineer – Circuit Board Designer',
    organization: 'Viasat, Inc.',
    location: 'Tempe, AZ',
    dateStart: 'September 2015',
    datetimeStart: '2015-09-12',
    dateEnd: 'November 2017',
    datetimeEnd: '2017-11-05',
    icon: UserIcon,
    iconBackground: 'bg-blue-400',
  },
  {
    id: 3,
    content: [
      'Analyzed data and conducted tests diagnosing Ka band radar SiGe transceiver chip in the Jazz SBC18HA process',
      'Designed and simulated Ku band LO Poly-Phase Filter in a TriQuint GaAs process',
      ],
    position: 'RF Engineer – SiGe/GaN/GaAs Designer',
    organization: 'Viasat, Inc.',
    location: 'Tempe, AZ',
    dateStart: 'November 2014',
    datetimeStart: '2014-11-12',
    dateEnd: 'September 2015',
    datetimeEnd: '2015-09-05',
    icon: UserIcon,
    iconBackground: 'bg-blue-400',
  },
];



export default {
  components: {
      CheckIcon,
      ThumbUpIcon,
      UserIcon,
  },
  computed : {
      timeline() {
          return timeline;
      },
  },
};
</script>
