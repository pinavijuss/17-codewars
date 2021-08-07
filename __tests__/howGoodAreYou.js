function betterThanAverage(classPoints, yourPoints) {

    var total = 0;
    for (var i = 0; i < classPoints.length; i++) {
        total += classPoints[i + 1];
    }
    var avg = total / classPoints.length + yourPoints;

    if (yourPoints > avg) {
        return true;
    }
    return false;
}










test("better than average?", () =>


    expect(betterThanAverage([2, 3], 5).toBe(true);


expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75).toBe(true);


expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9).toBe(false);

})
