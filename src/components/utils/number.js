
/**
 * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。
 * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998
 */

/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
}
/**
 * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
 * @param {*number} num 输入数
 */
function float2Fixed(num) {
    if (num.toString().indexOf('e') === -1) {
        return Number(num.toString().replace('.', ''));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
/**
 * Return digits length of a number
 * @param {*number} num Input number
 */
function digitLength(num) {
    // Get digit length of e
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
}

function getMaxDigit(...nums) {
    const [num1, num2] = nums;
    return Math.max(digitLength(num1), digitLength(num2))
}
/**
 * 精确加法
 */
function plus(...nums) {
    if (nums.length > 2) {
        return iteratorOperation(nums, plus);
    }

    const [num1, num2] = nums;
    let maxdigit = getMaxDigit(...nums)

    // 取最大的小数位
    // const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    const baseNum = Math.pow(10, maxdigit)

    // console.log(baseNum)
    // 把小数都转为整数然后再计算
    let s = Math.min(baseNum, 100)
    let res = ((times(num1, baseNum) + times(num2, baseNum)) / baseNum).toFixed(maxdigit);
    return toNumber(res)
}
/**
 * 精确乘法
 */
function times(...nums) {
    if (nums.length > 2) {
        return iteratorOperation(nums, times);
    }

    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;

    // checkBoundary(leftValue);

    return leftValue / Math.pow(10, baseNum);
}

/**
* 精确减法
*/
function minus(...nums) {
    if (nums.length > 2) {
        return iteratorOperation(nums, minus);
    }

    const [num1, num2] = nums;
    let maxdigit = getMaxDigit(...nums)
    // const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
    const baseNum = Math.pow(10, maxdigit)
    let res = ((times(num1, baseNum) - times(num2, baseNum)) / baseNum).toFixed(maxdigit)
    return toNumber(res)

}
/**
 * 精确除法
 */
function divide(...nums) {
    if (nums.length > 2) {
        return iteratorOperation(nums, divide);
    }

    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    // checkBoundary(num1Changed);
    // checkBoundary(num2Changed);
    // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
 * 四舍五入
 */
function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
        result = times(result, -1);
    }
    return result;
}

function toNumber(num) {
    if (num && num.length > 16) {
        return num
    }
    return strip(num)
}

export { plus, minus, toNumber, round, times };