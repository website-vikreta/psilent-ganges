// ===========================================================
// ! HEADER of the website
// ===========================================================
// Class
class WebsiteHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <header class="relative">
         <!-- top nav -->
         <aside class="bg-greyscale-1900 text-greyscale-200 pt-3 pb-6">
            <div class="container mx-auto hidden md:flex justify-between gap-20 text-xs leading-none">
               <ul class="flex items-center gap-6">
                  <li class="hover:text-primary-500 transition-colors duration-500">
                     <a href="#" class="flex items-center gap-2">
                        <span
                           class="block w-7 h-7 grid place-content-center rounded-full border border-greyscale-1000 text-[10px]">
                           <i class="bi bi-telephone-inbound-fill"></i>
                        </span>
                        <span>+91 88888 88888</span>
                     </a>
                  </li>
                  <li class="hover:text-primary-500 transition-colors duration-500">
                     <a href="#" class="flex items-center gap-2">
                        <span
                           class="block w-7 h-7 grid place-content-center rounded-full border border-greyscale-1000 text-[10px]">
                           <i class="bi bi-envelope-plus-fill"></i>
                        </span>
                        <span>engineering@psilentganges.com</span>
                     </a>
                  </li>
               </ul>

               <ul class="flex gap-2">
                  <li>
                     <a href="#"
                        class="block w-7 h-7 grid place-content-center rounded-full border border-greyscale-1000 text-[10px] hover:text-primary-500 transition-colors duration-500"
                        aria-label="Connect with us on Linkedin" rel="noopener">
                        <i class="bi bi-linkedin"></i>
                     </a>
                  </li>
                  <li>
                     <a href="#"
                        class="block w-7 h-7 grid place-content-center rounded-full border border-greyscale-1000 text-[10px] hover:text-primary-500 transition-colors duration-500"
                        aria-label="Follow us on Twitter" rel="noopener">
                        <i class="bi bi-twitter"></i>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>
         <!-- main nav -->
         <nav class="navbar container mx-auto absolute top-[calc(100%-12px)] left-2/4 -translate-x-2/4 z-50 w-full">
            <div
               class="relative bg-greyscale-100 rounded-lg flex justify-between lg:justify-start gap-5 xl:gap-10 items-stretch ">
               <!-- checkbox -->
               <input type="checkbox" class="hidden" id="navbarToggle">
               <!-- Logo -->
               <div
                  class="logo grid place-content-center bg-greyscale-300 py-4 xl:py-5 pl-6 xl:pl-8 pr-12 xl:pr-16 rounded-tl-lg rounded-bl-lg">
                  <a href="./index.html">
                     <img src="./assets/img/logo.svg" alt="Psilent Logo" class="max-h-7 lg:max-h-8">
                  </a>
               </div>
               <!-- toggle -->
               <label for="navbarToggle"
                  class="cursor-pointer lg:hidden p-6 md:p-4 md:px-5 grid place-content-center text-3xl">
                  <i class="bi bi-list"></i>
               </label>
               <!-- Links -->
               <ul
                  class="navMenu absolute hidden top-[130%] w-[100%] z-50 bg-greyscale-100 rounded-lg p-10 lg:relative lg:p-0 lg:bg-transparent lg:w-fit mr-auto flex flex-col lg:flex-row items-stretch gap-8 font-medium">
                  <li>
                     <a href="./index.html"
                        class="block h-full grid place-content-center hover:text-primary-500 transition-colors duration-300">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="./about.html"
                        class="block h-full grid place-content-center hover:text-primary-500 transition-colors duration-300">
                        About Us
                     </a>
                  </li>
                  <li>
                     <a href="./solutions.html"
                        class="block h-full grid place-content-center hover:text-primary-500 transition-colors duration-300">
                        Solutions
                     </a>
                  </li>
                  <li>
                     <a href="./contact.html"
                        class="block h-full grid place-content-center hover:text-primary-500 transition-colors duration-300">
                        Contact Us
                     </a>
                  </li>
               </ul>
               <!-- CTA -->
               <a href="./contact.html"
                  class="hidden lg:flex bg-primary-500 py-5 xl:py-6 px-8 xl:px-10 font-medium rounded-tr-lg rounded-br-lg whitespace-nowrap justify-center items-center gap-2 hover:bg-primary-300 transition-colors duration-500">
                  <span>Get a free quote</span>
                  <i class="bi bi-arrow-right"></i>
               </a>
            </div>
         </nav>
      </header>
      `;
   }
}
// Rendering
customElements.define('website-header', WebsiteHeader);


const currentURL = location.pathname;
const navLinks = document.querySelectorAll(".navbar .navMenu li a");
// const currentURL = location.pathname.replace('/budget-renovations', '');
navLinks.forEach(link => {
   if (link.getAttribute('href').split("/")[1] == currentURL.split("/")[1]) {
      link.classList.toggle("active");
   }
});