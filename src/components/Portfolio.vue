<template>
  <div class="page">

    <!--  FLOATING NAV  -->
    <header class="nav-wrap">
      <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
        <a href="#home" class="nav__brand">
          <img :src="'/img/logo.png'" alt="CodeVerse logo" class="nav__logo" />
          <span class="nav__wordmark">CodeVerse</span>
        </a>

        <ul class="nav__links" :class="{ 'nav__links--open': menuOpen }">
          <li v-for="link in navLinksData" :key="link.id">
            <a :href="`#${link.id}`" :class="{ active: activeSection === link.id }" @click="menuOpen = false">{{
              link.label }}</a>
          </li>
        </ul>

        <span class="nav__status"><span class="dot"></span>Available for work</span>

        <button class="nav__toggle" :class="{ 'nav__toggle--open': menuOpen }" @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>

    <!--  HERO  -->
    <section id="home" class="hero">
      <div class="hero__bg-dots" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--2" aria-hidden="true"></div>

      <div class="hero__grid">
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span>Open to opportunities</span>
          </div>
          <h1 class="hero__name">
            <span class="hero__name-line">Osiyale</span>
            <span class="hero__name-line hero__name-line--accent">Opeyemi</span>
          </h1>
          <div class="hero__role">
            <span class="hero__role-text">{{ roles[roleIndex] }}</span><span class="cursor">|</span>
          </div>
          <p class="hero__desc">
            Crafting high-performance digital experiences that blend clean code with intentional design.
            I turn complex problems into elegant, user-centred solutions.
          </p>
          <div class="hero__cta">
            <a href="#projects" class="btn btn--primary">View my work <i class="bi bi-arrow-right"></i></a>
            <a href="#contact" class="btn btn--ghost">Let's talk <i class="bi bi-chat-dots"></i></a>
          </div>

          <!-- mini stats inside hero -->
          <div class="hero__stats" data-reveal>
            <div class="hero__stat" v-for="s in heroStats" :key="s.label">
              <span class="hero__stat-value">{{ s.display.value }}{{ s.suffix }}</span>
              <span class="hero__stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__avatar-ring" aria-hidden="true"></div>
          <div class="hero__avatar-ring hero__avatar-ring--2" aria-hidden="true"></div>
          <div class="hero__frame">
            <img :src="'/img/hero-img.png'" alt="Portrait of Osiyale Opeyemi" />
          </div>
          <!-- floating tech badges -->
          <div class="hero__badge-float hero__badge-float--vue">
            <i class="bi bi-code-slash"></i> Vue 3
          </div>
          <div class="hero__badge-float hero__badge-float--figma">
            <i class="bi bi-server"></i> Node.js
          </div>
          <div class="hero__badge-float hero__badge-float--js">
            <i class="bi bi-braces"></i> JS
          </div>
        </div>
      </div>

      <a href="#marquee" class="hero__scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <span class="hero__scroll-line"></span>
      </a>
    </section>

    <!--  MARQUEE TICKER  -->
    <div id="marquee" class="marquee-wrap" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="i in 3" :key="i" class="marquee-inner">
          <span v-for="item in marqueeItems" :key="item" class="marquee-item">
            <i class="bi bi-star-fill"></i> {{ item }}
          </span>
        </span>
      </div>
    </div>

    <!--  ABOUT  -->
    <section id="about" class="about">
      <div class="section-inner about__grid">
        <div class="about__left" data-reveal>
          <p class="eyebrow">about me</p>
          <h2 class="section-title">The person<br />behind the pixels.</h2>

          <p class="about__body-text">
            With 3+ years crafting digital products, I blend design sensibility with
            engineering precision. I care deeply about performance, accessibility, and
            the tiny details that make an interface feel <em>alive</em>.
          </p>
          <p class="about__body-text">
            When I'm not in VS Code or Figma you'll find me reading about design systems,
            contributing to open source, or experimenting with generative art.
          </p>

          <ul class="chip-row">
            <li v-for="skill in skills" :key="skill" class="chip">{{ skill }}</li>
          </ul>

          <div class="about__actions">
            <a href="#contact" class="btn btn--primary">Hire me <i class="bi bi-arrow-right"></i></a>
            <div class="social-icons">
              <a href="https://github.com/opeyemichris-dev" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub" aria-label="GitHub"><i class="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/osiyale-opeyemi-142a29447" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="https://x.com/opeyemi_devops" target="_blank" rel="noopener noreferrer" class="social-link" title="Twitter/X" aria-label="Twitter/X"><i class="bi bi-twitter-x"></i></a>
              <a href="https://www.instagram.com/babacodervillage" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram"><i
                  class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="about__right">
          <!-- Stats cards -->
          <div class="stats-grid" data-reveal>
            <div class="stat-card" v-for="stat in statsCards" :key="stat.label">
              <div class="stat-card__icon"><i :class="stat.icon"></i></div>
              <div class="stat-card__num">{{ stat.display.value }}{{ stat.suffix }}</div>
              <div class="stat-card__label">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Skills bars -->
          <div class="skills-bars" data-reveal>
            <p class="eyebrow" style="margin-bottom:18px">Core skills</p>
            <div class="skill-bar" v-for="skill in skillBars" :key="skill.name">
              <div class="skill-bar__head">
                <span>{{ skill.name }}</span>
                <span>{{ skill.pct }}%</span>
              </div>
              <div class="skill-bar__track">
                <div class="skill-bar__fill" :class="{ 'skill-bar__fill--animate': skillsVisible }"
                  :style="{ '--pct': skill.pct + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  EXPERIENCE TIMELINE  -->
    <section id="experience" class="experience">
      <div class="section-inner">
        <div class="section-head" data-reveal>
          <p class="eyebrow">experience</p>
          <h2 class="section-title">My journey so far</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="(exp, i) in experiences" :key="i" data-reveal
            :style="{ transitionDelay: `${i * 100}ms` }">
            <div class="timeline-item__dot"></div>
            <div class="timeline-item__card">
              <div class="timeline-item__meta">
                <span class="timeline-item__date">{{ exp.date }}</span>
                <span class="timeline-item__type" :class="`badge--${exp.type}`">{{ exp.type }}</span>
              </div>
              <h3>{{ exp.role }}</h3>
              <p class="timeline-item__company">{{ exp.company }}</p>
              <p>{{ exp.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  PROJECTS  -->
    <section id="projects" class="projects">
      <div class="section-inner">
        <div class="section-head" data-reveal>
          <p class="eyebrow">selected work</p>
          <h2 class="section-title">Recent projects <span class="section-title__count">07</span></h2>
        </div>

        <div class="project-grid">
          <article class="project-card" v-for="(project, i) in projects" :key="project.id" data-reveal
            :style="{ transitionDelay: `${i * 100}ms` }">
            <div class="project-card__media">
              <img :src="project.img" :alt="project.title" loading="lazy" />
              <div class="project-card__overlay">
                <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                   class="project-card__action" aria-label="View live site">
                  <i class="bi bi-box-arrow-up-right"></i> Live
                </a>
                <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                   class="project-card__action project-card__action--ghost" aria-label="View source code">
                  <i class="bi bi-github"></i> Code
                </a>
              </div>
              <span class="project-card__index">/{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="project-card__featured" v-if="project.featured">Featured</span>
            </div>
            <div class="project-card__body">
              <ul class="project-card__tags">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!--  SERVICES  -->
    <section id="services" class="services">
      <div class="section-inner">
        <div class="section-head" data-reveal>
          <p class="eyebrow">what i do</p>
          <h2 class="section-title">Services</h2>
        </div>

        <div class="service-grid">
          <div class="service-card" v-for="(service, i) in services" :key="service.id" data-reveal
            :style="{ transitionDelay: `${i * 100}ms` }">
            <div class="service-card__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="service-card__icon"><i :class="service.icon"></i></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-card__list">
              <li v-for="item in service.items" :key="item">
                <i class="bi bi-check2"></i> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--  TESTIMONIALS  -->
    <section id="testimonials" class="testimonials">
      <div class="section-inner">
        <div class="section-head" data-reveal>
          <p class="eyebrow">kind words</p>
          <h2 class="section-title">What clients say</h2>
        </div>

        <div class="testi-grid">
          <div class="testi-card" v-for="(t, i) in testimonials" :key="i" data-reveal
            :style="{ transitionDelay: `${i * 100}ms` }">
            <div class="testi-card__stars">
              <i class="bi bi-star-fill" v-for="s in 5" :key="s"></i>
            </div>
            <p class="testi-card__quote">"{{ t.quote }}"</p>
            <div class="testi-card__author">
              <div class="testi-card__avatar">{{ t.name[0] }}</div>
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  CONTACT -->
    <section id="contact" class="contact">
      <div class="section-inner contact__grid">
        <div class="contact__intro" data-reveal>
          <p class="eyebrow">contact</p>
          <h2 class="section-title">Let's build something<br />worth shipping.</h2>
          <p class="contact__lede">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>

          <div class="contact__info-list">
            <a href="mailto:codeverse@mail.com" class="contact__info-item">
              <div class="contact__info-icon"><i class="bi bi-envelope-fill"></i></div>
              <div>
                <span>Email</span>
                <strong>codeverse@mail.com</strong>
              </div>
            </a>
            <a href="tel:+2348100000000" class="contact__info-item">
              <div class="contact__info-icon"><i class="bi bi-telephone-fill"></i></div>
              <div>
                <span>Phone</span>
                <strong>+234 810 000 0000</strong>
              </div>
            </a>
            <div class="contact__info-item">
              <div class="contact__info-icon"><i class="bi bi-geo-alt-fill"></i></div>
              <div>
                <span>Location</span>
                <strong>Lagos, Nigeria</strong>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form" data-reveal @submit.prevent="handleSubmit">
          <div class="contact-form__header">
            <h3>Send a message</h3>
            <p>I typically reply within 24 hours.</p>
          </div>
          <div class="field-row">
            <div class="field">
              <label for="name"><i class="bi bi-person"></i> Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Ada Lovelace"
                :disabled="formStatus === 'loading' || formStatus === 'success'" />
            </div>
            <div class="field">
              <label for="email"><i class="bi bi-envelope"></i> Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="ada@example.com"
                :disabled="formStatus === 'loading' || formStatus === 'success'" />
            </div>
          </div>
          <div class="field">
            <label for="subject"><i class="bi bi-chat-left-text"></i> Subject</label>
            <input type="text" id="subject" v-model="form.subject" required placeholder="New project idea"
              :disabled="formStatus === 'loading' || formStatus === 'success'" />
          </div>
          <div class="field">
            <label for="message"><i class="bi bi-pencil"></i> Message</label>
            <textarea id="message" v-model="form.message" rows="5" required
              placeholder="Tell me a little about it..."
              :disabled="formStatus === 'loading' || formStatus === 'success'"></textarea>
          </div>

          <!-- Success banner -->
          <div v-if="formStatus === 'success'" class="form-feedback form-feedback--success">
            <i class="bi bi-check-circle-fill"></i>
            <div>
              <strong>Message sent!</strong>
              <span>Thanks for reaching out — I'll get back to you within 24 hours.</span>
            </div>
          </div>

          <!-- Error banner -->
          <div v-if="formStatus === 'error'" class="form-feedback form-feedback--error">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <div>
              <strong>Failed to send</strong>
              <span>{{ formError }}</span>
            </div>
          </div>

          <button type="submit" class="btn btn--primary btn--block"
            :disabled="formStatus === 'loading' || formStatus === 'success'">
            <span v-if="formStatus === 'loading'" class="btn-spinner"></span>
            <span v-else-if="formStatus === 'success'">
              <i class="bi bi-check-lg"></i> Sent!
            </span>
            <span v-else>Send message <i class="bi bi-send"></i></span>
          </button>
        </form>
      </div>
    </section>

    <!--  FOOTER   -->
    <footer class="footer">
      <div class="section-inner footer__grid">
        <div class="footer__brand">
          <div class="footer__brand-row">
            <img :src="'/img/logo.png'" alt="CodeVerse logo" class="footer__logo" />
            <span class="footer__wordmark">CodeVerse</span>
          </div>
          <p>Crafting innovative web solutions and sleek digital experiences that help brands stand out and grow.</p>
          <div class="social-icons social-icons--footer">
            <a href="https://www.linkedin.com/in/osiyale-opeyemi-142a29447" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/opeyemichris-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="bi bi-github"></i></a>
            <a href="https://x.com/opeyemi_devops" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X"><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.instagram.com/babacodervillage" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>

        <div class="footer__links">
          <h6>Quick links</h6>
          <ul>
            <li v-for="link in navLinksData" :key="link.id">
              <a :href="`#${link.id}`"><i class="bi bi-arrow-right-short"></i>{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__contact">
          <h6>Get in touch</h6>
          <p><i class="bi bi-envelope"></i> codeverse@mail.com</p>
          <p><i class="bi bi-telephone"></i> +234 810 000 0000</p>
          <p><i class="bi bi-geo-alt"></i> Lagos, Nigeria</p>
        </div>

        <div class="footer__availability">
          <h6>Availability</h6>
          <div class="avail-badge">
            <span class="avail-badge__dot"></span>
            <span>Open to full-time & freelance roles</span>
          </div>
          <p>Currently taking on new projects for Q3 2026.</p>
          <a href="#contact" class="btn btn--outline-light">Work with me</a>
        </div>
      </div>

      <!-- <div class="footer__bottom">
        <p>&copy; 2026 CodeVerse. Designed &amp; built by <span>Osiyale Opeyemi</span>.</p>
        <p>Made with <i class="bi bi-heart-fill"></i> &amp; lots of coffee.</p>
      </div> -->
    </footer>

    <button class="back-to-top" :class="{ 'back-to-top--show': showBackToTop }" title="Back to top"
      aria-label="Back to top" @click="scrollToTop">
      <i class="bi bi-arrow-up"></i>
    </button>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from "vue";

//  Nav data 
const navLinksData = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

//  Hero role rotator  //
const roles = ["Frontend Developer", "Backend Developer", "Full-Stack Engineer", "Vue & Node.js Dev"];
const roleIndex = ref(0);
let roleTimer;

//  Hero stats //
const heroStats = [
  { target: 3,   suffix: "+",  label: "Years exp.",   display: ref("0") },
  { target: 20,  suffix: "+",  label: "Projects",     display: ref("0") },
  { target: 15,  suffix: "+",  label: "Clients",      display: ref("0") },
  { target: 100, suffix: "%",  label: "Satisfaction", display: ref("0") },
];

//  Marquee  // 
const marqueeItems = [
  "Vue 3", "React", "JavaScript", "TypeScript", "Node.js",
  "Express.js", "MongoDB", "REST APIs", "CSS / Sass", "Git & GitHub",
];

//  About  //
const skills = ["HTML5", "CSS / Sass", "JavaScript", "TypeScript", "Vue 3", "React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "Responsive Design"];

const statsCards = [
  { icon: "bi bi-calendar2-check", target: 3,   suffix: "+", label: "Years Experience", display: ref("0") },
  { icon: "bi bi-briefcase",       target: 20,  suffix: "+", label: "Projects Done",    display: ref("0") },
  { icon: "bi bi-people",          target: 15,  suffix: "+", label: "Happy Clients",    display: ref("0") },
  { icon: "bi bi-patch-check",     target: 5,   suffix: "",  label: "IT Certificates",  display: ref("0") },
];

const skillBars = [
  { name: "HTML / CSS",        pct: 95 },
  { name: "JavaScript ", pct: 80 },
  { name: "Vue 3 ",     pct: 65 },
  { name: "Node.js ", pct: 35 },
  { name: "MongoDB", pct: 15 },
];

const skillsVisible = ref(false);

//  Experience  //
const experiences = [
  {
    date: "2024 – Present",
    type: "freelance",
    role: "Frontend Developer",
    company: "Self-employed · Remote",
    desc: "Building polished web apps for startups and agencies worldwide. Specialising in Vue 3, animation, and design-to-code delivery.",
  },
  {
    date: "2023 – 2024",
    type: "Learning",
    role: "UI/UX Designer & Developer",
    company: "CCHub · Ogun",
    desc: "Led the redesign of 10+ client sites, boosting average Lighthouse scores from 62 to 94. Introduced component-driven design system.",
  },
  {
    date: "2022 – 2023",
    type: "internship",
    role: "Frontend Intern",
    company: "TTA · Ogun",
    desc: "Contributed to a SaaS dashboard used by 5 000+ users. Implemented responsive layouts and accessibility improvements.",
  },
];

//  Projects  //
const projects = [
  {
    id: 1,
    img: "/img/1.jpg",
    title: "Portfolio Website",
    description: "A modern, responsive developer portfolio with stats, timeline, animated counters and smooth scroll interactions.",
    tags: ["Vue 3", "CSS", "UI Design"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    img: "/img/2.jpg",
    title: "E-Commerce Store (Gadgets)",
    description: "A full gadget store with product listings, cart system, checkout flow and payment integration.",
    tags: ["JavaScript", "UX", "Payments"],
    featured: false,
    liveUrl: "https://e-commerce-store-gadgets.vercel.app/",
    githubUrl: "https://github.com/opeyemichris-dev/e-commerce-store-gadgets.git",
  },
  {
    id: 3,
    img: "/img/3.jpg",
    title: "Learning Platform",
    description: "A responsive e-learning platform with interactive UI, progress tracking, and accessible navigation.",
    tags: ["Vue 3", "Accessibility", "UI Design"],
    featured: false,
    liveUrl: "https://test-card-chi.vercel.app/",
    githubUrl: "https://github.com/opeyemichris-dev/test-card.git",
  },
  {
    id: 4,
    img: "/img/cooking.png",
    title: "Cooking Guide",
    description: "A recipe and cooking guide app with step-by-step instructions, ingredient lists and meal categories.",
    tags: ["JavaScript", "Vue 3", "CSS"],
    featured: false,
    liveUrl: "https://cooking-guide-xi.vercel.app/",
    githubUrl: "https://github.com/opeyemichris-dev/cooking-guide.git",
  },
  {
    id: 5,
    img: "/img/planook.png",
    title: "PlayNook",
    description: "A mini game selection app with a curated collection of browser games and a clean, playful UI.",
    tags: ["JavaScript", "CSS", "Games"],
    featured: false,
    liveUrl: "https://playnookhub.vercel.app/",
    githubUrl: "https://github.com/opeyemichris-dev/playnook.git",
  },
  {
    id: 6,
    img: "/img/style.png",
    title: "StyleHub",
    description: "An e-commerce store for men's and women's clothing, accessories and perfumes with a sleek shopping experience.",
    tags: ["JavaScript", "E-Commerce", "CSS"],
    featured: true,
    liveUrl: "https://style-hub-inky.vercel.app/",
    githubUrl: "https://github.com/opeyemichris-dev/StyleHub.git",
  },
  {
    id: 7,
    img: "/img/quickbite.jpeg",
    title: "QuickBite",
    description: "A fast food ordering app with menu browsing, cart management and a smooth order placement flow.",
    tags: ["Vue 3", "Node.js", "UX"],
    featured: false,
    liveUrl: "https://quickbite-one-blue.vercel.app/",
    githubUrl: "https://github.com/opeyemichris-dev/quickbite.git",
  },
];

//  Services  //
const services = [
  {
    id: 1,
    icon: "bi bi-code-slash",
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with Vue 3 and React. Pixel-perfect, fast, and accessible.",
    items: ["Vue 3 / React SPAs", "Responsive & mobile-first", "Animations & micro-interactions"],
  },
  {
    id: 2,
    icon: "bi bi-server",
    title: "Backend Development",
    description: "Robust server-side logic, RESTful APIs, and database architecture using Node.js and MongoDB.",
    items: ["Node.js / Express APIs", "MongoDB & database design", "Authentication & security"],
  },
  {
    id: 3,
    icon: "bi bi-layers",
    title: "Full-Stack Solutions",
    description: "End-to-end web applications — from database schema to polished UI — delivered as one cohesive product.",
    items: ["Full MEVN / MERN stack", "API integration", "Deployment & DevOps basics"],
  },
];

//  Testimonials  //
const testimonials = [
  {
    quote: "Osiyale transformed our outdated site into a stunning, fast experience. Our conversions jumped 40% in the first month.",
    name: "Amara Okafor",
    role: "CEO, BrightPath Ventures",
  },
  {
    quote: "One of the most detail-oriented developers I've worked with. Every pixel was intentional, every interaction delightful.",
    name: "James Whitfield",
    role: "Product Lead, NovaTech",
  },
  {
    quote: "Delivered the project ahead of schedule and above expectations. Will absolutely work with CodeVerse again.",
    name: "Fatima Al-Rashid",
    role: "Founder, Bloom Studio",
  },
];

//  Contact form  //
const form = reactive({ name: "", email: "", subject: "", message: "" });
const formStatus = ref("idle"); // idle | loading | success | error
const formError  = ref("");

async function handleSubmit() {
  formStatus.value = "loading";
  formError.value  = "";
  try {
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        sentAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    formStatus.value = "success";
    Object.assign(form, { name: "", email: "", subject: "", message: "" });
    // Reset back to idle after 5 s
    setTimeout(() => { formStatus.value = "idle"; }, 5000);
  } catch (err) {
    formStatus.value = "error";
    formError.value  = err.message || "Something went wrong. Please try again.";
  }
}

//  Nav state  //
const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("home");

function handleNavScroll() {
  scrolled.value = window.scrollY > 20;
  const sections = document.querySelectorAll("section[id]");
  let current = "home";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 140) current = s.getAttribute("id");
  });
  activeSection.value = current;
}

//  Smooth scroll  //
function handleSmoothScrollClick(e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const id = anchor.getAttribute("href");
  if (!id || id === "#") return;
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
  }
}

//  Back to top  //
const showBackToTop = ref(false);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//  Counter animation  //
function animateCounter(item, duration = 1800) {
  const start = performance.now();
  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    item.display.value = String(Math.floor(eased * item.target));
    if (progress < 1) requestAnimationFrame(tick);
    else item.display.value = String(item.target);
  };
  requestAnimationFrame(tick);
}

//  Scroll observer  //
let observer;

function onScroll() {
  handleNavScroll();
  showBackToTop.value = window.scrollY > 400;
}

onMounted(async () => {
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", handleSmoothScrollClick);
  onScroll();

  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length;
  }, 2800);

  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Trigger skill bar animations when skills section enters view
          if (entry.target.classList.contains("skills-bars")) {
            skillsVisible.value = true;
          }
          // Trigger stat card counters
          if (entry.target.classList.contains("stats-grid")) {
            statsCards.forEach((s) => animateCounter(s));
          }
          // Trigger hero stats counters
          if (entry.target.classList.contains("hero__stats")) {
            heroStats.forEach((s) => animateCounter(s, 1400));
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("click", handleSmoothScrollClick);
  clearInterval(roleTimer);
  if (observer) observer.disconnect();
});
</script>


