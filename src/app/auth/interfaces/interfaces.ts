export interface AuthResponse {
    //Respuesta del login


    ok: boolean;
    uid?: string;
    name?: string;
    token?: string; 
    msg?: string;


}

export interface Usuario {

    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;

    name?: string;
    surname?: string;
    email?: string;
    id?: string;

}