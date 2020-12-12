<template>
  <footer class="bg-gray-900 text-white">
    <section class="container mx-auto flex justify-between p-6 py-12">
      <section class="flex flex-wrap justify-between w-full">
        <section class="w-full lg:w-auto md:w-auto p-3 ml-0 mb-6">
          <the-logo />
        </section>
        <section class="flex-auto mr-auto p-3">
          <section class="w-full lg:justify-evenly flex flex-wrap">
            <section class="mb-6 px-3 w-full md:w-1/2 lg:w-1/2">
              <header>
                <h3 class="font-head text-xl">Contact</h3>
              </header>
              <ul class="my-4 block font-light">
                <li class="mb-3">
                  <span>Nigeria, Rivers state, Port Harcourt</span>
                </li>
                <li class="mb-3">
                  <span
                    ><strong>Telephone</strong
                    ><span> +234 812 006 1708</span></span
                  >
                </li>
                <li class="mb-3">
                  <span
                    ><strong>E-mail</strong>:
                    <a href="mailto:chelpiinc@gmail.com"
                      >chelpiinc@gmail.com</a
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="mb-6 px-3 w-full md:w-1/2 lg:w-1/2">
              <header>
                <h3 class="font-head text-xl">Meals</h3>
              </header>
              <ul class="my-4 block font-light">
                <li class="mb-3"><a href="#">Top Chefs</a></li>
                <li class="mb-3"><a href="#">Top Meals</a></li>
                <li class="mb-3"><a href="#">Explore Meals</a></li>
                <li class="mb-3"><a href="#">Contact us</a></li>
              </ul>
            </section>
          </section>
        </section>
        <section class="p-3">
          <h3 class="font-head text-xl">Follow Us</h3>
          <ul class="social-icons flex items-center space-x-3 my-3">
            <li class="text-gray-400 relative">
              <a
                class="chelpi-icon icon-facebook icon-xl bg-opacity-50 flex items-center justify-center relativew-10 w-10 h-10"
                href="#"
                ><span></span
              ></a>
            </li>
            <li class="text-gray-400 relative">
              <a
                class="chelpi-icon icon-instagram icon-xl flex items-center justify-center relativew-10 w-10 h-10"
                href="#"
                ><span></span
              ></a>
            </li>
            <li class="text-gray-400 relative">
              <a
                class="rounded-full chelpi-icon icon-twitter icon-xl bg-opacity-50 flex items-center justify-center relativew-10 w-10 h-10"
                href="#"
                ><span></span
              ></a>
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
