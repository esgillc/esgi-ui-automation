const expect = require('expect')
const sql = require('mssql')

describe('Login page', function () {
    let items = [
        1138017
        // 1142751,
        // 1138018,
        // 1138019,
        // 1146935
    ]
    const sqlConfig = {
        user: 'daniel',
        password: 'jGv8j2nRMF$jEKx!',
        server: 'porky.esgisoftware.com',
        database: 'beta_ESGI'
    }
    before(function () {
    })
    it('should be on login page', function () {
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
                    let result = await sql.query`SELECT top 1
                        CONCAT(Users.FirstName, ' ', Users.LastName) AS OwnerFullName,
                        Tests.CreatorID,
                        Tests.TestID,
                        Tests.CreateDate,
                        Tests.Name,
                        Tests.SuggestedGradeLevel,
                        Tests.Type,
                        Tests.Color,
                        Tests.Description,
                        Tests.ContentAreaID
                        FROM Users
                        INNER JOIN Tests ON Users.UserID=Tests.CreatorID
                        WHERE UserID = ${item}
                        ORDER BY Tests.CreateDate Desc`
                    console.dir(result)
                    adjIndx = index + 1
                    console.log('INDEX:::', adjIndx)
                    const recordSet = result.recordset[0]
                    if (adjIndx <= 1) {
                        expect(recordSet.Name).toContain('__Y')
                    } else if (adjIndx <= 2) {
                        expect(recordSet.Description).toContain('__X')
                    } else if (adjIndx <= 3) {
                        expect(recordSet.ContentAreaID).toBe(57)
                    } else if (adjIndx <= 4) {
                        expect(recordSet.SuggestedGradeLevel).toBe([0, 1])
                    } else if (adjIndx <= 5) {
                        expect(recordSet.Name).toContain('__Y')
                        expect(recordSet.Description).toContain('__Y')
                        expect(recordSet.SuggestedGradeLevel).toBe()
                        expect(recordSet.ContentAreaID).toBe(1)
                    }
                })
            }
        })
    })
})
