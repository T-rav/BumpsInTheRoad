describe("Travelator", function () {
	describe("CanMakeItHome", function(){
		describe("Given less than 15 bumps", function(){
			// test 1 (triangulation 1st test [return static string])
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
			// test 3 (triangulation 3rd test [forced me to stop counting length and check for bumps with proper implementation])
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
			// test 2 (triangulation 2nd test [simple length check])
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
