<template>
  <div>
    <!--Nav-->
    <nav
      :class="{
        'bg-opacity-25': scrollPosition <= 0,
      }"
      class="flex flex-wrap fixed items-center justify-between p-4 bg-white z-50 w-full shadow-lg"
    >
      <div>
        <a href="/" aria-label="Home">
          <img
            class="w-auto h-24 sm:h-24"
            src="~assets/images/mmcs-logo-cream.png"
            alt="Logo"
          />
        </a>
      </div>
      <div class="flex md:hidden">
        <button id="hamburger">
          <img
            class="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
          />
          <img
            class="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
          />
        </button>
      </div>
      <div
        class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none z-50"
      >
        <a
          href="#"
          class="block md:inline-block text-blue-900 hover:text-blue-500 px-6 py-3 border-b-2 border-blue-900 md:border-none text-semibold"
          >Home</a
        >
        <a
          href="#"
          class="block md:inline-block text-blue-900 hover:text-blue-500 px-6 py-3 border-b-2 border-blue-900 md:border-none text-semibold"
          >About</a
        >
        <a
          href="#"
          class="block md:inline-block text-blue-900 hover:text-blue-500 px-6 py-3 border-b-2 border-blue-900 md:border-none text-semibold"
          >Services</a
        >
        <a
          href="#"
          class="block md:inline-block text-blue-900 hover:text-blue-500 px-6 py-3 border-b-2 border-blue-900 md:border-none text-semibold"
          >Contact</a
        >
      </div>
      <a
        href="#"
        class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded z-50"
        >Get Started</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  // props: ['cartTotal'],
  data() {
    return {
      open: false,
      profile_open: false,
      cartOpen: false,
      scrollPosition: null,
      // price: window.globals.price
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  /* computed: {
    ...mapGetters({
      authenticated: 'authenticated',
      user: 'user',
    }),
  }, */
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    toggle() {
      this.open = !this.open
    },
    profile_toggle() {
      this.profile_open = !this.profile_open
    },
    open_cart() {
      this.cartOpen = !this.cartOpen
      console.log('Opened')
    },
    /* logout() {
      this.$auth.logout()
    }, */
  },
}
</script>
