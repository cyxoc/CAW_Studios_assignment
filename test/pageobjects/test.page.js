import Page from './page.js';

class TestPage extends Page {
 
    get tableDataBotton () {
        return $('summary');
    }

    get inputData () {
        return $('#jsondata');
    }

    get btnSubmit () {
        return $('#refreshtable');
    }

    async getTableValues() {
        // Locate all rows in the table, excluding the header row
        const rows = await $$('table tr');

        // Initialize an array to store the values of the last three rows
        const allRowsValues = [];

        // Iterate over the all rows except header
        for (let i = 1 ; i < rows.length; i++) {
            const cells = await rows[i].$$('td');
            console.log(cells)
            const rowValues = await Promise.all(Array.from(cells, column => column.getText()))
            allRowsValues.push({name:rowValues[0],age:Number(rowValues[1]),gender:rowValues[2]});
        }

        return allRowsValues;
    }

}

export default new TestPage();
