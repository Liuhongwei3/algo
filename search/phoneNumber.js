/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 * 
 * 示例 1：
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 示例 2：
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 示例 3：
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * @param {*} digits 
 * @returns 
 */
const letterCombinations = (digits) => {
    const numberStrMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    const digitArr = digits.split('');
    const res = [];

    if (!digitArr.length) {
        return res;
    }

    // 这里可以不需要 start
    const dfs = (start, temp) => {
        // 如果推入的元素已经和输入数字长度相等，说明已经到了最底部，则退出本轮进入下个元素
        if (temp.length === digitArr.length) {
            res.push(temp.join(''));
            return;
        }

        // 当前遍历号码的字母集合，索引根据 temp len 获取
        const curNumberStrs = numberStrMap[digitArr[temp.length]];

        // 遍历当前号码集合，比如 ['a', 'b', 'c']
        for (let i = start; i < curNumberStrs.length; i++) {
            // 推入当前字母
            temp.push(curNumberStrs[i]);
            console.log(start, temp);

            // 继续深度递归
            dfs(start, temp);

            temp.pop();
        }
    }

    dfs(0, []);

    return res;
};

console.log(letterCombinations('237'));

// 0 [ 'a' ]
// 0 [ 'a', 'd' ]
// 0 [ 'a', 'd', 'p' ]
// 0 [ 'a', 'd', 'q' ]
// 0 [ 'a', 'd', 'r' ]
// 0 [ 'a', 'd', 's' ]
// 0 [ 'a', 'e' ]
// 0 [ 'a', 'e', 'p' ]
// 0 [ 'a', 'e', 'q' ]
// 0 [ 'a', 'e', 'r' ]
// 0 [ 'a', 'e', 's' ]
// 0 [ 'a', 'f' ]
// 0 [ 'a', 'f', 'p' ]
// 0 [ 'a', 'f', 'q' ]
// 0 [ 'a', 'f', 'r' ]
// 0 [ 'a', 'f', 's' ]
// 0 [ 'b' ]
// 0 [ 'b', 'd' ]
// 0 [ 'b', 'd', 'p' ]
// 0 [ 'b', 'd', 'q' ]
// 0 [ 'b', 'd', 'r' ]
// 0 [ 'b', 'd', 's' ]
// 0 [ 'b', 'e' ]
// 0 [ 'b', 'e', 'p' ]
// 0 [ 'b', 'e', 'q' ]
// 0 [ 'b', 'e', 'r' ]
// 0 [ 'b', 'e', 's' ]
// 0 [ 'b', 'f' ]
// 0 [ 'b', 'f', 'p' ]
// 0 [ 'b', 'f', 'q' ]
// 0 [ 'b', 'f', 'r' ]
// 0 [ 'b', 'f', 's' ]
// 0 [ 'c' ]
// 0 [ 'c', 'd' ]
// 0 [ 'c', 'd', 'p' ]
// 0 [ 'c', 'd', 'q' ]
// 0 [ 'c', 'd', 'r' ]
// 0 [ 'c', 'd', 's' ]
// 0 [ 'c', 'e' ]
// 0 [ 'c', 'e', 'p' ]
// 0 [ 'c', 'e', 'q' ]
// 0 [ 'c', 'e', 'r' ]
// 0 [ 'c', 'e', 's' ]
// 0 [ 'c', 'f' ]
// 0 [ 'c', 'f', 'p' ]
// 0 [ 'c', 'f', 'q' ]
// 0 [ 'c', 'f', 'r' ]
// 0 [ 'c', 'f', 's' ]
// [
//   'adp', 'adq', 'adr', 'ads', 'aep',
//   'aeq', 'aer', 'aes', 'afp', 'afq',
//   'afr', 'afs', 'bdp', 'bdq', 'bdr',
//   'bds', 'bep', 'beq', 'ber', 'bes',
//   'bfp', 'bfq', 'bfr', 'bfs', 'cdp',
//   'cdq', 'cdr', 'cds', 'cep', 'ceq',
//   'cer', 'ces', 'cfp', 'cfq', 'cfr',
//   'cfs'
// ]
