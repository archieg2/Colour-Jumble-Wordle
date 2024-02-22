
function wordEntered(){
    let word = document.getElementById('inputWord').value
    if (word.length != 5){
         alert('Invalid Entry')
    }else{
        if (validWords.includes(word)){
            alert('hooray')
        }else{
            alert('Not in Word List')
        }
    }
    
}