<style scoped>
/* ============================================================
   TOKENS
   ============================================================ */
.page {
  --ink: #0d0d14;
  --ink-soft: #1a1928;
  --paper: #f4f5f8;
  --paper-raised: #ffffff;
  --indigo: #6c5ce7;
  --indigo-deep: #4b3dbe;
  --indigo-glow: rgba(108, 92, 231, 0.25);
  --coral: #ff6452;
  --mint: #00c9a7;
  --mint-dim: rgba(0, 201, 167, 0.15);
  --gold: #f4b942;
  --muted: #6b7280;
  --line: rgba(13, 13, 20, 0.1);
  --line-on-dark: rgba(255, 255, 255, 0.12);
  --radius: 20px;
  --radius-sm: 12px;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  overflow-x: hidden;
}

.page :where(h1, h2, h3, h4) {
  font-family: var(--font-display);
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.02em;
}

.page a {
  color: inherit;
  text-decoration: none;
}

.section-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--indigo);
  margin: 0 0 12px;
  text-transform: lowercase;
}

.section-title {
  font-size: clamp(1.9rem, 3.4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
}

.section-title__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--indigo);
  background: rgba(108, 92, 231, 0.1);
  border: 1px solid rgba(108, 92, 231, 0.25);
  padding: 3px 10px;
  border-radius: 100px;
  vertical-align: middle;
  margin-left: 12px;
  letter-spacing: 0.04em;
}

