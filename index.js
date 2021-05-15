document.addEventListener("DOMContentLoaded", function() {
    // instance of the intersection observer. 
    // entries: array the elements that are within the browser’s viewport. 
    // imgObserver: An instance of the IntersectionObserver
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {         
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // store img element in LazyImage variable
                const lazyImage = entry.target
                console.log("lazy loading ", lazyImage)
                // replace the src with data-src
                lazyImage.src = lazyImage.dataset.src
            }
        })
    });
    const arr = document.querySelectorAll('img.lzy_img') //create an array of each img tag that has the lzy_img class
    arr.forEach((v) => {        //run the function for each img tag in the array
        imageObserver.observe(v);
    })
})