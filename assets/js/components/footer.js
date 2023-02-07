// ===========================================================
// ! HEADER of the website
// ===========================================================
// Class
class WebsiteFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <footer>
         <!-- CTA -->
         <section class="cta">
            <div class="content-wrapper">
               <div class="container mx-auto py-16">
                  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-20">
                     <div class="content max-w-[550px]">
                        <h2 class="heading heading-2">Get in touch with us</h2>
                        <p class="mt-4">
                           Can't find the solution you're looking for? We can help. Our team of experts is on hand to
                           answer your questions.
                        </p>
                     </div>
                     <div class="flex flex-wrap gap-4">
                        <a href="./contact.html" class="btn btn-primary   lg:min-w-[250px]">
                           <i class="bi bi-arrow-up-right-circle"></i>
                           <span>Contact Us</span>
                        </a>
                        <a href="./about.html" class="btn btn-secodary   lg:min-w-[250px]"><span>Read more about
                              us</span></a>
                     </div>
                  </div>
               </div>
            </div>
            <!-- creating whitespace border in bottom -->
            <div class="h-[8vh] xl:max-h-[80px]"></div>
         </section>
         <!-- footer -->
         <div class="footer bg-greyscale-1900 text-greyscale-200 py-16">
            <div
               class="container mx-auto flex flex-col md:flex-row lg:justify-between md:flex-wrap lg:flex-nowrap gap-10 md:gap-x-20 lg:gap-20">
               <div class="company gap-3">
                  <img class="max-h-8 w-fit" src="./assets/img/logo_orange.svg" alt="Footer Logo">
                  <p class="text-sm mt-3 max-w-[500px] opacity-80">
                     <b>Psilent Ganges</b> brings expert engineering, planning, design, management and <b>consultancy
                        skills</b>
                     to a
                     wide range of construction and Project management solutions, with office in Thane, Maharashtra.
                  </p>
               </div>
               <div class="links flex gap-20 whitespace-nowrap	">
                  <ul class="flex flex-col gap-1">
                     <li>
                        <h3 class="text-md font-bold font-inter mb-2">Quick Links</h3>
                     </li>
                     <li>
                        <a href="./index.html"
                           class="transition-colors duration-500 hover:text-primary-500 text-sm opacity-80 hover:opacity-100 underline">
                           Home
                        </a>
                     </li>
                     <li>
                        <a href="./about.html"
                           class="transition-colors duration-500 hover:text-primary-500 text-sm opacity-80 hover:opacity-100 underline">
                           About Us
                        </a>
                     </li>
                     <li>
                        <a href="./contact.html"
                           class="transition-colors duration-500 hover:text-primary-500 text-sm opacity-80 hover:opacity-100 underline">
                           Contact Us
                        </a>
                     </li>
                  </ul>
                  <ul class="flex flex-col gap-1">
                     <li>
                        <h3 class="text-md font-bold font-inter mb-2">Our Services</h3>
                     </li>
                     <li>
                        <a href="./project-management.html"
                           class="transition-colors duration-500 hover:text-primary-500 text-sm opacity-80 hover:opacity-100 underline">
                           Project Management
                        </a>
                     </li>
                     <li>
                        <a href="./construction-management.html"
                           class="transition-colors duration-500 hover:text-primary-500 text-sm opacity-80 hover:opacity-100 underline">
                           Construction Management
                        </a>
                     </li>
                     <li>
                        <a href="./under-construction.html"
                           class="transition-colors duration-500 hover:text-primary-500 text-sm opacity-80 hover:opacity-100 underline">
                           Miscellaneous Services
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="social">
                  <h3 class="text-md font-bold font-inter mb-2">Follow Us</h3>
                  <ul class="flex gap-2">
                     <li>
                        <a href="#"
                           class=" flex items-center justify-center gap-2 h-10 px-4 bg-primary-500 transition-colors duration-500 hover:bg-primary-300"
                           aria-label="Connect with us on Linkedin" rel="noopener">
                           <i class="bi bi-linkedin"></i> <span class="text-sm font-medium font-inter">Linkedin</span>
                        </a>
                     </li>
                     <li>
                        <a href="#"
                           class=" flex items-center justify-center gap-2 h-10 px-4 bg-primary-500 transition-colors duration-500 hover:bg-primary-300"
                           aria-label="Follow us on Twitter" rel="noopener">
                           <i class="bi bi-twitter"></i> <span class="text-sm font-medium font-inter">Twitter</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <!-- copyright -->
         <div class="copyright bg-black py-4 text-greyscale-500 text-sm">
            <div class="container mx-auto flex justify-between flex-wrap gap-1">
               <p>&copy; 2023. All Rights Reserved</p>
               <p>
                  Designed & Developed by
                  <a href="https://www.websitevikreta.com" target="_blank" class="text-primary-500 hover:underline">Website
                     Vikreta</a>
               </p>
            </div>
         </div>

         <!-- back to top -->
         <a href="#"
            class="gototop btn btn-primary fixed p-3 md:w-fit md:h-fit w-[30px] h-[30px] bottom-[20px] right-[20px] md:bottom-[20px] md:right-[20px] invisible opacity-0 transition-opacity duration-500"
            id="gototop" title="Go to Top">
            <i class="bi bi-chevron-up"></i>
         </a>
      </footer>
      `;
   }
}
// Rendering
customElements.define('website-footer', WebsiteFooter);