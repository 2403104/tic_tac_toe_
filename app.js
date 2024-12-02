let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO = true ;//x,o
let symbol="x";
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetgame=()=>{
 turnO=true;
    enable_all();
    msgContainer.classList.add("hide");
};

const enable_all=()=>{
turnO=true;
    for (let i=0;i<9;i++){
        boxes[i].disabled=false;
        boxes[i].innerText="";
        boxes[i].style.backgroundColor="white"
    }
    msgContainer.classList.add("hide");
    
}


const disabled_all=()=>{
    
    for (let i=0;i<9;i++){
        if (boxes[i].innerText===""){
            boxes[i].style.backgroundColor="#F3F3E0"
        }
        boxes[i].disabled=true;
    };
};

const showWinner=(winner)=>{
    disabled_all();
    msg.innerText=`Congratulations 🎉🎉 Player ${winner} is Winner`;
    msgContainer.classList.remove("hide");
    
}

const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",enable_all);
