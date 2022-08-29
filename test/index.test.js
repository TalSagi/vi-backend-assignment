const { sayHey } = require('../src')
const { getNestedCharacters, essentiallyTheSameCharacter } = require('../src/utils')

describe('getNestedCharacters', () => {
    it("should split the character into normalized nested character names", () => {
        expect(getNestedCharacters("James 'Rhodey' Rhodes / War Machine (uncredited)"))
            .toEqual(["James Rhodey Rhodes", "War Machine"]);
        expect(getNestedCharacters("Thanos")).toEqual(["Thanos"]);
})
})

describe('essentiallyTheSameCharacter', () => {
    it("should evaluate the sameness of two character strings", () => {
        expect(essentiallyTheSameCharacter("Steve Rogers / Captain America", "Johnny Storm / Human Torch")).toBe(false);
        expect(essentiallyTheSameCharacter("Virginia \"Pepper\" Potts", "Pepper Potts")).toBe(true);
        expect(essentiallyTheSameCharacter("Nick Fury", "Nick Fury (uncredited)")).toBe(true);
    })
})

describe('sayHey', () => {
    it('should say Hey to given name', () => {
        expect(sayHey('John')).toBe('Hey John')
    })
})
