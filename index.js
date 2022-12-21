let first = +prompt('Введіть преше число');
let second = +prompt('Введіть друге число');
let third = +prompt('Введіть третье число');

if (!isNaN(first)&&!isNaN(second)&&!isNaN(third)){
    let result = (first+second+third)/3
    alert(`Середне значення: ${result}`)
}else {
    alert('Треба вписувати тільки числа')
}
