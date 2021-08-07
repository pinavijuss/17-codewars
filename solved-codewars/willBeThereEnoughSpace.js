function enough(cap, on, wait) {

    allPassengers = on + wait;
    if (allPassengers > cap) {
        return (on + wait) - cap;
    }
    else {
        return 0;
    }
}

test('ar tilps keleiviai', () => {

    expect(enough(10, 5, 5)).toBe(0);
    expect(enough(100, 60, 50)).toBe(10);
    expect(enough(20, 5, 5)).toBe(0);
})