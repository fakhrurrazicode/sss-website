console.log("index.js loaded");

$(function () {
    $(".sss-accordion .sss-accordion-item .sss-accordion-header").on(
        "click",
        function (e) {
            e.stopPropagation();
            var collapse = $(this).parent().attr("data-collapse");

            if (collapse == "true") {
                $(this).parent().attr("data-collapse", "false");
            }

            if (collapse == "false") {
                $(this).parent().attr("data-collapse", "true");
            }

            console.log(collapse);
            // $(this).parent().data("collapse").trigger("changeData");
        }
    );
});

window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;

    // let screenHeight = window.screen.height;
    // let navigation = document.querySelector(".navigation");

    // let navigationScrollTop = navigation.scrollTop;
    // console.log("navigationScrollTop", navigationScrollTop);

    // if (scrollY >= screenHeight) {
    //     console.log(scrollY, screenHeight, "animate");

    //     // navigation.classList.remove("absolute");
    //     // navigation.classList.remove("bottom-0");

    //     // navigation.classList.add("top-0");
    //     // navigation.classList.add("fixed");
    //     // navigation.classList.add("z-50");
    //     // navigation.classList.add("bg-gray-900");
    //     // navigation.classList.add("bg-opacity-70");
    // } else {
    //     console.log(scrollY, screenHeight);
    //     // navigation.classList.add("absolute");
    //     // navigation.classList.add("bottom-0");

    //     // navigation.classList.remove("top-0");
    //     // navigation.classList.remove("fixed");
    //     // navigation.classList.remove("z-50");
    //     // navigation.classList.remove("bg-gray-900");
    //     // navigation.classList.remove("bg-opacity-70");
    // }
});
