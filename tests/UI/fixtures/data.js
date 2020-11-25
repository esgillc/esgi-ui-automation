const Users = {
    teacher: {
        credentials: {
            username: 'sbuckhoff',
            password: 'automation01!'
        },
        user0: {
            credentials: {
                username: 'automation000',
                password: 'automation01!'
            }
        },
        user1: {
            credentials: {
                username: 'automation001',
                password: 'automation01!'
            }
        },
        user2: {
            credentials: {
                username: 'automation0002',
                password: 'automation01!'
            }
        },
        user3: {
            credentials: {
                username: 'automation0003',
                password: 'automation01!'
            }
        },
        user4: {
            credentials: {
                username: 'automation0004',
                password: 'automation01!'
            }
        },
        user5: {
            credentials: {
                username: 'automation0005',
                password: 'automation01!'
            }
        },
        user6: {
            credentials: {
                username: 'automation0006',
                password: 'automation01!'
            }
        },
        user7: {
            credentials: {
                username: 'automation0007',
                password: 'automation01!'
            }
        },
        user8: {
            credentials: {
                username: 'automation0008',
                password: 'automation01!'
            }
        },
        gsteach1: {
            credentials: {
                username: 'gsteach1',
                password: 'automation01!'
            }
        },
        gsteach2: {
            credentials: {
                username: 'gsteach2',
                password: 'automation01!'
            }
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
// const Types = [
//     'Parent Letter',
//     'Flashcards',
//     'Bingo',
//     'Student Detail',
//     'Student Progress',
//     'Untested Students',
//     'Class Totals',
//     'Class Grades',
//     'Item Analysis',
//     'Pie Charts'
// ]

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
    teacher: {
        initial: {
            types: [
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
            ],
            props: [
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
                    name: 'Class Grades',
                    title: 'Setup Grade Scales'
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
        },
        group: {
            types: [
                'Parent Letter',
                'Flashcards',
                'Bingo',
                'Student Detail',
                'Student Progress',
                'Untested Students',
                'Group Totals',
                'Group Grades',
                'Item Analysis',
                'Pie Charts'
            ],
            props: [
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
                    name: 'Group Totals',
                    title: 'Group Totals Report'
                },
                {
                    name: 'Group Grades',
                    title: 'Setup Grade Scales'
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
        }
    },
    types: [
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
    ],
    class: [
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
    districtadmin: {
        initial: {
            types: [
                'District Students',
                'District Totals',
                'District Grades',
                'District Growth',
                'Pie Charts',
                'Item Analysis',
                'Teacher Activity'
            ],
            props: [
                // {
                //     name: 'District Students',
                //     title: 'Setup Grade Scales'
                // },
                {
                    name: 'District Totals',
                    title: 'District Totals Report'
                },
                {
                    name: 'District Grades',
                    title: 'Setup Grade Scales'
                },
                // {
                //     name: 'District Growth',
                //     title: 'Setup Grade Scales'
                // },
                {
                    name: 'Pie Charts',
                    title: 'Pie Charts'
                },
                {
                    name: 'Item Analysis',
                    title: 'Item Analysis'
                }
                // {
                //     name: 'Teacher Activity',
                //     title: 'Teacher Activity Report'
                // }
            ]
        },
        school: {
            types: [
                'School Students',
                'School Totals',
                'School Grades',
                'Item Analysis',
                'Pie Charts'
            ],
            props: [
                // {
                //     name: 'School Students',
                //     title: 'Setup Grade Scales'
                // },
                // {
                //     name: 'School Totals',
                //     title: 'Setup Grade Scales'
                // },
                {
                    name: 'School Grades',
                    title: 'Setup Grade Scales'
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
        },
        teacher: {
            types: [
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
            ],
            props: [
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
                    name: 'Class Grades',
                    title: 'Setup Grade Scales'
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
        },
        classes: {
            types: [
                'Bingo',
                'Untested Students',
                'Item Analysis',
                'Pie Charts'
            ],
            props: [
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
            ]
        },
        group: {
            types: [
                'Parent Letter',
                'Flashcards',
                'Bingo',
                'Student Detail',
                'Student Progress',
                'Untested Students',
                'Group Totals',
                'Group Grades',
                'Item Analysis',
                'Pie Charts'
            ]
        }
    },
    schooladmin: {
        initial: {
            types: [
                'School Students',
                'School Totals',
                'School Grades',
                'Item Analysis',
                'Pie Charts'
            ],
            props: [
                {
                    name: 'School Students',
                    title: 'School Students Totals Report'
                },
                {
                    name: 'School Totals',
                    title: 'School Totals Report'
                },
                {
                    name: 'School Grades',
                    title: 'Setup Grade Scales'
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
        },
        teacher: {
            types: [
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
            ],
            props: [
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
                    name: 'Class Grades',
                    title: 'Setup Grade Scales'
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
        },
        classes: {
            types: [
                'Bingo',
                'Untested Students',
                'Item Analysis',
                'Pie Charts'
            ]
        },
        group: {
            types: [
                'Parent Letter',
                'Flashcards',
                'Bingo',
                'Student Detail',
                'Student Progress',
                'Untested Students',
                'Group Totals',
                'Group Grades',
                'Item Analysis',
                'Pie Charts'
            ]
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
            username: 'Username: ',
            verifyemaillink: '/reset-password?key=',
            expiremessage: 'The link will expire in 1 hour. If you don\'t want to reset your password, please',
            concerns: 'If you have any concerns or you did not ask to reset your password, please',
            contact: 'contact ESGI Support [support@esgisoftware.com].'
        }

    }
}

const Signup = {
    users: {
        user1: {
            email: 'TDB',
            username: 'signupuser',
            password: 'automation01!',
            promocode: ''
        },
        user2: {
            activationcode: '29D1BC7B',
            email: 'TDB',
            username: 'user',
            password: 'automation01!',
            promocode: ''
        }
    },
    fields: {
        email: {
            invalid: [
              //  '',
                'invalid',
                'invalid@',
                'invalid@esgi',
                'invalid@esgi.',
                '@esgi.com',
                '@esgi.',
                'invalid@.com'
            ],
            valid: 'valid@esgi.com'
        },
        username: {
            invalid: [
                // {
                //     test: 'Empty',
                //     username: '',
                //     msg: 'Required'
                // },
                {
                    test: 'OneCharacter',
                    username: 'a',
                    msg: 'User name must be at least 3 characters long'
                },
                {
                    test: 'TwoCharacters',
                    username: 'ab',
                    msg: 'User name must be at least 3 characters long'},
                {
                    test: 'MoreThan40Characters (41)',
                    username: '41characters41characters41characters41cha',
                    msg: 'Sorry. Please create a username that is 40 characters or less'
                },
                {
                    test: 'VeryLargeNumberOfCharacters',
                    username: 'VeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharacters',
                    msg: 'Sorry. Please create a username that is 40 characters or less'
                },
                {
                    test: 'Invalid Characters #',
                    username: 'invalid#',
                    msg: 'A username can only contain letters A-Z, numbers 0-9, @ signs, periods and underscores'
                },
                {
                    test: 'Existing Username',
                    username: 'danadmin',
                    msg: 'User name is used. Please choose another one'
                }
            ],
            valid: [
                {
                    test: '3 Characters',
                    username: 'xxx',
                    msg: ''
                },
                {
                    test: 'Normal Length',
                    username: 'validusername',
                    msg: ''
                },
                {
                    test: '40 Characters',
                    username: '40characters40characters40characters40ch',
                    msg: ''
                }
            ]
        },
        password: {
            invalid: [
                // {
                //     test: 'Empty',
                //     password: '',
                //     msg: 'Required'
                // },
                {
                    test: '1Character',
                    password: 'a',
                    msg: 'Password must be at least 8 characters in length'
                },
                {
                    test: '7Characters',
                    password: 'xxxxxxx',
                    msg: 'Password must be at least 8 characters in length'
                }
                // {
                //     test: 'VeryLargeNumberOfCharacters',
                //     password: 'VeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharactersVeryLargeNumberOfCharacters',
                //     msg: ''
                // }
            ],
            valid: [
                {
                    test: '8Characters',
                    password: 'password',
                    msg: ''
                },
                {
                    test: '9Characters',
                    password: 'password1',
                    msg: ''
                },
                {
                    test: 'LongPassword',
                    password: '40characters40characters40characters40ch',
                    msg: ''
                }
            ]
        },
        promocode: {
            valid: '1006',
            invalid: {
                test: 'x',
                msg: 'Invalid promo code'
            },
            expired: {
                test: '1003',
                msg: 'This promo code already has expired'
            },
            activationcode: {
                test: '29D1BC7B',
                msg: 'It looks like you entered an Activation Code.'
            }
        }
    },
    rules: {
        email: {
            valid: 'autopopulate@esgi.com',
            toolongvalid: 'toolongtobeusernametoolongtobeusernametoolongtobeusernametoolongtobeusername@esgi.com',
            invalid: 'dontautopopulate@',
            existing: 'matt.wasko@esgisoftware.com'
        }
    }
}
export {
    Users,
    Reports,
    Login,
    Signup
}
