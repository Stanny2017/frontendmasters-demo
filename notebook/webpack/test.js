function test(nums) {

    // find  top1 top2 top3
    // bottom1 bottom2 

    let top1, top2, top3
    let bottom1, bottom2

    top1 = bottom1 = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const n = nums[i]

        if (n > top1) {
            top3 = top2
            top2 = top1
            top1 = n
        } else if (n > top2 || top2 === undefined) {
            top3 = top2
            top2 = n
        } else if (n > top3 || top3 === undefined) {
            top3 = n
        }


        if (n < bottom1) {
            bottom2 = bottom1
            bottom1 = n
        } else if (n < bottom2 || bottom2 === undefined) {
            bottom2 = n
        }
    }

    return Math.max(top1 * top2 * top3, bottom1 * bottom2 * top1)
}