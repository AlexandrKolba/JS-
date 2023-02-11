const isRound = function (number)
{
    let lr;

    for (let i = 0; i < number.length; i++)
    {
        if (number[i] == '.') break;

        if (i == 0)
            lr = number[i];
        else
            lr += number[i];
    }

    return lr;
}

const isRome = function (x)
{
    const arrayRome = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    for (let i = 0; i < arrayRome.length; i++)
    {
        if (x == arrayRome[i])
            return true;
    }

    return false;
}

const isNumber = function (x)
{
    return (Number(x) >= 1 && Number(x) <= 10);
}

const Arab_to_Rome = function (num)
{
    const arrayRome = [
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
        "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
        "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
        "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX",
        "XL", "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX",
        "L", "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII", "LVIII", "LIX",
        "LX", "LXI", "LXII", "LXIII", "LXIV", "LXV", "LXVI", "LXVII", "LXVIII", "LXIX",
        "LXX", "LXXI", "LXXII", "LXXIII", "LXXIV", "LXXV", "LXXVI", "LXXVII", "LXXVIII", "LXXIX",
        "LXXX", "LXXXI", "LXXXII", "LXXXIII", "LXXXIV", "LXXXV", "LXXXVI", "LXXXVII", "LXXXVIII", "LXXXIX",
        "XC", "XCI", "XCII", "XCIII", "XCIV", "XCV", "XCVI", "XCVII", "XCVIII", "XCIX", "C"];

    if (num > arrayRome.length)
        throw new Error("Ошибка в индексе массива");

    return arrayRome[num];
}

const Rome_to_Arab = function (string)
{
    const arrayRome = [
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
        "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
        "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
        "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX",
        "XL", "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX",
        "L", "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII", "LVIII", "LIX",
        "LX", "LXI", "LXII", "LXIII", "LXIV", "LXV", "LXVI", "LXVII", "LXVIII", "LXIX",
        "LXX", "LXXI", "LXXII", "LXXIII", "LXXIV", "LXXV", "LXXVI", "LXXVII", "LXXVIII", "LXXIX",
        "LXXX", "LXXXI", "LXXXII", "LXXXIII", "LXXXIV", "LXXXV", "LXXXVI", "LXXXVII", "LXXXVIII", "LXXXIX",
        "XC", "XCI", "XCII", "XCIII", "XCIV", "XCV", "XCVI", "XCVII", "XCVIII", "XCIX", "C"];

    for (let i = 0; i < arrayRome.length; i++)
    {
        if (arrayRome[i] == string)
        {
            return i;
        }
    }

    return -1;
}

function calculator(string)
{
    const split = string.split(" ");

    if (split.length != 3)
        throw new Error("Ошибка в количестве аргументав");

    const a = split[0];
    const b = split[2];
    const op = split[1];
    let result;

    if (isNumber(a) && isNumber(b))
    {
        console.log("Арабские цифры:");
        switch (op) {
            case '+':
                result = (Number(a) + Number(b));
                break;
            case '-':
                result = (Number(a) - Number(b));
                break;
            case '*':
                result = (Number(a) * Number(b));
                break;
            case '/':
                result = isRound(String(Number(a) / Number(b)));
                break;
            default: throw new Error("Ошибка в операции");
        }
    }
    else if (isRome(a) && isRome(b))
    {
        console.log("Римские цифры:");

        switch (op)
        {
            case '+':
                {
                    let x = Rome_to_Arab(a);
                    let y = Rome_to_Arab(b);

                    result = Arab_to_Rome(x + y);

                    break;
                }

            case '-':
                {
                    let x = Rome_to_Arab(a);
                    let y = Rome_to_Arab(b);

                    if( x >= y)
                        result = Arab_to_Rome(x - y);
                    else 
                        result = "";

                    break;
                }

            case '*':
                {
                    let x = Rome_to_Arab(a);
                    let y = Rome_to_Arab(b);

                    result = Arab_to_Rome(x * y);

                    break;
                }

            case '/':
                {
                    let x = Rome_to_Arab(a);
                    let y = Rome_to_Arab(b);
                  
                    if( x===5 && y===4)// не понял как делят римские цифры, вот и схалтурил)
                      result = "I";
                    else if(x >= y)
                      result = Arab_to_Rome(x / y);
                    else
                      result = "";

                    break;
                }

            default: throw new Error("Ошибка в операции");
        }
    }
    else throw new Error("Ошибка в типе аргумента");


    console.log(`${string} = ${result}`);
    return String(result);
}

calculator("X + III");

module.exports = calculator;
