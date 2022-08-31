/**
你正在参加一场比赛，给你两个 正 整数 initialEnergy 和 initialExperience 分别表示你的初始精力和初始经验。
另给你两个下标从 0 开始的整数数组 energy 和 experience，长度均为 n 。
你将会 依次 对上 n 个对手。第 i 个对手的精力和经验分别用 energy[i] 和 experience[i] 表示。当你对上对手时，需要在经验和精力上都 严格 超过对手才能击败他们，然后在可能的情况下继续对上下一个对手。
击败第 i 个对手会使你的经验 增加 experience[i]，但会将你的精力 减少  energy[i] 。
在开始比赛前，你可以训练几个小时。每训练一个小时，你可以选择将增加经验增加 1 或者 将精力增加 1 。
返回击败全部 n 个对手需要训练的 最少 小时数目。

输入：initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]
输出：8
解释：在 6 小时训练后，你可以将精力提高到 11 ，并且再训练 2 个小时将经验提高到 5 。
按以下顺序与对手比赛：
- 你的精力与经验都超过第 0 个对手，所以获胜。
  精力变为：11 - 1 = 10 ，经验变为：5 + 2 = 7 。
- 你的精力与经验都超过第 1 个对手，所以获胜。
  精力变为：10 - 4 = 6 ，经验变为：7 + 6 = 13 。
- 你的精力与经验都超过第 2 个对手，所以获胜。
  精力变为：6 - 3 = 3 ，经验变为：13 + 3 = 16 。
- 你的精力与经验都超过第 3 个对手，所以获胜。
  精力变为：3 - 2 = 1 ，经验变为：16 + 1 = 17 。
在比赛前进行了 8 小时训练，所以返回 8 。
可以证明不存在更小的答案。

输入：initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]
输出：0
解释：你不需要额外的精力和经验就可以赢得比赛，所以返回 0 。


 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  let res = 0, n = energy.length
  for (let i = 0; i < n; i++) {
    const ene = energy[i]
    const exp = experience[i]
    if (initialEnergy > ene && initialExperience > exp) {
      initialEnergy -= ene
      initialExperience += exp
    } else {
      if (initialEnergy > ene) {
        initialEnergy -= ene
      } else {
        res += ene - initialEnergy + 1
        initialEnergy = 1
      }
      if (initialExperience > exp) {
        initialExperience += exp
      } else {
        res += exp + 1 - initialExperience
        initialExperience = exp + 1 + exp
      }
    }
  }
  return res
};



var initialEnergy = 11,
  initialExperience = 23,
  energy = [69, 22, 93, 68, 57, 76, 54, 72, 8, 78, 88, 15, 58, 61, 25, 70, 58, 91, 79, 22, 91, 74, 90, 75, 31, 53, 31, 7, 51, 96, 76, 17, 64, 89, 83, 54, 28, 33, 32, 45, 20],
  experience = [51, 81, 46, 80, 56, 7, 46, 74, 64, 20, 84, 66, 13, 91, 49, 30, 75, 43, 74, 88, 82, 51, 72, 4, 80, 30, 10, 19, 40, 27, 21, 71, 24, 94, 79, 13, 40, 28, 63, 85, 70]

initialEnergy = 5, initialExperience = 3, energy = [1, 4, 3, 2], experience = [2, 6, 3, 1]

let r = minNumberOfHours(initialEnergy, initialExperience, energy, experience)
console.log('r', r)