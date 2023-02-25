function reverseString(str){
    if (str === ""){
        return invertedString = "Введена пустая строка";
    }else{
        //Сначала получаем массив из строки, затем его переворачиваем и соединяем в строку обратно
        return invertedString = str.split("").reverse().join("");
    }
    
}

module.exports = reverseString;