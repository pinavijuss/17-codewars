
function abbrevName(name) {


    const arr = name.split(' ');
    const firstname = arr[0];
    const surname = arr[1];
    const result = firstname[0].toUpperCase() + '.' + surname[0].toUpperCase();

    return result;
}
// if (name === firstName + ' ' + lastName) {
//    return firstName[0]'.'lastName[0];
//  }

test("ar susidarys teisingas trumpinys", () => {

    expect(abbrevName("Sam Harris")).toBe("S.H");
    expect(abbrevName("Patrick Feenan")).toBe("P.F");
    expect(abbrevName("Evan Cole")).toBe("E.C");
    expect(abbrevName("P Favuzzi")).toBe("P.F");
    expect(abbrevName("David Mendieta")).toBe("D.M");
})