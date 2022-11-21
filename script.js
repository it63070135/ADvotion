loaderShowing = false;
loaded = false;

window.addEventListener("load", function () {
  scroller = document.querySelector(".outer-wrapper");
  scrollAdder();
  //Hide Loader when finished
  if (loaderShowing == true) {
    document
      .getElementsByClassName("loader")[0]
      .setAttribute("class", "loaderHide");
  }
  loaded = true;
});

document.addEventListener("readystatechange", () => {
  if (document.readyState == "interactive") {
    setTimeout(showLoader, 500);
  }
});

function showLoader() {
  if (loaded == false) {
    document
      .getElementsByClassName("loaderNoShow")[0]
      .setAttribute("class", "loader");
    loaderShowing = true;
  }
}

function scrollAdder() {
  oldPage = 1;
  scroller.addEventListener("scroll", (event) => {
    //Get current user viewing page
    let currentScroll = scroller.scrollTop;
    let maxScroll = scroller.scrollWidth;
    currentPage = Math.round(((currentScroll / maxScroll) * 10) / 2) + 1;

    if (currentPage != oldPage) {
      pageChanged(currentPage);
    }

    oldPage = currentPage;

    //Parallax
    let cityBG = document.querySelector(".wrapper");
    let treeBG = document.querySelector(".wrapper02");
    cityBG.setAttribute(
      "style",
      "background-position: left " +
        (currentScroll / maxScroll) * 250 +
        "vw" +
        " bottom;"
    );
    treeBG.setAttribute(
      "style",
      "background-position: left " +
        (currentScroll / maxScroll) * 150 +
        "vw" +
        " bottom;"
    );
  });
}

function pageChanged(page) {
  //hide next button
  if (page == 5) {
    document.querySelector(".btnnextslide").style.visibility = "hidden";
  } else {
    document.querySelector(".btnnextslide").style.visibility = "visible";
  }
  //hide previous button
  if (page == 1) {
    document.querySelector(".btnpreviousslide").style.visibility = "hidden";
  } else if (page > 1) {
    document.querySelector(".btnpreviousslide").style.visibility = "visible";
  }
  //changecarousel
  for (let i = 1; i <= 5; i++) {
    circle = document
      .querySelector("#carouselDots")
      .getElementById("circle" + i);
    if (i == page) {
      circle.setAttribute("class", "active");
    } else {
      circle.setAttribute("class", "grey");
    }
  }
}

//Go to page when click carousel dot
function gotoPage(page) {
  let pageWidth = scroller.scrollWidth / 5;
  scroller.scrollTo(0, (page - 1) * pageWidth);
}

//BOB do something
function bob() {}

function nextslide() {
  scroller.scrollBy(0, 1);
}
function previousslide() {
  scroller.scrollBy(0, -1);
}
function test() {
  console.log("Tested");
}

function dropdownbtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var app = new Vue({
  el: "#popup",
  data: {
    showingIMG: "",
    showingContent: "",
    showingHeader: "",
    showingPopup: false,
    page1: [{ img: "", header: "", content: "" }],
    page2: [
      {
        img: "pic/character/Character (8).png",
        header: "ผู้ป่าวประกาศ",
        content:
          "คือผู้โฆษณาที่ใช้เสียงเป็นสื่อกลางในการประกาศสรรพคุณหรือสิ่งของที่จะขาย ผู้ป่าวประกาศมักจะเป็นผู้ที่มีเสียงดังน่าฟัง มีเทคนิคการใช้เสียงหรือวิธีพูดที่เป็นเอกลักษณ์ ดึงดูดความสนใจ",
        rotate: "0",
      },
    ],
    page3: [
      {
        img: "pic/third_page/ป้ายตรงpopup.png",
        header: "ใบปลิว",
        content:
          "ถือเป็นโฆษณาขนาดเล็กที่สามารถเห็นได้ทุกที่ หรือแม้แต่แจกถึงมือ จึงเป็นการโฆษณาที่เข้าถึงผู้คนได้อย่างกว้างขวางโดยที่ผู้รับสารไม่ต้องเสียค่าใช้จ่าย",
        rotate: "-10",
      },
      {
        img: "pic/third_page/popupหนังสือพิมพ์ฉบับแรก.png",
        header: "หนังสือพิมพ์ฉบับแรก",
        content:
          "เป็นหนังสือพิมพ์ชิ่อ The Bangkok Recoder หรือหนังสือพิมพ์จดหมายเหตุ วางจำหน่ายครั้งแรกเมื่อวันที่ 4 กรกฏาคม พ.ศ. 2387 และเริ่มมีโฆษณาครั้งแรกโดย อู่ต่อเรือบางกอกด๊อก",
        rotate: "7",
      },
      {
        img: "pic/third_page/popupนิตยสาร.png",
        header: "นิตยสาร",
        content:
          "เป็นหนังสือพิมพ์เนื้อหาหลากหลายมุ่งทั้งให้ความรู้และความบันเทิงในเฉพาะกลุ่มได้ดีกว่าหนังสือพิมพ์ ดังนั้นโฆษณาในนิตยสารจึงมีข้อดีที่สามารถประชาสัมพันธ์มห้กับคนที่เป็นกลุ่มเป้าหมายโดยตรงได้",
        rotate: "-10",
      },
      {
        img: "pic/third_page/popupหนังสือพิมพ์.jpg",
        header: "หนังสือพิมพ์",
        content:
          "เป็นช่องทางในการติดตามข่าวสารบ้านเมืองที่นิยมในสมัยนั้น จึงเข้าถึงผู้คนได้อย่างกว้างขวาง การโฆษณาจึงเข้ามามีบทบาทเพื่อประชาสัมพันธ์สินค้าของตน",
        rotate: "10",
      },
    ],
    page4: [
      {
        img: "pic/fourth_page/popupเสาอากาศ.png",
        header: "เสาอากาศ",
        content:
          "หน้าที่รับสัญญาณจากสถานีส่งสัญญาณทีวีมายังทีวีในบ้าน ซึ่งจะติดตั้งภายในอาคารหรือภายนอกอาคารก็ได้",
        rotate: "0",
      },
      {
        img: "pic/fourth_page/เทเว.png",
        header: "โฆษณาตัวแรกของไทย",
        content:
          "โฆษณารถยนต์เปอร์โย 204 โดย สถานีไทยโทรทัศน์ช่อง ๕ บางขุนพรหม ซึ่งถือเป็นก้าวแรกของวงการโทรทัศน์ในประเทศไทย",
        rotate: "0",
      },
      {
        img: "pic/fourth_page/popupทีวี.png",
        header: "โทรทัศน์",
        content:
          "เป็นระบบอนาล็อก เริ่มแรกเป็นสื่อที่ใช้สําหรับบอกข่าวสารจากกองทัพทหารแต่ต่อมาเริ่มนํามาใช้สําหรับการบันเทิงและโฆษณา ซึ่งได้รับความนิยมอย่างมากเพราะเห็นได้ทั้งภาพและเสียง",
        rotate: "3",
      },
      {
        img: "pic/second_page/newspaper.png",
        header: "หนังสือพิมพ์",
        content:
          "หนังสือพิมพ์มีความน่าสนใจมากขึ้นเนื่องจากการจัดคอลัมน์และภาพที่เป็นแบบสี แต่ความนิยมก็น้อยลงเนื่องจากการมาของโทรทัศน์",
        rotate: "-10",
      },
    ],
    page5: [
      {
        img: "pic/fifth_page/pepsiposter.png",
        header: "โปสเตอร์",
        content:
          "มักจะเป็นโปสเตอร์หรือไวนิลที่ติดตามร้านอาหารข้างทางซึ่งจะเกี่ยวข้องกับสิ่งที่ขายในร้านด้วยเช่นกัน",
        rotate: "-10",
      },
      {
        img: "pic/fifth_page/smart_mobile_phone.png",
        header: "โทรศัพท์มือถือ",
        content:
          "โฆษณาดิจิทัลจะเป็นสื่อที่บริษัทโฆษณานําเงินมหาศาลมาลงมากกว่าโฆษณาผ่านทางโทรทัศน์เนื่องจากสามารถเข้าถึงคนที่ต้องการสินค้านั้นได้ง่ายขึ้นมากจากการค้นหาหรือพฤติกรรมผู้ใช้",
        rotate: "-10",
      },
      {
        img: "pic/fifth_page/tv new.png",
        header: "โทรทัศน์ดิจิทัล",
        content:
          "สามารถติดตั้งต่อสัญญาณได้ง่าย โทรศัพท์มีความคมชัด สีสวยกว่ายุคเก่ามาก ปัจจุบันยังมีโฆษณาตามโทรทัศน์อยู่ แต่มีค่าใช้จ่ายที่สูง บริษัทต่างๆจึงหันไปโฆษณาผ่านอินเตอร์เน็ตมากกว่า",
        rotate: "-3",
      },
    ],
    page6: [
      {
        img: "pic/character/Character (4).png",
        header: "VR และ AR",
        content:
          "คาดว่าจะเป็นเทคโนโลยีที่จะมามีบทบาทในอนาคตอย่างแน่นอน เนื่องจากสามารถเพิ่มอรรถรสในการใช้งานได้ดีขึ้นมาก แสดงสินค้าแบบ 3 มิติในโทรศัพท์มือถือ หรือการเล่นเกมที่เหมือนหลุดไปอีกโลกหนึ่งผ่านแว่น VR",
        rotate: "0",
      },
      {
        img: "pic/character/Character (1).png",
        header: "เมตาเวิร์ส",
        content:
          "เทคโนโลยีที่จะให้เราเข้าไปสู่โลกแห่งจินตนาการ จะได้ทำสิ่งต่างๆ ทั้งทำงาน เล่นเกม ชมคอนเสิร์ต หรือแค่การออกไปสังสรรค์กับเพื่อนและทำให้เกิดคอนเทนท์ใหม่ๆปรากฏในหลายจุดตอบโจทย์แต่ละคนแตกต่างกัน",
        rotate: "0",
      },
    ],
    page7: [
      {
        img: "pic/character/Character (7).png",
        header: "This is Header",
        content: "Lorem ipsum setyor 2 hor saikai khao jong jar len khun",
        rotate: "45",
      },
      {
        img: "pic/character/Character (7).png",
        header: "",
        content: "ลุงคนนี้ก็ใจเกเรมาก",
        rotate: "-45",
      },
      {
        img: "pic/character/Character (7).png",
        header: "",
        content: "ลุงคนนี้ก็ใจเกเรมากๆเช่นกัน",
        rotate: -45,
      },
    ],
    showingRotate: "",
    /*rotateimg:transform:translateX(-50%) translateY(-50%) rotate(-10deg);*/
  },
  methods: {
    closePopup: function () {
      this.showingPopup = !this.showingPopup;
    },
  },
});