.section-head {
  margin-bottom: 52px;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

[data-reveal].in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================================
   BUTTONS
   ============================================================ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.83rem;
  font-weight: 500;
  padding: 13px 26px;
  border-radius: 100px;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.28s ease;
  white-space: nowrap;
}

.btn--primary {
  background: var(--indigo);
  color: #fff;
  box-shadow: 0 8px 24px var(--indigo-glow);
}

.btn--primary:hover {
  background: var(--indigo-deep);
  transform: translateY(-3px);
  box-shadow: 0 14px 32px var(--indigo-glow);
}

.btn--ghost {
  border-color: var(--line-on-dark);
  color: #fff;
}

.btn--ghost:hover {
  border-color: #fff;
  transform: translateY(-3px);
}

.btn--outline {
  border-color: var(--ink);
  color: var(--ink);
}

.btn--outline:hover {
  background: var(--ink);
  color: #fff;
  transform: translateY(-3px);
}

.btn--outline-light {
  border-color: rgba(255, 255, 255, 0.35);
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 20px;
}

.btn--outline-light:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.btn--block {
  width: 100%;
  justify-content: center;
}

/* ============================================================
   NAV
   ============================================================ */
.nav-wrap {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.nav {
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 10px 14px 10px 20px;
  border-radius: 100px;
  background: rgba(13, 13, 20, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--line-on-dark);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.nav--scrolled {
  background: rgba(13, 13, 20, 0.88);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3);
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
  white-space: nowrap;
  flex-shrink: 0;
}

.nav__logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--indigo);
}

