$(document).ready(function () {
   // Slow down video
   document.querySelector('video').playbackRate = 0.7;

   // Counters increment
   var x = 0;
   $(window).scroll(function () {

      var oTop = $('#stats-counter').offset().top - window.innerHeight + 200;
      if (x == 0 && $(window).scrollTop() > oTop) {
         $('.stats-counter-value').each(function () {
            var $this = $(this),
               countTo = $this.attr('data-count');
            $({
               countNum: $this.text()
            }).animate({
               countNum: countTo
            },
               {
                  duration: 2000,
                  easing: 'swing',
                  step: function () {
                     $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                     $this.text(this.countNum);
                  }
               });
         });
         x = 1;
      }
   });


   // toggle testimonials
   document.addEventListener('alpine:init', () => {
      Alpine.store('accordion', {
         tab: 0
      });

      Alpine.data('accordion', (idx) => ({
         init() {
            this.idx = idx;
         },
         idx: -1,
         handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
         },
         handleRotate() {
            return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
         },
         handleToggle() {
            return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
         }
      }));
   })
});