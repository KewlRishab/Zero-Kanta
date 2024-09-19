let currSy="X";
let arr= Array(9).fill(null);

function chkResult(){
    if(arr[0]!==null && arr[0]==arr[1] && arr[1]==arr[2]||
       arr[3]!==null && arr[3]==arr[4] && arr[4]==arr[5]||
       arr[6]!==null && arr[6]==arr[7] && arr[7]==arr[8]||
       arr[0]!==null && arr[0]==arr[4] && arr[4]==arr[8]||
       arr[2]!==null && arr[2]==arr[4] && arr[4]==arr[6]||
       arr[0]!==null && arr[0]==arr[3] && arr[3]==arr[6]||
       arr[1]!==null && arr[1]==arr[4] && arr[4]==arr[7]||
       arr[2]!==null && arr[2]==arr[5] && arr[5]==arr[8]   
    ){
        alert(`Congo! ${currSy} wins the game!`);
        window.location.reload();
        
    }
    if(!(arr.some(e=>e===null))){
        alert("Unfortunately! It's a Draw,Try Again :P");
        window.location.reload();
    }
}

function handleClick(el){
    const id=Number(el.id);
    if(arr[el.id-1]!=null) return;
    el.innerHTML=currSy;
    arr[el.id-1]=currSy;
    chkResult();
    currSy=currSy==="X"?"0":"X";
}