.nav__wordmark {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.nav__links {
  list-style: none;
  display: flex;
  gap: 22px;
  margin: 0 auto;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.nav__links a {
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  padding-bottom: 4px;
  transition: color 0.25s ease;
}

.nav__links a:hover,
.nav__links a.active {
  color: #fff;
}

.nav__links a.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background: var(--mint);
  border-radius: 2px;
}

.nav__status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.65);
  white-space: nowrap;
}

.nav__status .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--mint);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 201, 167, 0.6);
  }

  70% {
    box-shadow: 0 0 0 8px rgba(0, 201, 167, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 201, 167, 0);
  }
}

.nav__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  cursor: pointer;
  padding: 0 10px;
  margin-left: auto;
  flex-shrink: 0;
}

.nav__toggle span {
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.nav__toggle--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav__toggle--open span:nth-child(2) {
  opacity: 0;
}

.nav__toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--ink);
  color: #fff;
  padding: 140px 32px 80px;
  overflow: hidden;
}

.hero__bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.045) 1px, transparent 0);
  background-size: 28px 28px;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero__orb--1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(108, 92, 231, 0.35) 0%, transparent 70%);
  top: -120px;
  right: -80px;
  animation: orbFloat 12s ease-in-out infinite;
}

.hero__orb--2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(0, 201, 167, 0.2) 0%, transparent 70%);
  bottom: -80px;
  left: 5%;
  animation: orbFloat 16s ease-in-out infinite reverse;
}

