import {
    GET_USERS, DELETE_USER, CREATE_USER, EDIT_USER, BAN_USER, CREATE_PET, GET_VOLUNTEERS, GET_PETS, EDIT_PET, DELETE_PET, CREATE_FORM, CREATE_CAMPAIGN, CREATE_PARTICIPANT, GET_FORM,
    GET_CAMPAIGNS, GET_PARTICIPANTS, CREATE_ADOPTER, GET_ADOPTER, EDIT_PARTICIPANTS
} from "./actions";

const initialState = {
    users: [],
    volunteers: [],
    pets: [],
    form: [],
    campaigns: [],
    participant: [],
    adopter: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload };
        case DELETE_USER:
            return { ...state, users: action.payload };
        case CREATE_USER:
            return { ...state, users: action.payload };
        case EDIT_USER:
            return { ...state, users: action.payload };
        case BAN_USER:
            return { ...state, users: action.payload };

        // Mascotas
        case CREATE_PET:
            return { ...state, pets: action.payload };
        case EDIT_PET:
            return { ...state, pets: action.payload };
        case DELETE_PET:
            return { ...state, pets: action.payload };
        case GET_PETS:
            return { ...state, pets: action.payload };

        // Voluntarios
        case GET_VOLUNTEERS:
            return { ...state, volunteers: action.payload };

        // Form Adoption
        case CREATE_FORM:
            return { ...state, form: action.payload };
        case GET_FORM:
            return { ...state, form: action.payload };

        // Campaña
        case CREATE_CAMPAIGN:
            return { ...state, campaigns: action.payload };
        case GET_CAMPAIGNS:
            return { ...state, campaigns: action.payload };
        // Participantes
        case CREATE_PARTICIPANT:
            return { ...state, participant: action.payload };
        case GET_PARTICIPANTS:
            return { ...state, participant: action.payload };
        case EDIT_PARTICIPANTS:
            return { ...state, participant: action.payload };

        // Adopters
        case CREATE_ADOPTER:
            return { ...state, adopter: action.payload };
        case GET_ADOPTER:
            return { ...state, adopter: action.payload };
        default:
            return { ...state };
    }
}

export default rootReducer;
