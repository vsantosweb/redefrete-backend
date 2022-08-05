
export type DriverAttributes = {
    uuid?: string
    name?: string
    email?: string
    password?: string
    phone?: string
    gender?: string
    status?:  'Pendente de Ativação' | 'Ativo' | 'Desativado';
    notify?: boolean
    newsletter?: boolean
    email_verified_at?: Date
    last_activity?: Date
    home_dir?: string
    first_time?: Date
    accepted_terms?: string
    user_agent?: string
    ip?: string
    created_at?: Date
    updated_at?: Date
    documents?: DriverDocument
}

type DriverDocument = {
    id?: number,
    driver_id?: number,
    document_id?: number,
    document_number?: string,
    is_main?: boolean,
    metadata?: string,
    created_at?: Date,
    updated_at?: Date,
}


type DriverStatus = {

}