@keyframes orbFloat {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(20px, -30px) scale(1.06);
  }
}

.hero__grid {
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 60px;
  align-items: center;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--mint);
  border: 1px solid var(--mint-dim);
  background: var(--mint-dim);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 22px;
}

.hero__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--mint);
  animation: pulse 2s infinite;
}

.hero__name {
  font-size: clamp(2.8rem, 7vw, 5.6rem);
  font-weight: 700;
  line-height: 1.0;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

.hero__name-line {
  display: block;
}

.hero__name-line--accent {
  background: linear-gradient(135deg, var(--indigo) 0%, var(--coral) 55%, var(--gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__role {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--mint);
  min-height: 1.7em;
  margin-bottom: 22px;
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--coral);
  margin-left: 2px;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero__desc {
  max-width: 480px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 32px;
}

.hero__cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}

.hero__stats {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid var(--line-on-dark);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero__stat-value {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
}

.hero__stat-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* (fade overlay removed) */

.hero__avatar-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(108, 92, 231, 0.25);
  width: 380px;
  height: 380px;
  animation: ringPulse 4s ease-in-out infinite;
}

.hero__avatar-ring--2 {
  width: 440px;
  height: 440px;
  border-color: rgba(0, 201, 167, 0.15);
  animation-delay: -2s;
}

@keyframes ringPulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.04);
    opacity: 1;
  }
}

