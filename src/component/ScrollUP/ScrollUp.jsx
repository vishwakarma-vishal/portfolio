import './ScrollUp.css';

export default function ScrollUp() {
    // //logic to show scroll up button
    // const scrollThreshold = window.innerHeight; // 100vh

    // window.addEventListener("scroll", function () {
    //     const scrollUp = document.querySelector(".scrollup");

    //     // Check if the scroll position is beyond the threshold (100vh)
    //     if (window.scrollY >= scrollThreshold) {
    //         scrollUp.classList.add("show-scroll");
    //     } else {
    //         scrollUp.classList.remove("show-scroll");
    //     }
    // });



    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const isMobile = window.innerWidth <= 768; // Adjust this value based on your mobile device breakpoint

        const scrollUp = document.querySelector(".scrollup");
        // Thresholds for mobile and desktop
        const desktopThreshold = 300;
        const threshold = isMobile ? window.innerHeight * 5 : desktopThreshold;

        if (scrollY >= threshold) {
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    });

    return (
        <a href="#" className="scrollup">
            <i class="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}