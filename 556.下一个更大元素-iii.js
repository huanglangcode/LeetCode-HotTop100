class PriorQueue {
    constructor(compare = (a, b) => b - a < 0) {
        this.queue = [];
        this.compare = compare
    }

    /**
     * 
     * @param {string} element 
     * @returns 
     */
    push(element) {
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = l + ((r - l) >> 1)
            if (this.compare(this.queue[mid], element)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        this.queue.splice(l, 0, element)
    }

    top() {
        return this.queue[0]
    }

    shift() {
        return this.queue.shift()
    }

    get size() {
        return this.queue.length
    }
}

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.cuisinesMap = new Map()
        this.cuisinesSet = new Map()
        for (let i = 0; i < cuisines.length; i++) {
            const cty = cuisines[i];
            const food = foods[i];
            const rate = ratings[i];
            if (!this.cuisinesMap.has(cty)) {
                let pq = new PriorQueue((a, b) => {
                    if (a[1] !== b[1]) {
                        return b[1] - a[1] > 0
                    } else {
                        return b[0].localeCompare(a[0]) < 0
                    }
                })
                pq.push([food, rate])
                this.cuisinesMap.set(cty, pq)
                let set = new Set()
                set.add(food)
                this.cuisinesSet.set(cty, {
                    cty,
                    set
                })
            } else {
                let pq = this.cuisinesMap.get(cty)
                pq.push([food, rate])
                this.cuisinesMap.set(cty, pq)
                let obj = this.cuisinesSet.get(cty)
                obj.set.add(food)
            }
        }
    }
    /**
     * @param {string} food
     * @param {number} newRating
     * @return {void}
     */
    changeRating(food, newRating) {
        for (const obj of this.cuisinesSet.values()) {
            if (obj.set.has(food)) {
                let pq = this.cuisinesMap.get(obj.cty)
                let idx = pq.queue.findIndex(ele => ele[0] === food)
                pq.queue.splice(idx, 1)
                pq.push([food, newRating])
                break
            }
        }
    }
    /**
     * @param {string} cuisine
     * @return {string}
     */
    highestRated(cuisine) {
        // 根据国家快速找到有哪些食物及评分
        let arr = this.cuisinesMap.get(cuisine)
        return arr.top()[0]
    }
}



/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

var foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
console.log(foodRatings.highestRated("korean")); // 返回 "kimchi"
// "kimchi" 是分数最高的韩式料理，评分为 9 。
console.log(foodRatings.highestRated("japanese")); // 返回 "ramen"
// "ramen" 是分数最高的日式料理，评分为 14 。
console.log(foodRatings.changeRating("sushi", 16)); // "sushi" 现在评分变更为 16 。
console.log(foodRatings.highestRated("japanese")); // 返回 "sushi"
// "sushi" 是分数最高的日式料理，评分为 16 。
console.log(foodRatings.changeRating("ramen", 16)); // "ramen" 现在评分变更为 16 。
console.log(foodRatings.highestRated("japanese")); // 返回 "ramen"
                                       // "sushi" 和 "ramen" 的评分都是 16 。
                                       // 但是，"ramen" 的字典序比 "sushi" 更小。