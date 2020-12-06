<template>
  <footer class="bg-gray-900 text-white">
    <section class="container mx-auto flex justify-between p-6 py-12">
      <section class="flex flex-wrap justify-between w-full">
        <section class="p-3 ml-0 mb-6">
          <the-logo />
        </section>
        <section class="flex-auto mr-auto p-3">
          <section class="w-full justify-evenly flex flex-wrap">
            <section class="mb-6 px-3">
              <h3>Contact</h3>
              <ul class="my-4 block">
                <li class="mb-3">
                  <span>Nigeria, Rivers state, Port Harcourt</span>
                </li>
                <li class="mb-3">
                  <span>Telephone: +234 812 006 1708</span>
                </li>
                <li class="mb-3">
                  <span>E-mail: chelpiinc@gmail.com</span>
                </li>
              </ul>
            </section>
            <section class="mb-6 px-3">
              <header>
                <h3>Meals</h3>
              </header>
              <ul class="my-4 block">
                <li class="mb-3">Top Chefs</li>
                <li class="mb-3">Top Meals</li>
                <li class="mb-3">Explore Meals</li>
                <li class="mb-3">Contact us</li>
              </ul>
            </section>
          </section>
        </section>
        <section class="p-3">
          <h3>Follow Us</h3>
          <ul class="social-icons flex items-center space-x-3 my-3">
            <li
              class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 relative"
            >
              <span>f</span>
            </li>
            <li
              class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 relative"
            >
              <span>f</span>
            </li>
            <li
              class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 relative"
            >
              <span>f</span>
            </li>
            <li
              class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 relative"
            >
              <span>f</span>
            </li>
          </ul>
        </section>
      </section>
    </section>
    <hr />
    <section class="container mx-auto flex justify-between p-6">
      <section>
        <p>Copyright &copy; 2020 Chelpi. All Rights Reserved.</p>
      </section>

      <!-- <section>
        <a href="mailto:chelpiinc@gmail.com" target="_blank"
          >chelpiinc@gmail.com</a
        >
      </section> -->
    </section>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>