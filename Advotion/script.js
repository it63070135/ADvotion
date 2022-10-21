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
    });
}

function pageChanged(page){
    console.log('Page Changed!!!')
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
    circle = document.querySelector(".carousel").getSVGDocument().getElementById('circle'+i);
    if(i == page){
       circle.setAttribute('class','active')
    }
    else{
        circle.setAttribute('class', 'grey')
    }
   }
    
}

//BOB do something
function bob() {
    john = document.querySelector(".carousel").getSVGDocument().getElementById('circle2');
    john.setAttribute("class", "active");
    console.log(john)
}
function nextslide() {
    scroller.scrollBy(0, 1);
}
function previousslide() {
    scroller.scrollBy(0, -1);
}
