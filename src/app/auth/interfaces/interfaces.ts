export interface AuthResponse {
    //Respuesta del login
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    
    name?: string;
    surname?: string;
    email?: string;
    id?: string;


}

export interface Usuario {


    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    
    name?: string;
    surname?: string;
    email?: string;
    id?: string;

    // ok:boolean;



    // name?: string;
    // surname?: string;
    // email?: string;
    // id?: string;

    
}