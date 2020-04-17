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
export {Users, Reports}
