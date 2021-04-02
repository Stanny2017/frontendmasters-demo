var merge = function (nums1, m, nums2, n) {

    if (nums2.length === 0) return

    let j = 0
    let i = 0


    while (i < m + j) {

        if (j > n - 1) break

        const n1 = nums1[i]
        const n2 = nums2[j]

        if (n1 === 0) {
            nums1.splice(i, 1)
            i++
            continue
        }

        if (n2 < n1) {
            nums1.splice(i, 0, nums2[j])
            nums1.pop()
            j++
            i++
        } else {
            i++
            continue
        }
    }


    while (j < m) {
        nums1[i] = nums2[j];
        i++;
        j++;
    }
};

console.log(merge([0],
    0,
    [1],
    1))