let data = [
  {
    id: 1,
    imageUrl:
      "https://www.turebi.ge/uploads/photos/tours1/large/65919_3.jpg?v=0",
    title: "გუდაური",
  },
  {
    id: 2,
    imageUrl:
      "https://i.ytimg.com/vi/ejNIow5DPUM/maxresdefault.jpg",
    title: "Photography",
  },
  {
    id: 3,
    imageUrl:
      "https://www.turebi.ge/uploads/photos/tours1/large/65901_1.jpg?v=4",
    title: "სვანეთი",
  },
  {
    id: 4,
    imageUrl:
      "https://images.hindustantimes.com/img/2022/05/05/1600x900/woman-g4662036ab_1920_1651724674707_1651724700240.jpg",
    title: "Eyes",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg",
    title: "Sunset",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU.jpg",
    title: "Dog",
  },

];

const arrowLeft = document.getElementById("leftbrn");
const arrowRight = document.getElementById("rightbtn");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

function createDiv() {
  let divElement = document.createElement("div");

  return divElement;
}

function createImgElement(item) {
  let tagImage = document.createElement("img");
  tagImage.setAttribute("src", item.imageUrl);

  return tagImage;
}

function createTitleElement(item) {
  let tagTitle = document.createElement("h2");
  tagTitle.innerText = item.title;

  return tagTitle;
}

function slide() {
  sliderContent.innerHTML = "";
  let slideDiv = createDiv(); 
  let slideImg = createImgElement(data[sliderIndex]); 
  let slideTitle = createTitleElement(data[sliderIndex]); 

  slideDiv.appendChild(slideImg);
  slideDiv.appendChild(slideTitle);
  sliderContent.appendChild(slideDiv);

  console.log(slideDiv);
}
slide();

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex -= 1;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex += 1;
  slide();
}
arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);