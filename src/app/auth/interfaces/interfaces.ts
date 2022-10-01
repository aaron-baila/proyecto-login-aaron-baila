export interface AuthResponse {
    //Respuesta del login
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    ok: boolean;

}

export interface Usuario {



    accessToken: string;
    refreshToken?: string;
    tokenType?: string;

    ok:boolean;



    // name?: string;
    // surname?: string;
    // email?: string;
    // id?: string;

    
}