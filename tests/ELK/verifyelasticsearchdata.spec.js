// const expect = require('expect')
const sql = require('mssql')
const axios = require('axios')

describe('Login page', function () {
    let items = [
        1138017,
        1142751,
        1138018,
        1138019,
        1138020
    ]
    const sqlConfig = {
        user: 'daniel',
        password: 'jGv8j2nRMF$jEKx!',
        server: 'porky.esgisoftware.com',
        database: 'beta_ESGI'
    }
    before(function () {
    })
    it('Elastic search data should be correct', function () {
        sql.connect(sqlConfig, async(err) => {
            if (err) {
                return console.log(err)
            } else {
                console.log('Connection succeeded!')
                 // code for sql request here.
                // const value = '1138017'
        //  const result = await sql.query`select * from Users where UserID = ${value}`
                let adjIndx
                items.forEach(async (item, index) => {
                    // this.test.title = `Elastic search data should be correct ${item}`
                    // it(`item ${item}`, async function () {

                    // })
                    let result = await sql.query`SELECT Top 1 CreatorID, TestID, Description FROM Tests
                    WHERE CreatorID = ${item}
                    ORDER BY CreateDate DESC`
                    // console.dir(result)
                    const recordSet = result.recordset[0]
                    const options = {
                        method: 'GET',
                        headers: { 'content-type': 'application/json' },
                        url: `http://elasticsearch.beta:9200/tests/_doc/${recordSet.TestID}`
                    }
                    let res = await axios(options)
                    if (res.status === 200) {
                        console.log(`Verifying test id ${recordSet.TestID} created by user with id ${item}`)
                        adjIndx = index + 1
                        // console.log('INDEX:::', adjIndx)
                        let data = res.data._source
                        if (adjIndx <= 1) {
                            expect(data.name).toContain('__Y')
                            expect(data.description).toContain('__X')
                            expect(data.gradeLevels).toEqual([])
                            expect(data.contentAreaID).toBe(56)
                        } else if (adjIndx <= 2) {
                            expect(data.description).toContain('__Y')
                            expect(data.name).toContain('__X')
                            expect(data.gradeLevels).toEqual([])
                            expect(data.contentAreaID).toBe(56)
                        } else if (adjIndx <= 3) {
                            expect(data.name).toContain('__X')
                            expect(data.description).toContain('__X')
                            expect(data.gradeLevels).toEqual([])
                            expect(data.contentAreaID).toBe(57)
                        } else if (adjIndx <= 4) {
                            expect(data.gradeLevels).toEqual([1, 2])
                            expect(data.name).toContain('__X')
                            expect(data.description).toContain('__X')
                            expect(data.contentAreaID).toBe(56)
                        } else if (adjIndx <= 5) {
                            expect(data.name).toContain('__Y')
                            expect(data.description).toContain('__Y')
                            expect(data.gradeLevels).toEqual([1, 2])
                            expect(data.contentAreaID).toBe(57)
                        }
                    } else {
                        console.log(`TestID ${recordSet.TestID} of user ${item} returned a ${res.status}`)
                    }
                })
            }
        })
    })
})
