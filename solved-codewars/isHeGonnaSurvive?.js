function hero(bullets, dragons) {
    if ((bullets / 2) >= dragons) {
        return true;
    }
    return false;
}








test('ar uzteks kulku nuzudyti drakonus', () => {

    expect(hero(10, 5)).toBe(true);
    expect(hero(7, 4)).toBe(false);
    expect(hero(4, 5)).toBe(false);
    expect(hero(100, 40)).toBe(true);
    expect(hero(1500, 751)).toBe(false);
    expect(hero(0, 1)).toBe(false);
})


