window.addEventListener('load', function () {
    scroller = document.querySelector('.outer-wrapper');
    scrollAdder();
});

function scrollAdder() {
    oldPage = 1;
    scroller.addEventListener('scroll', (event) => {
        //Get current user viewing page
        let currentScroll = scroller.scrollTop;
        let maxScroll = scroller.scrollWidth;
        currentPage = parseInt((currentScroll / maxScroll) * 10 / 2) + 1;

        if (currentPage!=oldPage){
            pageChanged(currentPage);
        }

        oldPage = currentPage

        //Parallax
        let cityBG = document.querySelector(".wrapper")
        let treeBG = document.querySelector(".wrapper02")
        cityBG.setAttribute('style', 'background-position: left '+ (currentScroll/maxScroll)*250 +'vw'+ ' bottom;')
        treeBG.setAttribute('style', 'background-position: left '+ (currentScroll/maxScroll)*150 +'vw'+ ' bottom;')
    });
}

function pageChanged(page){
    //hide next button
    if(page == 5){
        document.querySelector('.btnnextslide').style.visibility= 'hidden';
    }
    else{
        document.querySelector('.btnnextslide').style.visibility = 'visible';
    }
    //hide previous button
    if(page == 1){
        document.querySelector('.btnpreviousslide').style.visibility= 'hidden';
    }
    else if (page > 1){
        document.querySelector('.btnpreviousslide').style.visibility = 'visible';
    }
    //changecarousel
   for(let i = 1;i<=5 ;i++){
    circle = document.querySelector("#carouselDots").getElementById('circle'+i);
    if(i == page){
       circle.setAttribute('class','active')
    }
    else{
        circle.setAttribute('class', 'grey')
    }
   }
    
}

//Go to page when click carousel dot
function gotoPage(page){
    let pageWidth = scroller.scrollWidth/5
    scroller.scrollTo(0, (page-1)*pageWidth);
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
function test(){
    console.log('Tested');
}

function dropdownbtn() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
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