.hero__frame {
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: 24px;
  overflow: visible;
  border: none;
  box-shadow: none;
  background: transparent;
}

.hero__frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  filter: drop-shadow(0 24px 60px rgba(108, 92, 231, 0.4));
}

.hero__badge-float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 100px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  white-space: nowrap;
  animation: floatBadge 4s ease-in-out infinite;
}

.hero__badge-float--vue {
  background: rgba(65, 184, 131, 0.25);
  top: 16%;
  left: -10%;
  animation-delay: 0s;
}

.hero__badge-float--figma {
  background: rgba(255, 100, 82, 0.25);
  bottom: 22%;
  left: -8%;
  animation-delay: -1.5s;
}

.hero__badge-float--js {
  background: rgba(244, 185, 66, 0.25);
  top: 10%;
  right: -8%;
  animation-delay: -0.8s;
}

@keyframes floatBadge {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.hero__scroll {
  align-self: center;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.hero__scroll-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  animation: scrolldown 1.8s ease-in-out infinite;
}

@keyframes scrolldown {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }

  50% {
    transform: scaleY(1);
    transform-origin: top;
  }

  50.1% {
    transform-origin: bottom;
  }

  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

/* ============================================================
   MARQUEE
   ============================================================ */
.marquee-wrap {
  overflow: hidden;
  background: var(--indigo);
  padding: 14px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333%);
  }
}

.marquee-inner {
  display: flex;
  align-items: center;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  padding: 0 28px;
  white-space: nowrap;
}

.marquee-item .bi {
  color: var(--gold);
  font-size: 0.6rem;
}

/* ============================================================
   ABOUT
   ============================================================ */
.about {
  padding: 120px 0;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: start;
}

.about__left .section-title {
  margin-bottom: 24px;
}

.about__body-text {
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.8;
  margin: 0 0 16px;
}

.chip-row {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 24px 0 32px;
}

.chip {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 7px 15px;
  border-radius: 100px;
  background: var(--paper-raised);
  border: 1px solid var(--line);
  color: var(--ink-soft);
  transition: all 0.25s ease;
}

.chip:hover {
  background: var(--indigo);
  color: #fff;
  border-color: var(--indigo);
}

.about__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--line);
  color: var(--ink);
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.social-link:hover {
  background: var(--indigo);
  border-color: var(--indigo);
  color: #fff;
  transform: translateY(-3px);
}

/* stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 36px;
}

.stat-card {
  background: var(--paper-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgba(108, 92, 231, 0.12);
  border-color: var(--indigo);
}

.stat-card__icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mint);
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.stat-card__num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1;
}

.stat-card__label {
  font-size: 0.82rem;
  color: var(--muted);
}

/* skill bars */
.skills-bars {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-bar__head {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink);
  margin-bottom: 6px;
}

.skill-bar__track {
  height: 7px;
  background: var(--line);
  border-radius: 100px;
  overflow: hidden;
}

.skill-bar__fill {
  height: 100%;
  width: 0;
  border-radius: 100px;
  background: linear-gradient(90deg, var(--indigo), var(--mint));
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-bar__fill--animate {
  width: var(--pct);
}

/* ============================================================
   EXPERIENCE TIMELINE
   ============================================================ */
.experience {
  padding: 0 0 120px;
}

.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 11px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--indigo), var(--mint));
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 36px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item__dot {
  position: absolute;
  left: -28px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--indigo);
  border: 3px solid var(--paper);
  box-shadow: 0 0 0 3px var(--indigo-glow);
}

.timeline-item__card {
  background: var(--paper-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.timeline-item__card:hover {
  transform: translateX(8px);
  box-shadow: 0 12px 32px rgba(108, 92, 231, 0.1);
  border-color: var(--indigo);
}

.timeline-item__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.timeline-item__date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.timeline-item__type {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 3px 10px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge--fulltime {
  background: rgba(108, 92, 231, 0.12);
  color: var(--indigo);
}

.badge--freelance {
  background: rgba(0, 201, 167, 0.12);
  color: var(--mint);
}

.badge--internship {
  background: rgba(244, 185, 66, 0.12);
  color: var(--gold);
}

.timeline-item__card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-item__company {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--indigo);
  margin-bottom: 10px;
}

.timeline-item__card p {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
}

/* ============================================================
   PROJECTS
   ============================================================ */
.projects {
  padding: 0 0 120px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
}

.project-card {
  background: var(--paper-raised);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 28px 50px rgba(13, 13, 20, 0.13);
}

.project-card__media {
  position: relative;
  height: 224px;
  overflow: hidden;
}

.project-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.project-card:hover .project-card__media img {
  transform: scale(1.09);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13, 13, 20, 0.88), rgba(13, 13, 20, 0.3) 60%, transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 100px;
  background: var(--indigo);
  color: #fff;
  border: 1px solid transparent;
  transition: background 0.25s ease, transform 0.25s ease;
}

.project-card__action:hover {
  background: var(--indigo-deep);
  transform: translateY(-2px);
}

.project-card__action--ghost {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.4);
}

