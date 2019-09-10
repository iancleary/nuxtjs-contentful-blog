import Vue from 'vue'
import Router from 'vue-router'
import AboutSection from "@/components/About.vue"

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/welcome' },
        {
            path: '/welcome',
            name: 'About',
            component: AboutSection,
            props: {
                opening_info_blocks: [
                    {
                        id: 1,
                        opener:
                            "Hello. Bonjour. Hola. Ciao. Hallo. Namaste. Olá. Salaam. Ni Hau. Nay Hoh."
                        // preposition: "with the help of my coworkers",
                    }
                ],
                info_blocks: [
                    {
                        id: 1,
                        opener: "By day",
                        preposition: "with the help of my coworkers",
                        point:
                            "I am RF/Microwave Engineer working on \
                                    electronics bound for outer space."
                    },
                    {
                        id: 2,
                        opener: "By night",
                        preposition: "with the help of the community",
                        point:
                            "I am learning about web frameworks, \
                                    open source development, and \
                                    software engineering best practices."
                    }
                ],
                background_info_blocks: [
                    {
                        id: 3,
                        opener: "My formal education",
                        preposition: "with the help of classmates, friends, and parents",
                        point:
                            "I graduated from the University of Michigan's College of Engineering cum laude \
                            (B.S.E. Electrical Engineering, class of 2013). \
                            I moved to Phoenix, AZ to start my career with Viasat as an \
                            RF/Microwave Engineer. While working full-time, I got my \
                            M.S.E. in Electrical Engineering in the spring of 2017, \
                            with a focus on wireless communication systems. \
                            However, within my course of study, \
                            I took classes in System Engineering, Design of Experiments, \
                            VLSI, and a course on pico-satellite design."
                    }
                ],
            }
        }
    ]
})