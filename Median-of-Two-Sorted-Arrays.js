/*

Instructions
============
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5


    Method 1
    arr1 = [1, 12, 15, 26, 38]  arr2=[2, 13, 17, 30 ,45]

    merged-arr = [1,............]     count = 0
    merged-arr = [1,2..........]      count = 1
    merged-arr = [1,2,12.......]      count = 2
    merged-arr = [1,2,12,13....]      count = 3
    merged-arr = [1,2,12,13,15,....]  count = 4
    merged-arr = [1,2,12,13,15,17]    count = 5
    --------------------------------------------------------------
    Method 2 - Divid & Conquor (log(n))
    Base case: Two sorted arrays of size 2 
    if (n == 2)

    arr1 = [a1, a2]     arr2=[b1, b2]
    m-arr=[ min(a1, a2), [max(a1,b1), min(a2,b2)], max(a2,b2)]
    Median = (max(a1,b1) + min(a2,b2)) / 2

    Sorted array of size n > 2
    Case 1: m1 == m2
    n = 5
    arr1 = [a1, a2, m1, a4, a5]     arr2=[b1, b2, m2, b4, b5]

    m-arr = [ [a1, b1, a2, b2], m1, m2, [a4, a5, b4, b5] ]
    median = (m1 + m2) / 2 = m1 = m2

    Case 2: m1 < m2
    n = 5
    arr1 = [a1, a2, m1, a4, a5]     arr2 = [b1, b2, m2, b4, b5]

                max(n-1)                    max(n-1)
    m-arr = [ [a1,b2,...], m1, [....], m2, [b4, b5] ]

    Sorrted arrays of size n > 2
    Case 2: m1 > m2
    n = 5
    arr1= [a1, a2, m1, a4, a5]      arr2=[b1, b2, m2, b4, b5]
                max(n-1)                max(n-1)
    m-arr = [ [b1,b2,...], m2, [....], [a4, a5] ]

    Example
    Given n=5   m1=15   n2=17
    arr1 = [1, 12, 15, 26, 38]      arr2= [2, 13, 17, 30, 45]

    m1 < m2 so [15, 26, 38] and [2, 13, 17]

    26 > 13 (m1>m2)

    [15, 26] and [13, 17]

    median = max(15,13)+min(26,17) = (15+17)/2 = 16

    ar1[]
    n
    ar2[]
    if (n <= 0) return -1
    if (n == 1) return (a1[0] + ar2[0]) / 2
    if (n == 2) return max(ar[0], ar2[0] + min(ar1[1], ar2[1])) / 2
*/