.project-card__action--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}

.project-card__index {
  position: absolute;
  top: 14px;
  left: 14px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #fff;
  background: rgba(13, 13, 20, 0.55);
  padding: 4px 10px;
  border-radius: 100px;
  backdrop-filter: blur(6px);
}

.project-card__featured {
  position: absolute;
  top: 14px;
  right: 14px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--gold);
  background: rgba(244, 185, 66, 0.18);
  border: 1px solid rgba(244, 185, 66, 0.35);
  padding: 4px 10px;
  border-radius: 100px;
}

.project-card__body {
  padding: 22px 22px 24px;
}

.project-card__tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 12px;
  padding: 0;
}

.project-card__tags li {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--indigo);
  background: rgba(108, 92, 231, 0.08);
  border: 1px solid rgba(108, 92, 231, 0.2);
  padding: 3px 10px;
  border-radius: 100px;
}

.project-card__body h3 {
  font-size: 1.12rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.project-card__body p {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
}

/* ============================================================
   SERVICES
   ============================================================ */
.services {
  padding: 0 0 0;
  background: var(--ink);
}

.services .section-head {
  padding-top: 100px;
}

.services .eyebrow {
  color: var(--mint);
}

.services .section-title {
  color: #fff;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  padding-bottom: 100px;
}

.service-card {
  position: relative;
  padding: 38px 28px 32px;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line-on-dark);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(108, 92, 231, 0.12), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(108, 92, 231, 0.5);
  background: rgba(255, 255, 255, 0.07);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover .service-card__icon {
  background: var(--indigo);
  color: #fff;
  transform: rotate(-6deg) scale(1.06);
}

.service-card__num {
  position: absolute;
  top: 22px;
  right: 22px;
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.05);
  line-height: 1;
}

.service-card__icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mint);
  font-size: 1.4rem;
  margin-bottom: 22px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.service-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
}

.service-card p {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0 0 20px;
}

.service-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-card__list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
}

.service-card__list li .bi {
  color: var(--mint);
  font-size: 0.9rem;
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
.testimonials {
  padding: 120px 0;
}

.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.testi-card {
  background: var(--paper-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.testi-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(108, 92, 231, 0.1);
  border-color: var(--indigo);
}

.testi-card__stars {
  display: flex;
  gap: 4px;
}

.testi-card__stars .bi {
  color: var(--gold);
  font-size: 0.85rem;
}

.testi-card__quote {
  font-size: 0.97rem;
  line-height: 1.75;
  color: var(--muted);
  margin: 0;
  flex: 1;
}

.testi-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.testi-card__avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo), var(--coral));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.testi-card__author strong {
  display: block;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink);
}

.testi-card__author span {
  font-size: 0.78rem;
  color: var(--muted);
  font-family: var(--font-mono);
}

/* ============================================================
   CONTACT
   ============================================================ */
.contact {
  padding: 0 0 120px;
}

.contact__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: start;
}

.contact__intro .section-title {
  margin-bottom: 16px;
}

.contact__lede {
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.75;
  margin: 0 0 32px;
}

.contact__info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact__info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: var(--paper-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  cursor: default;
}

a.contact__info-item {
  cursor: pointer;
}

a.contact__info-item:hover {
  border-color: var(--indigo);
  box-shadow: 0 8px 24px rgba(108, 92, 231, 0.1);
  transform: translateX(6px);
}

.contact__info-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mint);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.contact__info-item span {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 2px;
  font-family: var(--font-mono);
}

.contact__info-item strong {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink);
}

.contact-form {
  background: var(--ink);
  border-radius: var(--radius);
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 1px solid var(--line-on-dark);
}

.contact-form__header h3 {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 6px;
}

.contact-form__header p {
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
  font-family: var(--font-mono);
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  display: flex;
  align-items: center;
  gap: 6px;
}

.field label .bi {
  color: var(--mint);
}

.field input,
.field textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line-on-dark);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.93rem;
  resize: vertical;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(255, 255, 255, 0.28);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--mint);
  background: rgba(255, 255, 255, 0.07);
}

/* form feedback & spinner */
.form-feedback {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  line-height: 1.55;
}
.form-feedback--success {
  background: rgba(0, 201, 167, 0.12);
  border: 1px solid rgba(0, 201, 167, 0.3);
  color: var(--mint);
}
.form-feedback--error {
  background: rgba(255, 100, 82, 0.12);
  border: 1px solid rgba(255, 100, 82, 0.3);
  color: #ff6452;
}
.form-feedback .bi {
  font-size: 1.15rem;
  flex-shrink: 0;
  margin-top: 1px;
}
.form-feedback strong { display: block; font-weight: 600; margin-bottom: 2px; color: inherit; }
.form-feedback span   { color: rgba(255, 255, 255, 0.6); }
.form-feedback--error span { color: rgba(255, 100, 82, 0.8); }

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  background: var(--ink);
  color: rgba(255, 255, 255, 0.72);
  padding: 90px 0 0;
  border-top: 1px solid var(--line-on-dark);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 0.7fr 0.9fr 1fr;
  gap: 48px;
  padding-bottom: 64px;
  border-bottom: 1px solid var(--line-on-dark);
}

