
//neissprendziau

function countSheeps(arrayOfSheep) {


    return arrayOfSheep.filter((x) => x === true).length
}



test('kiek sarase yra aviu', () => {

    expect(countSheeps(arrayOfSheep)).toBe(17, "There are 17 sheeps in total")

})