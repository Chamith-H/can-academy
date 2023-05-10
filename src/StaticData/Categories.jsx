import Technology from "../Assets/Images/Categories/Technology.png"
import Communication from "../Assets/Images/Categories/Communication.png"
import Caring from "../Assets/Images/Categories/Caring.png"
import Business from "../Assets/Images/Categories/Business.png"
import Coatching from "../Assets/Images/Categories/Coaching.png"
import LocalS from "../Assets/Images/Categories/Local.png"
import EdexcelS from "../Assets/Images/Categories/Edexcel.png"
import CambridgeS from "../Assets/Images/Categories/Cambridge.png"

const Categories = [
    {
        id:1,
        title:'Technology',
        image:Technology,

        subcategories: [
                            {
                                id_s:1,
                                name:'Kids',
                                icon:'',

                                contents: [
                                             {
                                                id_c:1,
                                                course:'CODING BASICS',
                                                level:'For Kids',
                                                picture:''
                                             },

                                             {
                                                id_c:2,
                                                course:'WEB DEVELOPMENT',
                                                level:'For Kids',
                                                picture:''
                                             },

                                             {
                                                id_c:3,
                                                course:'COMPUTER BASICS',
                                                level:'For Kids',
                                                picture:''
                                             },
                                          ]
                            },

                            {
                                id_s:2,
                                name:'Development',
                                icon:'',

                                contents: [
                                             {
                                                id_c:4,
                                                course:'WEB DEVELOPMENT',
                                                level:'Foundation',
                                                picture:''
                                             },

                                             {
                                                id_c:5,
                                                course:'WEB DEVELOPMENT',
                                                level:'Fullstack',
                                                picture:''
                                             },

                                             {
                                                id_c:6,
                                                course:'SOFTWARE ENGINEERING',
                                                level:'Foundation',
                                                picture:''
                                             },
                                          ]
                            },

                            {
                                id_s:3,
                                name:'Data',
                                icon:'',

                                contents: [
                                             {
                                                id_c:7,
                                                course:'DATA SCIENCE',
                                                level:'For beginers',
                                                picture:''
                                             },
                                          ]
                            },
                       ]
    },

    {
        id:2,
        title:'Communication',
        image:Communication,

        subcategories: [
            {
                id_s:1,
                name:'English',
                icon:'',

                contents: [
                             {
                                id_c:1,
                                course:'CODING BASICS',
                                level:'For Kids',
                                picture:''
                             },

                             {
                                id_c:2,
                                course:'WEB DEVELOPMENT',
                                level:'For Kids',
                                picture:''
                             },

                             {
                                id_c:3,
                                course:'COMPUTER BASICS',
                                level:'For Kids',
                                picture:''
                             },
                          ]
            },

            {
                id_s:2,
                name:'Sinhala',
                icon:'',

                contents: [
                             {
                                id_c:4,
                                course:'WEB DEVELOPMENT',
                                level:'Foundation',
                                picture:''
                             },

                             {
                                id_c:5,
                                course:'WEB DEVELOPMENT',
                                level:'Fullstack',
                                picture:''
                             },

                             {
                                id_c:6,
                                course:'SOFTWARE ENGINEERING',
                                level:'Foundation',
                                picture:''
                             },
                          ]
            },

            {
                id_s:3,
                name:'Tamil',
                icon:'',

                contents: [
                             {
                                id_c:7,
                                course:'DATA SCIENCE',
                                level:'For beginers',
                                picture:''
                             },
                          ]
            },
       ]
    },

    {
        id:3,
        title:'Caring',
        image:Caring,

        subcategories: [
            {
                id_s:1,
                name:'Kids',
                icon:'',

                contents: [
                             {
                                id_c:1,
                                course:'CODING BASICS',
                                level:'For Kids',
                                picture:''
                             },

                             {
                                id_c:2,
                                course:'WEB DEVELOPMENT',
                                level:'For Kids',
                                picture:''
                             },

                             {
                                id_c:3,
                                course:'COMPUTER BASICS',
                                level:'For Kids',
                                picture:''
                             },
                          ]
            },

            {
                id_s:2,
                name:'Development',
                icon:'',

                contents: [
                             {
                                id_c:4,
                                course:'WEB DEVELOPMENT',
                                level:'Foundation',
                                picture:''
                             },

                             {
                                id_c:5,
                                course:'WEB DEVELOPMENT',
                                level:'Fullstack',
                                picture:''
                             },

                             {
                                id_c:6,
                                course:'SOFTWARE ENGINEERING',
                                level:'Foundation',
                                picture:''
                             },
                          ]
            },

            {
                id_s:3,
                name:'Data',
                icon:'',

                contents: [
                             {
                                id_c:7,
                                course:'DATA SCIENCE',
                                level:'For beginers',
                                picture:''
                             },
                          ]
            },
       ]
    },

    {
        id:4,
        title:'Business',
        image:Business
    },

    {
        id:5,
        title:'Coaching & Mentoring',
        image:Coatching
    },

    {
        id:6,
        title:'Local School Syllabus',
        image:LocalS
    },

    {
        id:7,
        title:'Edexcel School Syllabus',
        image:EdexcelS
    },

    {
        id:8,
        title:'Cambridge School Syllabus',
        image:CambridgeS
    },
]

export default Categories