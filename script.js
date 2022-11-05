loaderShowing = false;
loaded = false;

window.addEventListener('load', function () {
    scroller = document.querySelector('.outer-wrapper');
    scrollAdder();
    //Hide Loader when finished
    if (loaderShowing == true) {
        document.getElementsByClassName("loader")[0].setAttribute("class", "loaderHide")
    }
    loaded = true;
});

document.addEventListener('readystatechange', () => {
    if (document.readyState == 'interactive') {
        setTimeout(showLoader, 500);
    }
});

function showLoader() {
    if (loaded == false) {
        document.getElementsByClassName("loaderNoShow")[0].setAttribute("class", "loader")
        loaderShowing = true;
    }
}

function scrollAdder() {
    oldPage = 1;
    scroller.addEventListener('scroll', (event) => {
        //Get current user viewing page
        let currentScroll = scroller.scrollTop;
        let maxScroll = scroller.scrollWidth;
        currentPage = Math.round((currentScroll / maxScroll) * 10 / 2) + 1;

        if (currentPage != oldPage) {
            pageChanged(currentPage);
        }

        oldPage = currentPage

        //Parallax
        let cityBG = document.querySelector(".wrapper")
        let treeBG = document.querySelector(".wrapper02")
        cityBG.setAttribute('style', 'background-position: left ' + (currentScroll / maxScroll) * 250 + 'vw' + ' bottom;')
        treeBG.setAttribute('style', 'background-position: left ' + (currentScroll / maxScroll) * 150 + 'vw' + ' bottom;')
    });
}

function pageChanged(page) {
    //hide next button
    if (page == 5) {
        document.querySelector('.btnnextslide').style.visibility = 'hidden';
    }
    else {
        document.querySelector('.btnnextslide').style.visibility = 'visible';
    }
    //hide previous button
    if (page == 1) {
        document.querySelector('.btnpreviousslide').style.visibility = 'hidden';
    }
    else if (page > 1) {
        document.querySelector('.btnpreviousslide').style.visibility = 'visible';
    }
    //changecarousel
    for (let i = 1; i <= 5; i++) {
        circle = document.querySelector("#carouselDots").getElementById('circle' + i);
        if (i == page) {
            circle.setAttribute('class', 'active')
        }
        else {
            circle.setAttribute('class', 'grey')
        }
    }

}

//Go to page when click carousel dot
function gotoPage(page) {
    let pageWidth = scroller.scrollWidth / 5
    scroller.scrollTo(0, (page - 1) * pageWidth);
}

//BOB do something
function bob() {

}

function nextslide() {
    scroller.scrollBy(0, 1);
}
function previousslide() {
    scroller.scrollBy(0, -1);
}
function test() {
    console.log('Tested');
}

function dropdownbtn() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var app = new Vue({
    el: '#popup',
    data: {
        showingIMG: "",
        showingContent: "",
        showingPopup: false,
        "page1": [{ img: "", content: "" }],
        "page2": [{ img: "pic/character/Character (7).png", content: "เฮ้หนูมาดูนี่ซิ" }],
        "page3": [{ img: "", content: "" }],
        "page4": [{ img: "", content: "" }],
        "page5": [{ img: "", content: "" }],
        "page6": [{ img: "", content: "" }],
        "page7": [{ img: "pic/character/Character (7).png", content: "Lorem ipsum setyor 2 hor saikai khao jong jar len khun" },
        { img: "pic/character/Character (7).png", content: "ลุงคนนี้ก็ใจเกเรมาก" },
        { img: "pic/character/Character (7).png", content: "ลุงคนนี้ก็ใจเกเรมากๆเช่นกัน" }]
    },
    methods: {
        closePopup: function () {
            this.showingPopup = !this.showingPopup
        }
    }
})

var popupcontroller = new Vue({
    el: '#popupcontrol',
    methods: {
        showPopup: function (pageNum, popupNum) {
            //popupNum and pageNum correction
            popupNum -= 1
            pageNum = "page" + pageNum

            app.showingIMG = app[pageNum][popupNum].img
            app.showingContent = app[pageNum][popupNum].content
            app.showingPopup = !app.showingPopup
        }
    }
})

