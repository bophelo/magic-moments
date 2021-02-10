<template>
  <div>
    <section class="flex relative bg-white md:pb-20">
      <div
        class="flex items-center h-screen text-center px-8 md:px-12 lg:w-1/2 shadow"
      >
        <div class="flex-wrap">
          <nav
            class="flex flex-wrap items-center justify-between p-2 bg-white z-50"
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
          <main
            class="mt-12 mx-auto w-full px-4 sm:px-6 md:mt-10 lg:mt-24 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-center">
              <h2
                class="text-4xl tracking-tight leading-10 font-semibold text-navy-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Magic Moments
                <br class="xl:hidden" />
                <span class="text-teal-600">Consulting</span>
                <span>&amp;</span>
                <span class="text-pink-600">Services</span>
              </h2>
              <p
                class="my-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-3xl lg:mx-0 text-center"
              >
                Your Growth is our Passion.
              </p>
              <div class="h-1 w-20 mx-auto bg-teal-500 rounded"></div>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 text-center"
              >
                Creating Value and Strategic Growth through Contextual Planning
                &amp; Care.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <a
                  href="#"
                  class="mt-6 mb-12 md:mb-0 md:mt-0 inline-block py-3 px-8 text-gray-700 rounded-lg shadow border-2 border-orange-500 hover:bg-orange-500 hover:text-white"
                  >Learn More</a
                >
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2">
        <img
          src="~/assets/images/hero.png"
          alt=""
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full md:py-5"
        />
      </div>
    </section>
    <section class="relative bg-white md:py-20 px-8 py-8 md:px-20 px-8 py-8">
      <div class="text-center lg:text-center">
        <p
          class="text-lg leading-6 text-pink-500 font-semibold tracking-wide uppercase"
        >
          Hello,
        </p>
        <h3
          class="mt-2 text-3xl leading-8 font-semibold tracking-tight text-teal-500 sm:text-4xl sm:leading-10"
        >
          About Us
        </h3>
        <hr class="border-b-2 w-32 m-auto my-6" />
        <p class="my-8 max-w-4xl text-2xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div class="flex flex-col w-full md:flex-row">
        <div
          class="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24"
        >
          <h4
            class="my-2 text-3xl leading-8 font-semibold tracking-tight text-pink-500 sm:text-3xl sm:leading-10"
          >
            Our Approach
          </h4>
          <div class="h-1 my-6 w-20 mx-auto bg-teal-500 rounded"></div>
          <ul
            class="md:list-disc lg:list-disc text-center text-gray-500 sm:list-none leading-loose"
          >
            <li>
              At all times we aim at providing services, which are consistent
              with our clients’ requirements and long term needs. We provide
              clear, immediate, concise and timely advice, which is directed at
              identifying the simplest and most cost- effective route to
              achieving our clients’ objectives.
            </li>
            <li>
              We analyze our clients’ needs and develop methodologies that suit
              the environment in which they operate. In doing so we also help
              our clients take advantage of opportunity while protecting them
              from risk.
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 rounded-full">
          <img src="~assets/images/scrum.svg" alt="" class="w-auto mx-auto" />
        </div>
      </div>

      <div class="flex flex-col w-full md:flex-row">
        <div class="w-full md:w-1/2 rounded-full">
          <img
            src="~assets/images/ideation.svg"
            alt=""
            class="w-auto mx-auto"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24"
        >
          <h4
            class="my-2 text-3xl leading-8 font-semibold tracking-tight text-pink-500 sm:text-3xl sm:leading-10"
          >
            Our Philosophy
          </h4>
          <div class="h-1 my-6 w-20 mx-auto bg-teal-500 rounded"></div>
          <ul
            class="md:list-disc lg:list-disc text-center text-gray-500 sm:list-none leading-loose"
          >
            <li>
              Our philosophy is that the role of a solutions design is to do
              more than provide technical advice. We combine analysis of
              technology issues with a flexible, commercial and business-like
              approach as to how those issues should be addressed. We believe it
              is a part to be proactive and to participate in commercial and
              financial discussions, and not merely to advice on technical
              operations alone.
            </li>
            <li>
              We are committed to providing an efficient and economical high
              quality service, which represents value for money in all respects.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="relative bg-white md:py-20 px-8 py-8 md:px-20 px-8 py-8">
      <div class="text-center lg:text-center">
        <p
          class="text-lg leading-6 text-pink-600 font-semibold tracking-wide uppercase"
        >
          How We Help,
        </p>
        <h3
          class="mt-2 text-3xl leading-8 font-semibold tracking-tight text-teal-600 sm:text-4xl sm:leading-10"
        >
          Services
        </h3>
        <hr class="border-b-2 w-32 m-auto my-2" />
        <p class="my-8 max-w-4xl text-2xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div class="flex flex-wrap -m-4 my-32">
        <div
          class="xl:w-1/3 md:w-1/2 p-4 mx-auto bg-white px-5 pt-5 md:pb-10 pb-32 text-gray-800"
        >
          <div class="w-full">
            <div class="overflow-hidden w-48 h-48 -mt-24 mx-auto">
              <img
                src="~assets/images/student.svg"
                class="w-40 h-40 mx-auto"
                alt="logo"
              />
            </div>
          </div>
          <div class="w-full mb-2">
            <h2
              class="text-gray-900 text-lg text-center title-font font-medium mb-3"
            >
              Students
            </h2>
            <ul class="list-none flex p-5 m-5 leading-loose text-lg">
              <div class="mx-auto">
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Personalised Tutoring
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Workshops
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Online Courses
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Webinars
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Contextual Learning Management
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Education Management
                </li>
              </div>
            </ul>
          </div>
          <div class="flex">
            <a
              href="#"
              class="my-6 inline-block py-3 px-8 text-gray-700 rounded-lg shadow border-2 border-red-500 hover:bg-red-500 hover:text-white text-center mx-auto"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path></svg
            ></a>
          </div>
        </div>
        <div
          class="xl:w-1/3 md:w-1/2 p-4 mx-auto bg-white px-5 pt-5 md:pb-10 pb-32 text-gray-800"
        >
          <div class="w-full">
            <div class="overflow-hidden w-48 h-48 -mt-24 mx-auto">
              <img
                src="~assets/images/teacher.svg"
                class="w-40 h-40 mx-auto"
                alt="logo"
              />
            </div>
          </div>
          <div class="w-full mb-2">
            <h2
              class="text-gray-900 text-lg text-center title-font font-medium mb-3"
            >
              Educators
            </h2>
            <ul class="list-none flex p-5 m-5 leading-loose text-lg">
              <div class="mx-auto">
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Professional Development
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Workshops
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Online Courses
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Webinars
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Teacher Support
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Education Management
                </li>
              </div>
            </ul>
          </div>
          <div class="flex">
            <a
              href="#"
              class="my-6 inline-block py-3 px-8 text-gray-700 rounded-lg shadow border-2 border-red-500 hover:bg-red-500 hover:text-white text-center mx-auto"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path></svg
            ></a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="xl:w-1/3 md:w-1/2 p-4 mx-auto bg-white px-5 pt-5 md:pb-10 pb-32 text-gray-800"
        >
          <div class="w-full">
            <div class="overflow-hidden w-48 h-48 -mt-24 mx-auto">
              <img
                src="~assets/images/school.svg"
                class="w-40 h-40 mx-auto"
                alt="logo"
              />
            </div>
          </div>
          <div class="w-full mb-2">
            <h2
              class="text-gray-900 text-lg text-center title-font font-medium mb-3"
            >
              Schools
            </h2>
            <ul class="list-none flex m-5 leading-loose text-lg">
              <div class="mx-auto">
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Team Building
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Leadership Development
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Strategic Planning
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Webinars
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Contextual Learning Management
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Education Management
                </li>
              </div>
            </ul>
          </div>
          <div class="flex">
            <a
              href="#"
              class="my-6 inline-block py-3 px-8 text-gray-700 rounded-lg shadow border-2 border-red-500 hover:bg-red-500 hover:text-white text-center mx-auto"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path></svg
            ></a>
          </div>
        </div>
        <div
          class="xl:w-1/3 md:w-1/2 p-4 mx-auto bg-white px-5 pt-5 md:pb-10 pb-32 text-gray-800"
        >
          <div class="w-full">
            <div class="overflow-hidden w-48 h-48 -mt-24 mx-auto">
              <img
                src="~assets/images/corporate.svg"
                class="w-40 h-40 mx-auto"
                alt="logo"
              />
            </div>
          </div>
          <div class="w-full mb-2">
            <h2
              class="text-gray-900 text-lg text-center title-font font-medium mb-3"
            >
              Corporates
            </h2>
            <ul class="list-none flex p-5 m-5 leading-loose text-lg">
              <div class="mx-auto">
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Team Building
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Leadership Development
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Strategic Planning
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Webinars
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Contextual Learning Management
                </li>
                <li class="px-2 flex items-start mb-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="mr-2 text-blue-500 fill-current h-8 min-w-8"
                  >
                    <path
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    ></path>
                  </svg>
                  Education Management
                </li>
              </div>
            </ul>
          </div>
          <div class="flex">
            <a
              href="#"
              class="my-6 inline-block py-3 px-8 text-gray-700 rounded-lg shadow border-2 border-red-500 hover:bg-red-500 hover:text-white text-center mx-auto"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path></svg
            ></a>
          </div>
        </div>
      </div>
    </section>
    <section
      class="md:py-20 px-8 py-8 md:px-20 px-8 py-8 bg-white animation-fade animation-delay"
    >
      <div class="container w-full mx-auto mb-24">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <p
              class="text-base leading-6 text-pink-600 font-semibold tracking-wide uppercase"
            >
              Say Hi,
            </p>
            <h3
              class="mt-2 text-3xl leading-8 font-semibold tracking-tight text-teal-600 sm:text-4xl sm:leading-10"
            >
              Contact Us
            </h3>
            <hr class="border-b-2 w-32 m-auto my-2" />
          </div>
        </div>
      </div>
      <div class="container h-full max-w-5xl mx-auto overflow-hidden">
        <div class="h-full sm:flex">
          <aside class="w-full p-10 rounded-none sm:rounded md:w-1/2 bg-white">
            <p class="mt-2 mb-5 text-sm text-gray-600 text-center">
              You can find our contact info below or you can feel free to leave
              us a quick message in the form.
            </p>
            <div class="flex">
              <div class="mx-auto">
                <div class="flex items-start py-3 pt-5">
                  <div class="flex-shrink">
                    <div
                      class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-cream-300 text-indigo-500 mb-5 flex-shrink-0"
                    >
                      <img
                        src="~assets/images/mail.svg"
                        class="w-16"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="flex-grow ml-10 md:ml-5 py-5 text-center">
                    <div class="text-base font-medium mb-">Email Address</div>
                    <span class="text-gray-800 text-md"
                      >info@magicmoments.io</span
                    >
                  </div>
                </div>
                <div class="flex items-start py-3 pt-5">
                  <div class="flex-shrink">
                    <div
                      class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-cream-300 text-indigo-500 mb-5 flex-shrink-0"
                    >
                      <img
                        src="~assets/images/social.svg"
                        class="w-16"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="flex-grow ml-10 md:ml-5 py-5 text-center">
                    <div class="text-base font-medium">Social</div>
                    <div class="flex-grow py-2">
                      <div
                        class="flex text-white text-md sm:text-gray-600 mx-auto"
                      >
                        <a href="#" class="text-gray-400 hover:text-gray-800">
                          <span class="sr-only">Facebook</span>
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          class="ml-3 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Instagram</span>
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          class="ml-3 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Twitter</span>
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          class="ml-3 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">GitHub</span>
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div
            class="flex items-center justify-center w-full p-10 shadow rounded-lg bg-cream-300 md:w-1/2"
          >
            <form class="w-full" onsubmit="return false">
              <div class="pb-3">
                <input
                  class="w-full px-5 py-3 border border-gray-400 rounded-lg outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value=""
                />
              </div>
              <div class="py-3">
                <input
                  class="w-full px-5 py-3 border border-gray-400 rounded-lg outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value=""
                />
              </div>
              <div class="py-3">
                <textarea
                  row="4"
                  class="w-full h-40 px-5 py-3 border border-gray-400 rounded-lg outline-none focus:shadow-outline"
                  name="message"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  class="my-6 inline-block py-3 px-8 text-gray-700 rounded-lg shadow border-2 border-red-500 hover:bg-red-500 hover:text-white"
                >
                  Send Message
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
