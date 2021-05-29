const TestScheduler = require("@jest/core")
const getFullName, isPalindrome, getCircumfrence, getArea = require("./index")

test("adds piku and piku to give piku piku", () => {
    expect(getFullName("piku", "[piku]")).toBe("piku piku")
})
test("adds piku and poku to give Joel Rajesh", () => {
    expect(getFullName("piku", "poku")).toBe("piku poku")
})
test("adds sugu and piku to give sugu piku", () => {
    expect(getFullName("sugu", "piku")).toBe("sugu piku")
})
test("adds shin and chan to give shin chan", () => {
    expect(getFullName("shin", "chan")).not.toBe("shin chan")
})
test("adds pikui and poko to give pikui poko", () => {
    expect(getFullName("pikui", "poko")).not.toBe("pikui poko")
})


test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(isPalindrome("mom")).toBe(true)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(isPalindrome("malayalam")).not.toBe(false)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(isPalindrome("malayalam")).toBe(true)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(isPalindrome("momm")).not.toBe(true)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(getCircumfrence("7")).toBe(`The circumference is 44`)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(getCircumfrence("14")).toBe(`The circumference is 88`)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(getCircumfrence("14")).not.toBe(`The circumference is 8`)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(getArea("7")).toBe(`The area is 484`)
})
test("adds pikui and pokoi to give pikui pokoi", () => {
    expect(getArea("7")).not.toBe(`The area is 48`)
})