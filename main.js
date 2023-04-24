let num = 3;
let num2 = prompt("Найдите ответы: 1, 2, 3 \n1+2=");
switch(num2) {
    case "3":
        alert("Верно да");
        break;
    case "1":
    case "2":
    alert("Неверно: нет")
    break;
    default:
        alert("Не сработало: вывести сообщение 'не сбработало'")
}


let userinput = prompt("Введите число от 1 до 12")

switch(userinput) {
    case "1":
        case "2":
            case "3":
            alert("Зима");
            break;
    case "4":
        case "5":
            case "6":
                alert("Весна")
                break;
        case "7":
            case "8":
                case "9":
                alert("Лето")
                break;
                    case "10":
    case "11":
    case "12":
        alert("Осень")
        break;
    default:
        alert("Введите еще раз")

}

let a = null;
let b = "1";
let c = "2";

let result = a ?? b ?? c;
console.log(result);





