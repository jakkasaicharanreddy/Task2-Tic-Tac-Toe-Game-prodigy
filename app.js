let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns = [[0,1,2],[0,3,6],[0,4,8],
                    [1,4,7],[2,5,8],[3,4,5],
                    [6,7,8],[6,4,2]];

const disable= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enaable= ()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations ${winner} won`;
    disable();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val != "" && pos3val!=""){
            if(pos1val === pos2val && pos2val=== pos3val){
                showWinner(pos1val);
            }
        }
    }
};

resetBtn.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText="";
        enaable();
        msg.innerText="Its O turn";
        turnO=true;
    }
})


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked",boxes);
        if(turnO){
            msg.innerText="Its X turn";
            box.innerText="O";
            turnO=false;
        }else{
            msg.innerText="Its O turn";
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })

});

