const MyButton = (event)=>{
    console.log(event.target)
    event.target.innerText =  event.target.innerText + "click"
}

export default MyButton