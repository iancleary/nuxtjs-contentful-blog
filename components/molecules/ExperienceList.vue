<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex justify-center mx-auto ">
    <ul
      role="list"
      class="-mb-8 mx-auto max-w-sm md:max-w-3xl lg:max-w-7xl px-4 sm:px-6 lg:px-8"
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
                <div class="flex items-start text-right text-sm items-center text-gray-500 space-x-1">
                  <span class="flex items-center space-x-2 md:space-x-0">
                    <time :datetime="event.datetimeStart">{{ event.dateStart }}</time>
                    <div>-</div>
                    <time :datetime="event.datetimeEnd">{{ event.dateEnd }}</time>
                  </span>
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
import EducationCapIcon from '@/components/atoms/EducationCapIcon.vue';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

const timeline = [
  {
    id: 1,
    content: [
      // 'Co-developed the system test plan for our Viasat-3 Satellite Payloads',
      // 'Authored predictive models of system performance from module level test data',
      // 'Reallocated specs to improve schedule',
      ],
    position: 'Digital Subsytem Lead, Satellite Payloads',
    organization: 'Viasat, Inc.',
    location: 'Tempe, AZ',
    dateStart: 'September 2020',
    datetimeStart: '2017-09-20',
    dateEnd: 'Present',
    datetimeEnd: today,
    icon: UserIcon,
    iconBackground: 'bg-blue-400',
  },
  {
    id: 2,
    content: [
      'Co-developed the system test plan for our Viasat-3 Satellite Payloads',
      'Authored predictive models of system performance from module level test data',
      'Reallocated specs to improve schedule',
      ],
    position: 'Satellite Systems Engineer',
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
    id: 3,
    content: [
      'Courses: VLSI, Intro to Systems Engineering, Digital Communications, Wireless Communications,',
      'Design of Experiments, Software Testing, Picosatellite Design, Electromagnetics, Power System Transients',
      'Thesis: Spacecraft Integration and Test Strategies, with discussions of possible applications of software verification, validation and testing concepts from previous literature.',
      ],
    position: 'M.S.E Electrical Engineering',
    organization: 'Arizona State University',
    location: 'Tempe, AZ',
    dateStart: 'November 2014',
    datetimeStart: '2017-11-01',
    dateEnd: 'November 2017',
    datetimeEnd: '2017-11-08',
    icon: EducationCapIcon,
    iconBackground: 'bg-black',
  },
  {
    id: 4,
    content: [
      'Designed wire bond interfaces for amplifiers and mixers in the 20-30 GHz range on a Rogers PCB Substrate',
      'Iterated the design of a 3-stage 20 GHz Mitsubishi LNA Amplifier and Hairpin filter',
      'Implemented reference designators for wire bond to improve quality in the design, test, and manufacturing processes',
      ],
    position: 'RF Engineer',
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
    id: 5,
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
  {
    id: 6,
    content: [
      'Courses: Analog Integrated Circuits, Microwave Circuits I, Monolithic Amplifier Circuits, Electromagnetics II, Digital Signal Processing,',
      'Probabilistic Methods in Engineering, Analog Circuits, Semiconductor Device Physics, Intro to Logic Design,',
      'Programming & Data Structures, Intro to Thermodynamics, Economic Decision Making, Financial Accounting',
      ],
    position: 'B.S.E Electrical Engineering',
    organization: 'University of Michigan',
    location: 'Ann Arbor, MI',
    dateStart: 'September 2010',
    datetimeStart: '2010-09-01',
    dateEnd: 'May 2013',
    datetimeEnd: '2013-05-08',
    icon: EducationCapIcon,
    iconBackground: 'bg-black',
  },
];



export default {
  components: {
      CheckIcon,
      ThumbUpIcon,
      UserIcon,
      EducationCapIcon,
  },
  computed : {
      timeline() {
          return timeline;
      },
  },
};
</script>
