const { TestScheduler } = require("@jest/core")
const { getFullName, isPalindrome, getCircumfrence, getArea, } = require("./index")

test("adds piku and sonche to give piku sonche", () => {
    expect(getFullName("piku", "sonche")).toBe("piku sonche")
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getFullName("priyap", "Aarti")).toBe("priyap Aarti")
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getFullName("Aarti", "guptas")).toBe("Aarti guptas")
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getFullName("Aarti", "guptas")).not.toBe("piku sonche")
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getFullName("piku", "sonche")).not.toBe("Aarti guptas")
})


test("adds piku and sonche to give piku sonche", () => {
    expect(isPalindrome("mom")).toBe(true)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(isPalindrome("malayalam")).not.toBe(false)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(isPalindrome("malayalam")).toBe(true)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(isPalindrome("momm")).not.toBe(true)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getCircumfrence("7")).toBe(`The circumference is 44`)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getCircumfrence("14")).toBe(`The circumference is 88`)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getCircumfrence("14")).not.toBe(`The circumference is 8`)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getArea("7")).toBe(`The area is 484`)
})
test("adds piku and sonche to give piku sonche", () => {
    expect(getArea("7")).not.toBe(`The area is 48`)
})