var popupcontroller = new Vue({
  el: "#popupcontrol",
  methods: {
    showPopup: function (pageNum, popupNum) {
      //popupNum and pageNum correction
      popupNum -= 1;
      pageNum = "page" + pageNum;

      app.showingIMG = app[pageNum][popupNum].img;
      app.showingHeader = app[pageNum][popupNum].header;
      app.showingContent = app[pageNum][popupNum].content;
      app.showingPopup = !app.showingPopup;
      /*
            สมการ one=10 two=20 three=30
            showpopup(2,1) = default
            showpopup(3,1)ใบปลิว = (เอียงซ้าย 20 องศา)
            showpopup(3,2)หนังสือพิมพ์ฉบับแรก = (เอียงขวา 30 องศา)
            showpopup(3,3)นิตยสาร = (เอียงซ้าย 20 องศา)
            showpopup(3,4)หนังสือพิมพ์ = (เอียงขวา 20 องศา)
            showpopup(4,1)เสาอากาศ = default
            showpopup(4,2)โฆษนาตัวแรกของไทย = default
            showpopup(4,3)โทรทัศน์ = (เอียงขวา 10 องศา)
            showpopup(4,4)หนังสือพิมพ์ = (เอียงซ้าย 30 องศา)
            showpopup(5,1)โปสเตอ = (เอียงซ้าย 10 องศา)
            showpopup(5,2)โทรศัพท์มือถือ = (เอียงซ้าย 20 องศา)
            showpopup(5,3)โทรทัศน์ดิจิตัล = (เอียงซ้าย 10 องศา)
            showpopup(6,1)VR and AR = default
            showpopup(6,2)เมตาเวิส = default*/
      rotateVar =
        "transform:translateX(-50%) translateY(-50%) rotate(" +
        app[pageNum][popupNum].rotate +
        "deg);";
      /*console.log(app[pageNum][popupNum].rotate)*/
      app.showingRotate = rotateVar;
      /**/
      /*document.getElementById('animationrotate').style.setProperty('--my-variable-name', app[pageNum][popupNum].rotate)*/
      /*document.getElementsByClassName('.popupImg')[0]
       */
      popupImgAdjuster();
    },
  },
});

function popupImgAdjuster() {
  //Adjust content to img
  curImg = document.getElementsByClassName("popupImg")[0];
  topAmount = curImg.height / -2;
  topAmount = topAmount + "px";
  document.getElementsByClassName("popupHeader")[0].style.top = topAmount;
  document.getElementsByClassName("popupContent")[0].style.top = topAmount;
}
