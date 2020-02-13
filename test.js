const string = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::before,*::after{
    box-sizing: border-box;
}

.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
.eye{
    position: absolute;
    border: 1.6px solid black;
    background-color: #2e2e2e;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    left: 50%;
    top: 230px;
    margin-left: -30px;
}
.winkCover{
    border: 5px solid #ffe600;
    background-color: #ffe600;
    width: 66px;
    height: 66px;
    margin-top: -3px;
    margin-left: -3px;
    display: none;
}
.wink{
    border: 5px solid black;
    width: 60px;
    height: 30px;
    border-radius:50% 50% 0 0/100% 100% 0 0;
    border-bottom: none;
    margin-top: 1px;
    margin-left: -4px;
    display: none;
} 
.eye.left{
    transform: translateX(-125px);
}
.eye.right{
    transform: translateX(125px);
}
.eye .reflection{
    position: absolute;
    content: '';
    display: block;
    border: 1.6px solid black;
    background-color: white;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    top: 1px;
}
.eye.left .reflection{
    right: 9px;
}
.eye.right .reflection{
    left: 9px;
}
@keyframes shake{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(4deg);

    }
    66%{
        transform: rotate(-4deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose{
    position: absolute;
    left: 50%;
    top: 270px;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 8px solid black;
    margin-left: -10px;
    z-index: 3;
}
.nose:hover{
    transform-origin: center bottom;
    animation: shake 0.2s infinite ease-in-out;
}
.cir{
    position: absolute;
    background: black;
    width: 20px;
    height: 6px;
    border-radius: 6px 6px 0 0;
    top: -14px;
    margin-left: -10px;
    z-index: 3;
}
.point{
    position: absolute;
    border: 1.3px solid white;
    background-color: white;
    border-radius: 100%;
    width: 4px;
    height: 2px;
    left: 4px;
    top: 2px;
    z-index: 3;
}
.face{
    position: absolute;
    border: 1.6px solid black;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: red;
    left: 50%;
    top: 330px;
    margin-left: -40px;
}
.face.left{
    transform: translateX(-174px);
}
.face.right{
    transform: translateX(174px);
}
.mouth{
    width:200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:280px;
    margin-left: -100px;
}
.upperLip{
    position: absolute;
    border: 2px solid black;
    border-top-color: transparent;
    width: 94px;
    height: 30px;
    left: 50%;
    background-color: #ffe600;
    z-index: 1;
}
.upperLip.left{
    border-right-color: transparent;
    margin-left: -94px;
    border-radius: 0 0 0 90%;
    transform: rotateZ(-24deg);
}
.upperLip.right{
    border-left-color: transparent;    margin-left: 0px;
    border-radius: 0 0 90% 0;
    transform: rotateZ(24deg);
}
.lowerLip{
    height: 180px;
    position: absolute;
    top: 11px;
    width: 100%;
    overflow: hidden;
}
.lowerLip .cir1{
    position: absolute;
    border: 1.6px solid black;
    width: 180px;
    height: 1000px;
    bottom: 0;
    left: 50%;
    margin-left: -90px;
    border-radius: 90px/430px;
    background: rgb(155,0,20);
    overflow: hidden;
}
.lowerLip .cir1 .cir2{
    position: absolute;
    border: 1px solid black;
    width: 160px;
    height: 160px;
    bottom: -8px;
    left: 50%;
    margin-left: -80px;
    border-radius: 80px;
    background: rgb(238,84,96);
}
`
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)
let id = setInterval(() => {
    n += 1
    if (n > string, length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}, 0)
