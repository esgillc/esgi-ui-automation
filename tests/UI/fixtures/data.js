const Users = {
    teacher: {
        credentials: {
            username: 'sbuckhoff',
            password: 'automation01!'
        }
    },
    districtadmin: {
        credentials: {
            username: 'glendaleadmin',
            password: 'automation01!'
        }
    },
    schooladmin: {
        credentials: {
            username: 'keppeladmin',
            password: 'automation01!'
        }
    },
    legacy: {
        teacheradmin: {
            credentials: {
                username: 'dan504',
                password: 'Wentiirim'
            }
        }
    }
}
const Types = [
    'Parent Letter',
    'Flashcards',
    'Bingo',
    'Student Detail',
    'Student Progress',
    'Untested Students',
    'Class Totals',
    'Class Grades',
    'Item Analysis',
    'Pie Charts'
]

const TeacherReportsObj = [
    {
        name: 'Parent Letter',
        title: 'Parent Letter Settings'
    },
    {
        name: 'Flashcards',
        title: 'Flashcards Settings'
    },
    {
        name: 'Student Detail',
        title: 'Student Detail Report'
    },
    {
        name: 'Student Progress',
        title: 'Student Progress Report'
    },
    {
        name: 'Untested Students',
        title: 'Untested Students'
    },
    {
        name: 'Class Totals',
        title: 'Class Totals Report'
    },
    {
        name: 'Item Analysis',
        title: 'Item Analysis'
    },
    {
        name: 'Pie Charts',
        title: 'Pie Charts'
    }
]

const Reports = {
    types: Types,
    class: [
        {
            name: 'Flashcards',
            title: 'Flashcards Settings'
        },
        {
            name: 'Untested Students',
            title: 'Untested Students'
        },
        {
            name: 'Item Analysis',
            title: 'Item Analysis'
        },
        {
            name: 'Pie Charts',
            title: 'Pie Charts'
        }
    ],
    allclasses: TeacherReportsObj,
    schooladmin: {
        allteachers: {
            types: [
                'School Students',
                'School Totals',
                'School Grades',
                'Item Analysis',
                'Pie Charts'
            ],
            objs: [
                {
                    name: 'Item Analysis',
                    title: 'Item Analysis'
                },
                {
                    name: 'Pie Charts',
                    title: 'Pie Charts'
                }
            ]
        },
        teacher: {
            types: Types,
            obj: TeacherReportsObj
        }
    }
}

const Login = {
    forgotpassword: {
        resetpasswordemail: {
            from: '"ESGI support" <sam@esgisoftware.com>',
            subject: 'Reset password',
            useremail: 'test001@mailkept.com',
            lastlogindate: 'Last Login Date:',
            username: 'dan504',
            verifyemaillink: 'https://www.esgisoftware.com/reset-password?key=',
            expiremessage: 'The link will expire in 1 hour. If you don\'t want to reset your password, please',
            concerns: 'If you have any concerns or you did not ask to reset your password, please',
            contact: 'contact ESGI Support [support@esgisoftware.com].'
        }

    }
}
export {Users, Reports, Login}
