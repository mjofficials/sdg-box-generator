var sdgArr = [{
    name: 'box1',
    colorCode: '#3F7E44',
    icon: '',
    codeNumber: 13,
    text: 'climate action',
    numOfPosts: 5,
}, {
    name: 'box2',
    colorCode: '#0A97D9',
    icon: '',
    codeNumber: 14,
    text: 'life below water',
    numOfPosts: 10,
}, {
    name: 'box3',
    colorCode: '#E5243B',
    icon: '',
    codeNumber: 1,
    text: 'no poverty',
    numOfPosts: 15,
}, {
    name: 'box4',
    colorCode: '#56C02B',
    icon: '',
    codeNumber: 15,
    text: 'life on land',
    numOfPosts: 20,
}, {
    name: 'box4',
    colorCode: '#56C02B',
    icon: '',
    codeNumber: 15,
    text: 'life on land',
    numOfPosts: 16,
}, {
    name: 'box5',
    colorCode: '#FD6925',
    icon: '',
    codeNumber: 9,
    text: 'industry, innovation and infrastructure',
    numOfPosts: 25,
}, {
    name: 'box5_1',
    colorCode: 'yellow',
    icon: '',
    codeNumber: 9.1,
    text: 'asdcf',
    numOfPosts: 18,
}, {
    name: 'box6',
    colorCode: '#000',
    icon: '',
    codeNumber: 0,
    text: 'industry',
    numOfPosts: 37,
}, {
    name: 'box7',
    colorCode: 'blue',
    icon: '',
    codeNumber: 001,
    text: 'revolution',
    numOfPosts: 45,
}
];
const sdgContainer = document.getElementById('sdgContainer');

var sdgArr2 = new Array();
var sdgObj = {};

// 
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// 
for (let i = 0; i <= 30; i++) {
    sdgArr2[i] = new Object();
    sdgArr2[i].numOfPosts = i;
    sdgArr2[i].name = `box_${i}`;
    sdgArr2[i].colorCode = generateRandomColor();

}
let sdgArr2Sorted = [...sdgArr2]
// console.log("sdgObj", sdgArr2Sorted);

sdgArr2Sorted.sort(() => Math.random() - 0.5).forEach((obj, i) => {
    // const { name, colorCode, icon, codeNumber, text, numOfPosts } = obj;
    const { name, numOfPosts, colorCode } = obj;
    // console.log("numOfPosts:", numOfPosts);
    // let unitChange = numOfPosts * 10;
    let unitChange = numOfPosts / 2;

    let truncateOverflow = numOfPosts <= 25 ? "truncate-overflow" : '';
    // console.log(numOfPosts, "-->", unitChange + "rem");

    sdgContainer.innerHTML += `
    <div class="box box_${numOfPosts}" id="boxId_${numOfPosts}" 
                                style="
                                // width:${unitChange / 2}rem;
                                height:${unitChange}rem;
                                // flex:${unitChange}rem;
                                background-color: ${colorCode}">
        <div class="overlay" style="background-color: ${colorCode}">
          <div class="text_box">
            <p class=${truncateOverflow}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium culpa eum ipsum incidunt corporis et esse hic totam
                </p>
            <button class="cta_btn">
                our contribution <i class="fa-solid fa-angle-right cta_btn_icon"></i>
                </button>
            </div>
        </div>
        <div class="header">
            <p class="num">${numOfPosts}</p>
            <p class="name">${name}</p>
        </div>
        <div class="body">
            <div class="icon">
                <i class="fa-solid fa-eye"></i>
            </div>
        </div>
    </div>
    `;
})
var sdgArrReverse = new Array();
for (let i = (sdgArr2.length - 1); i >= 0; i--) {
    sdgArrReverse.push(sdgArr2[i])
    let elem = sdgArr2[i]
    let elemBox = document.getElementsByClassName(elem.name);
    console.log("elemBox", elemBox);
}
console.log("sdgArrReverse", sdgArrReverse);

// add flex: 20% and decrease percentage by 5% untill last element
// 
let sdgContainerWidth = Math.round(sdgContainer.getBoundingClientRect().width)
let sdgContainerHeight = Math.round(sdgContainer.getBoundingClientRect().height)

console.log("sdgContainerWidth", sdgContainerWidth);
console.log("sdgContainerHeight", sdgContainerHeight);
var boxesArr = document.getElementsByClassName('box');
// console.log("boxesArr", boxesArr);
for (let i = 0; i < boxesArr.length; i++) {
    const elem = boxesArr[i];
    // console.log("elem width and height", elem.getBoundingClientRect().width, elem.getBoundingClientRect().width);
    // elem.addEventListener('click', () => {
    //     // console.log(elem.id);
    //     let item = document.getElementById(elem.id);
    //     // item.style.display = "none";
    //     item.style.flex = '1';
    // })
}
// 
const numCols = 3;
const colHeights = Array(numCols).fill(0);
const container = sdgContainer
Array.from(container.children).forEach((child, i) => {
    const order = i % numCols;
    child.style.order = order;
    colHeights[order] += parseFloat(child.clientHeight);
})
container.style.height = Math.max(...colHeights) + 'rem'; 