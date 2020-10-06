// const expect = require('expect')
const sql = require('mssql')
const axios = require('axios')

describe('Login page', function () {
    let items = [
        1138017,
        1142751,
        1138018,
        1138019,
        1138020,
        1138021,
        1138022,
        1138023,
        1138024,
        1138025,
        1138026,
        1138027,
        1138028,
        1138029,
        1138030,
        1138031,
        1138032,
        1138034,
        1138035,
        1138036,
        1138037,
        1138039,
        1138040,
        1138041,
        1138042,
        1138043,
        1138044,
        1138045,
        1138046,
        1138047,
        1154669,
        1138048,
        1138049,
        1138050,
        1138051,
        1138052,
        1138053,
        1138054,
        1138055,
        1138056,
        1138057,
        1138058,
        1138059,
        1138060,
        1138061,
        1138062,
        1138063,
        1138064,
        1138065,
        1138066
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
                    let result = await sql.query`SELECT Top 80 CreatorID, TestID, Description FROM Tests
                    WHERE CreatorID = ${item}
                    ORDER BY CreateDate DESC`
                    // console.dir(result.recordsets)
                    // const recordSet = result.recordset[0]
                    result.recordset.forEach(async function (record) {
                        const options = {
                            method: 'GET',
                            headers: { 'content-type': 'application/json' },
                            url: `http://elasticsearch.beta:9200/tests/_doc/${record.TestID}`
                        }
                        let res = await axios(options)
                        if (res.status === 200) {
                            console.log(`\tVerifying test id ${record.TestID} created by user with id ${item}`)
                            adjIndx = index + 1
                            // console.log('INDEX:::', adjIndx)
                            let data = res.data._source
                            if (adjIndx <= 10) {
                                expect(data.name).toContain('__Y')
                                expect(data.description).toContain('__X')
                                expect(data.gradeLevels).toEqual([])
                                expect(data.contentAreaID).toBe(56)
                            } else if (adjIndx <= 20) {
                                expect(data.description).toContain('__Y')
                                expect(data.name).toContain('__X')
                                expect(data.gradeLevels).toEqual([])
                                expect(data.contentAreaID).toBe(56)
                            } else if (adjIndx <= 30) {
                                expect(data.name).toContain('__X')
                                expect(data.description).toContain('__X')
                                expect(data.gradeLevels).toEqual([])
                                expect(data.contentAreaID).toBe(57)
                            } else if (adjIndx <= 40) {
                                expect(data.gradeLevels).toEqual([1, 2])
                                expect(data.name).toContain('__X')
                                expect(data.description).toContain('__X')
                                expect(data.contentAreaID).toBe(56)
                            } else if (adjIndx <= 50) {
                                expect(data.name).toContain('__Y')
                                expect(data.description).toContain('__Y')
                                expect(data.gradeLevels).toEqual([1, 2])
                                expect(data.contentAreaID).toBe(57)
                            }
                        } else {
                            console.log(`TestID ${record.TestID} of user ${item} returned a ${res.status}`)
                        }
                    })
                })
            }
        })
    })
})
