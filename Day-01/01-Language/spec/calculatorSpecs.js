describe("Calculator", function(){
    it("Should be able to add two numbers", function(){
        //Arrange
        var number1 = 10,
            number2 = 20,
            expectedResult = 30;

        //Act
        var result = add(number1,number2);

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should be able to add two numbers in string format", function(){
        //Arrange
        var number1 = "10",
            number2 = "20",
            expectedResult = 30;

        //Act
        var result = add(number1,number2);

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should be able to add only one number", function(){
        //Arrange
        var number1 = "10",
            expectedResult = 10;

        //Act
        var result = add(number1);

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should return zero when invoked with no arguments", function(){
        //Arrange
        var   expectedResult = 0;

        //Act
        var result = add();

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should treat non numerics strings as zero", function(){
        //Arrange
        var number1 = "abc",
            number2 = 10,
            expectedResult = 10;

        //Act
        var result = add(number1, number2);

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should be able to add varying length of numbers", function(){
        //Arrange
        var  expectedResult = 100;

        //Act
        var result = add(10,20,30,40);

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should be able to add function returing numbers", function(){
        //Arrange
        var f1 = function(){ return 10;},
            f2 = function(){ return 20;},
            expectedResult = 30;

        //Act
        var result = add(f1, f2);

        //Asser3
        expect(result).toBe(expectedResult);
    });
    it("Should be able to add function returing numbers in string format", function(){
        //Arrange
        var f1 = function(){ return "10";},
            f2 = function(){ return "20";},
            expectedResult = 30;

        //Act
        var result = add(f1, f2);

        //Asser3
        expect(result).toBe(expectedResult);
    });
});
