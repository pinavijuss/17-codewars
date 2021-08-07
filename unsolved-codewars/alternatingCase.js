String.prototype.toAlternatingCase = function () {
 
}






    it("should work for fixed tests (provided in the description)", () => {
        expect("hello world".toAlternatingCase(), "HELLO WORLD");
        expect("HELLO WORLD".toAlternatingCase(), "hello world");
        expect("hello WORLD".toAlternatingCase(), "HELLO world");
        expect("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
        expect("12345".toAlternatingCase(), "12345");
        expect("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
        expect("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
        expect("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
    });
});