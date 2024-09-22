export interface UserDataType {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    user_type: string;
    image?: string;
    country: string;
}

export interface UserProfileType {
    user?: number;
    display_name: string;
    state: string;
    city: string;
    contact_number: string;
    professional_role: string;
    experience_level: string;
    language_spoken: string;
    company_name: string;
}

export interface PasswordResetRequest {
    email: string;
}

export interface SubscribeUser {
    email: string;
}


export interface PasswordResetConfirm {
    password: string;
    password_confirm: string;
}

export interface ResendActivation {
    email: string;
}


export interface SendUserMessage {
    email: string;
    subject: string;
    content: string;
}


export interface Token {
    email: string;
    password?: string;
    token?: string;
}


