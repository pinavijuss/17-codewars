function noBoringZeros(n) {


    const numStr = String(n).split('');

    if (n === 0) {
        return 0;
    }
    for (let i = numStr; i < n.length; i -= 1) {
        if (numStr[i] !== 0) {
            return numstr[i].slice(0, i + 1).join('');
        }
    }
}




test('hahaha', () => {

    expect(noBoringZeros(1450)).toBe(145);
    expect(noBoringZeros(960000)).toBe(96);
    /* expect(noBoringZeros(1050)).toBe(105);
     expect(noBoringZeros(-1050)).toBe(-105);
     expect(noBoringZeros(-105)).toBe(105);
     expect(noBoringZeros(0)).toBe(0);
     */
})
