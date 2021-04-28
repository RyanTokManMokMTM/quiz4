import MyButton from './buttonComponet'
import {Button} from '@material-ui/core'


const MultiButton = (num)=>{
    var list = []
    for(var i = 0;i<num;i++){
        list.push(<Button color="primary" style= {{ borderRadius: 35,backgroundColor: "#b3596e",margin:30}}disable = {true} variant="contained" size= "large"onClick = {MyButton}>Button {i+1}</Button>)
    }
    return list
}

export default MultiButton