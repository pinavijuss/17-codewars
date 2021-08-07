function past(h, m, s) {

    hoursToSeconds = h * 3600;
    minutesToSeconds = m * 60;
    seconds = s;
    wholeTimeInMiliseconds = (hoursToSeconds + minutesToSeconds + seconds) * 1000;

    return wholeTimeInMiliseconds;
}
test('laikas milisekundemis', () => {


    expect(past(0, 1, 1)).toBe(61000);
    expect(past(1, 1, 1)).toBe(3661000);
    expect(past(0, 0, 0)).toBe(0);
    expect(past(1, 0, 1)).toBe(3601000);
    expect(past(1, 0, 0)).toBe(3600000);
})
