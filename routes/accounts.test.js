const accounts = require("./accounts")
// @ponicode
describe("accounts.default", () => {
    test("0", () => {
        let callFunction = () => {
            accounts.default({ use: () => "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            accounts.default({ use: () => "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            accounts.default({ use: () => "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            accounts.default({ use: () => "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            accounts.default({ use: () => "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            accounts.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
