export interface User {
    accountRegister: string; 
    username: string;        
    password: string;        
    firstName: string;       
    lastName: string;        
    accountLogin: string;    
    token: string;          
    validity: Date;          
    creationDate: Date;      
    sid: string;            
    permissions: string[];   
}

export const users: User[] = [];
