function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            return 'Patron Tequila'
            break;
        case 'school counselor':
            return 'Anything with Alcohol'
            break;
        case 'programmer':
            return 'Hipster Craft Beer'
            break;
        case 'bike gang member':
            return 'Moonshine'
            break;
        case 'politician':
            return 'Your tax dollars'
            break;
        case 'rapper':
            return 'Cristal'
            break;
        default:
            return 'Beer'
    }

}
//blogas testas

test('gerimas', () => {

    expect(getDrinkByProfession("jabrOni")).toBe('Patron Tequila', "'Jabroni' should map to 'Patron Tequila'");
    expect(getDrinkByProfession("scHOOl counselor")).toBe('Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol');
    expect(getDrinkByProfession("prOgramMer")).toBe('Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer');
    expect(getDrinkByProfession("bike ganG member")).toBe('Moonshine", "'Bike Gang Member' hould map to 'Moonshine');
    expect(getDrinkByProfession("poLiTiCian")).toBe('Your tax dollars", "'Politician' should map to 'Your tax dollars');
    expect(getDrinkByProfession("rapper")).toBe('Cristal", "'Rapper' should map to 'Cristal');
    expect(getDrinkByProfession("pundit")).toBe('Beer", "'Pundit' should map to 'Beer';
    expect(getDrinkByProfession("Pug")).toBe('Beer", "'Pug' should map to 'Beer');

})