.footer__brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer__logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--indigo);
}

.footer__wordmark {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.footer__brand p {
  font-size: 0.88rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.48);
  max-width: 280px;
  margin: 0 0 20px;
}

.social-icons--footer {
  display: flex;
  gap: 8px;
}

.social-icons--footer a {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--line-on-dark);
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  transition: all 0.25s ease;
}

.social-icons--footer a:hover {
  background: var(--indigo);
  border-color: var(--indigo);
  color: #fff;
  transform: translateY(-3px);
}

.footer h6 {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 18px;
}

.footer__links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9rem;
}

.footer__links a {
  color: rgba(255, 255, 255, 0.62);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.25s ease, transform 0.25s ease;
}

.footer__links a:hover {
  color: var(--mint);
  transform: translateX(4px);
}

.footer__contact p {
  font-size: 0.88rem;
  margin: 0 0 10px;
  color: rgba(255, 255, 255, 0.62);
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer__contact .bi {
  color: var(--mint);
}

.avail-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--mint);
  background: rgba(0, 201, 167, 0.1);
  border: 1px solid rgba(0, 201, 167, 0.25);
  padding: 8px 14px;
  border-radius: 100px;
  margin-bottom: 14px;
  width: fit-content;
}

.avail-badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--mint);
  animation: pulse 2s infinite;
}

.footer__availability p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.6;
  margin: 0 0 18px;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px 0;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.38);
}

.footer__bottom span {
  color: var(--mint);
  font-weight: 600;
}

.footer__bottom .bi-heart-fill {
  color: var(--coral);
  font-size: 0.75rem;
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
.back-to-top {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: var(--indigo);
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(14px);
  transition: all 0.3s ease;
  box-shadow: 0 10px 28px rgba(108, 92, 231, 0.45);
}

.back-to-top--show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--indigo-deep);
  transform: translateY(-4px);
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 900px) {

  /* ── Hero: text-first, left-aligned split on tablet ── */
  .hero {
    padding: 120px 32px 80px;
  }

  .hero__grid {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    gap: 24px;
    align-items: center;
  }

  .hero__visual {
    order: 1; /* image stays RIGHT on tablet */
  }

  .hero__frame {
    width: 260px;
    height: 260px;
  }

  .hero__avatar-ring     { width: 260px; height: 260px; }
  .hero__avatar-ring--2  { width: 310px; height: 310px; }

  .hero__desc,
  .hero__cta,
  .hero__stats {
    margin-left: 0;
    margin-right: 0;
  }

  .hero__cta,
  .hero__stats { justify-content: flex-start; }

  .hero__badge-float--figma { display: none; }

  .about__grid    { grid-template-columns: 1fr; gap: 48px; }
  .contact__grid  { grid-template-columns: 1fr; }

  .project-grid,
  .service-grid,
  .testi-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 720px) {

  /* ── Nav ── */
  .nav {
    padding: 10px 12px 10px 16px;
    gap: 12px;
  }

  .nav__links,
  .nav__status { display: none; }

  .nav__links--open {
    display: flex;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(13, 13, 20, 0.97);
    border-radius: 20px;
    padding: 20px;
    gap: 16px;
    backdrop-filter: blur(20px);
  }

  .nav__toggle { display: flex; }

  /* ── Other sections ── */
  .project-grid,
  .service-grid,
  .testi-grid { grid-template-columns: 1fr; }

  .stats-grid   { grid-template-columns: 1fr 1fr; }
  .field-row    { grid-template-columns: 1fr; }
  .footer__grid { grid-template-columns: 1fr; }

  .footer__bottom { flex-direction: column; text-align: center; }

  .section-inner { padding: 0 20px; }

  /* ── Hero: text-first, LEFT-aligned, illustration secondary ── */
  .hero {
    padding: 100px 22px 56px;
    justify-content: center;
  }

  .hero__grid {
    grid-template-columns: 1fr;  /* single column */
    text-align: left;
    gap: 0;
    align-items: start;
  }

  /* illustration goes BELOW the text */
  .hero__visual {
    order: 1;
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }

  .hero__frame {
    width: 200px;
    height: 200px;
  }

  .hero__avatar-ring,
  .hero__avatar-ring--2 { display: none; }

  .hero__badge-float { display: none; }

  /* text block: left-aligned */
  .hero__content {
    text-align: left;
  }

  .hero__badge {
    margin-bottom: 16px;
  }

  .hero__name {
    font-size: clamp(2.4rem, 11vw, 3.2rem);
    margin-bottom: 10px;
  }

  .hero__role {
    font-size: 0.95rem;
    margin-bottom: 14px;
  }

  .hero__desc {
    font-size: 0.93rem;
    line-height: 1.7;
    margin-bottom: 24px;
    max-width: 100%;
  }

  .hero__cta {
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .hero__stats {
    justify-content: flex-start;
    gap: 24px;
    padding-top: 20px;
  }

  .hero__stat-value { font-size: 1.3rem; }

  .hero__scroll { display: none; }
}

/* ── Extra-narrow phones (≤390px) ── */
@media (max-width: 390px) {
  .hero {
    padding: 90px 18px 48px;
  }

  .hero__name {
    font-size: clamp(2rem, 12vw, 2.6rem);
  }

  .hero__frame {
    width: 170px;
    height: 170px;
  }

  .hero__cta .btn {
    font-size: 0.78rem;
    padding: 11px 18px;
  }

  .hero__stats {
    gap: 16px;
  }

  .hero__stat-value {
    font-size: 1.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
