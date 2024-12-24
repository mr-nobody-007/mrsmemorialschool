// const marquee = document.getElementById("recent-events");
// const ul = marquee.querySelector("ul");
// let isScrolling = false; // Track manual scrolling
// let autoScrollInterval;

// function startAutoScroll() {
//     autoScrollInterval = setInterval(() => {
//         const top = marquee.scrollTop;
//         marquee.scrollTop = top + 1;

//         // Restart scrolling if content reaches the end
//         if (marquee.scrollTop >= ul.offsetHeight - marquee.offsetHeight) {
//             marquee.scrollTop = 0;
//         }
//     }, 20);
// }

// function stopAutoScroll() {
//     clearInterval(autoScrollInterval);
// }

// // Detect manual scroll
// marquee.addEventListener("touchstart", stopAutoScroll);
// marquee.addEventListener("touchmove", () => {
//     isScrolling = true;
// });
// marquee.addEventListener("touchend", () => {
//     if (isScrolling) {
//         isScrolling = false;
//         startAutoScroll(); // Resume auto-scrolling after manual scroll
//     }
// });

// // For desktop (mouse scrolling)
// marquee.addEventListener("mouseenter", stopAutoScroll);
// marquee.addEventListener("mouseleave", startAutoScroll);

// // Initialize auto-scroll
// startAutoScroll();
