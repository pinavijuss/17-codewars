function removeEveryOther(arr) {
    let element = [];

    for (let i = 0; i < arr.length; i += 2) {
        element.push(arr[i]);

    }
    return element;
}







test('ar istrina sekanti saraso nari?', () => {

    expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toBe(['Hello', 'Hello Again']);
    //expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toBe([1, 3, 5, 7, 9]));
    //expect(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]).toBe([['Goodbye']]));
})