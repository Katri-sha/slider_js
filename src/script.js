let imgArray = [
    {url: 'img/image_1.png',
    name: 'Rostov-on-Don, Admiral'},
    {url: 'img/image_2.png',
    name: 'Sochi Thieves'},
    {url: 'img/image_3.png',
    name: 'Rostov-on-Don Patriotic'}
]
    
function showSlider() {
    const showDiv = document.querySelector(".show-img");
    const showLink = document.querySelector(".link");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const points = document.querySelector(".points");
    
    if (imgArray.length) {
        let currentIndex = 0;
        arrowLeft.innerHTML = `<a class = "arrow">
            <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63807 13.276L2.29917e-05 6.638L6.63807 -3.82298e-05L7.58563 0.94753L1.89516 6.638L7.58563 12.3285L6.63807 13.276Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.94758 5.9681L41.4556 5.9681L41.4556 7.30817L0.94758 7.30816L0.94758 5.9681Z" fill="white"/>
            </svg>
            </a>`;
        arrowRight.innerHTML = `
            <a class = "arrow">
            <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0451 -0.000183105L41.6831 6.63786L35.0451 13.2759L34.0975 12.3283L39.788 6.63786L34.0975 0.947384L35.0451 -0.000183105Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.7355 7.30776L0.227539 7.30776L0.227539 5.9677L40.7355 5.9677L40.7355 7.30776Z" fill="white"/>
            </svg>
            </a>`;
    
        imgArray.forEach((value, index) => {
            let link = `
                <a class = "link-text ${
                index === currentIndex ? "active" : ""
                }">${imgArray[index].name}</a>`;
            showLink.innerHTML += link;
            let imageDiv = `<div class="images ${
                index === currentIndex ? "active" : ""
                }" style="background-image:url(${imgArray[index].url});"></div>`;
            showDiv.innerHTML += imageDiv;
            let point = `
                <a class = "point">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect class = "point rect ${
                index === currentIndex ? "active" : ""
                }" x="1" y="5" width="9" height="9" rx="4.78333" fill="rgba(255, 255, 255, 0.3)" />
                </svg>
                </a>`;
            points.innerHTML += point;
        });
        const sliderImages = showDiv.querySelectorAll(".images");
        const sliderLink = showLink.querySelectorAll(".link-text");
        const sliderPoints = points.querySelectorAll(".point.rect");
    
        arrowLeft.addEventListener("click", () => {
            removeClass(currentIndex);
            if (currentIndex === 0) {
                currentIndex = imgArray.length - 1;
            } else {
                currentIndex--;
            }
            addClass (currentIndex);
        });
    
        arrowRight.addEventListener("click", () => {
            removeClass(currentIndex);
            if (currentIndex === imgArray.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            addClass (currentIndex);
        });
    
        sliderLink.forEach((link, index) => {
            link.addEventListener('click', () => {
                removeClass(currentIndex);
                currentIndex = index;
                addClass (currentIndex);
            })
        })
    
        sliderPoints.forEach((point, index) => {
            point.addEventListener('click', () => {
                removeClass(currentIndex);
                currentIndex = index;
                addClass (currentIndex);
            })
        })
    
        function removeClass(currentIndex) {
            sliderImages[currentIndex].classList.remove("active");
            sliderLink[currentIndex].classList.remove("active");
            sliderPoints[currentIndex].classList.remove("active");
        }
    
        function addClass(currentIndex) {
            sliderImages[currentIndex].classList.add("active");
            sliderLink[currentIndex].classList.add("active");
            sliderPoints[currentIndex].classList.add("active");
        }
    } else {
        showDiv.innerHTML = `<span class = 'not-image'>Images not found</span>`;
    }
}
window.addEventListener("DOMContentLoaded", showSlider);



