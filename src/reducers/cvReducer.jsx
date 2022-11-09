const initialState=[
    {
        "resume": [
            {
                "cvData": {
                    "contact": {
                        "port": "",
                        "email": "",
                        "city": "",
                        "site": "",
                        "linkedin": ""
                    },
                    "languages": [],
                    "cms": [],
                    "tools": [],
                    "quality": [],
                    "Interest": []
                },
                "profil": [],
                "skills": [],
                "xperiences": {
                    "dev": []
                },
                "education": {
                    "school": []
                }
            }
        ]
    }
]
const cvReducer = (state = { data: initialState }, action) => {
    switch (action.type) {
        case 'DATA_RECEIVE':
            return {
                data: 
                    [
                        {...action.payload}
                    ]
                
            }
        case'RESET':
            return state = {
                data: null
            }
        default:
            return state
    }
}
export default cvReducer