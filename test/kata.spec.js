/*
 * Triangulation
 *  - Only generalize code when we have two examples or more 
 *   + Usually delete one or more test cuz we in same E.P
 *   + If cannot delete a test we likely where finding a broundry and related E.P in the process
 *  - Can start out feeling like FakeIt
 * FakeIt 
 *  - Return a constant and gradually replace constants with variables until you have real code
 */
describe("Travelator", function () {
	describe("CanMakeItHome", function(){
		describe("Given less than 15 bumps", function(){
			// test 1 (1st Triangulation test [return static string])
			it("When single smooth section, expect 'Whoohoo!'", function() {
				// arrange
				let road = "_";
				let travelator = new Travelator();
				// act
				let actual = travelator.canMakeItHome(road);
				// assert
				const expected = "Whoohoo!"
				expect(actual).toBe(expected);
			});
			// test 3 (3rd Triangulation test [forced me to stop counting length and check for bumps with proper implementation])
			it("When 15 smooth section, expect 'Whoohoo!'", function() {
				// arrange
				let road = "_______________";
				let travelator = new Travelator();
				// act
				let actual = travelator.canMakeItHome(road);
				// assert
				const expected = "Whoohoo!"
				expect(actual).toBe(expected);
			});
			// test 5 (checking other side of boundry from test 4)
			it("When 14 bumps, expect 'Whoohoo!'", function() {
				// arrange
				let road = "_nnnnnnnnnnnnnn_";
				let travelator = new Travelator();
				// act
				let actual = travelator.canMakeItHome(road);
				// assert
				const expected = "Whoohoo!"
				expect(actual).toBe(expected);
			});
		});
		describe("Given 15 or more bumps", function(){
			// test 2 (2nd Triangulation test [simple length check])
			it("When 15 bumps expect 'Car Dead'", function() {
				// arrange
				let road = "nnnnnnnnnnnnnnn";
				let travelator = new Travelator();
				// act
				let actual = travelator.canMakeItHome(road);
				// assert
				const expected = "Car Dead"
				expect(actual).toBe(expected);
			});
			// test 4 (needed to change == to >= [forced a check beyond the boundry])
			it("When more than 15 bumps expect 'Car Dead'", function() {
				// arrange
				let road = "nnnnnnnnnnnnnnnn";
				let travelator = new Travelator();
				// act
				let actual = travelator.canMakeItHome(road);
				// assert
				const expected = "Car Dead"
				expect(actual).toBe(expected);
			});
		});
  	});
});
