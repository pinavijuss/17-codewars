function tripleTrouble(one, two, three) {
    let x = ''
    for (let i = 0; i < one.length; i++) {
        x += one[i] + two[i] + three[i];

    }
    return x;
}


test("ar susidarys teisingas zodis", () => {

    expect(tripleTrouble("this", "test", "lock")).toBe("ttlheoiscstk");
    expect(tripleTrouble("aa", "bb", "cc")).toBe("abcabc");
    expect(tripleTrouble("Bm", "aa", "tn")).toBe("Batman");
    expect(tripleTrouble("LLh", "euo", "xtr")).toBe("LexLuthor");


})