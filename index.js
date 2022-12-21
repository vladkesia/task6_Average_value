const first = +prompt('Введіть преше число');
const second = +prompt('Введіть друге число');
const third = +prompt('Введіть третье число');

if (!isNaN(first)&&!isNaN(second)&&!isNaN(third)){
    const result = (first+second+third)/3
    alert(`Середне значення: ${result}`)
}else {
    alert('Треба вписувати тільки числа')
}
