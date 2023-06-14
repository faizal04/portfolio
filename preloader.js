
gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
    opacity: 0,
    duration: 1,
    delay: 3.5,
    }
    );
    gsap.fromTo(".logoname",
    {
    y: 50,
    opacity: 0,
    },
    {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,}
    );

    gsap.fromTo(
        "#container",
        { opacity: 1 },
        {
        opacity: 0,
        duration: 1.5,
        delay: 5.5,
        }
        );

    // setTimeout(function() {
    //     var container = document.getElementById('container');
    //     container.parentNode.removeChild(container);
    // }, 4500);
