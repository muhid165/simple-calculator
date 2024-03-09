

function Display(value){
    document.getElementById('display').value +=value;
}

function clearMethod(){
    document.getElementById('display').value = "";
}

function Divide(){
    document.getElementById('display').value += "/";
}

function Subtract(){
    document.getElementById('display').value += "-";
}

function Add(){
    document.getElementById('display').value += "+";
}

function Multiply(){
    document.getElementById('display').value += "*";
}

function Enter() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }

    catch (e){
        document.getElementById('display').value = 'Error';
    }
}




