import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FormData1 {
    celular: string;
    numdoc: string;
    typedoc: string;
}

interface FormData2 {
    planselected: string;
    priceselected: number;
}

interface RemoteDataPlans {
      name: string;
      price: number,
      description: Array<string>,
      age: number
}

interface RemoteDataUser {
    name: string; 
    lastName: string;
    birthDay: string;
}

interface FormState {
    formData1: FormData1;
    formData2: FormData2;
    remoteDataPlans: RemoteDataPlans;
    remoteDataUser: RemoteDataUser;
}

const initialState: FormState = {
    formData1: { celular: '', numdoc: '', typedoc: '' },
    formData2: { planselected: '' , priceselected: 0},
    remoteDataPlans: { 
    name: 'Plan en Casa',
      price: 39,
      description: [
        'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
        'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
        'Indemnización de S/300 en caso de hospitalización por más de un día.'
      ],
      age: 60
     },
    remoteDataUser: { name: '', lastName: '', birthDay: '' },
    
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData1: (state, action: PayloadAction<FormData1>) => {
            state.formData1 = action.payload;
        },
        setFormData2: (state, action: PayloadAction<FormData2>) => {
            state.formData2 = action.payload;
        },
        setRemoteDataUser: (state, action: PayloadAction<RemoteDataUser>) => {
            state.remoteDataUser = action.payload;
        },
        setRemoteDataPlans: (state, action: PayloadAction<RemoteDataPlans>) => {
            state.remoteDataPlans = action.payload;
        },
        
    },
});

export const { setFormData1, setFormData2, setRemoteDataUser, setRemoteDataPlans } = formSlice.actions;

export default formSlice.reducer;