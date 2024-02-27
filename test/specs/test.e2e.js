import { expect } from '@wdio/globals'
import testPage from '../pageobjects/test.page.js'

describe('testpages Table validation', () => {
    
    let jsonData = [{ "name": "Bob", "age": 20, "gender": "male" },
    { "name": "George", "age": 42, "gender": "male" },
    { "name": "Sara", "age": 42, "gender": "female" },
    { "name": "Conor", "age": 40, "gender": "male" },
    { "name": "Jennifer", "age": 42, "gender": "female" }]

    it('should insert correct values in table', async () => {
        await testPage.open()
        await testPage.tableDataBotton.waitForDisplayed()
        await testPage.tableDataBotton.click()
        await testPage.inputData.waitForDisplayed()
        await testPage.inputData.clearValue()
        const testData = JSON.stringify(jsonData)
        await testPage.inputData.setValue(testData)
        await testPage.btnSubmit.click()
        await expect(await testPage.getTableValues()).toEqual(jsonData)
    })
})

