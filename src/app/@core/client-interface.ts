import { EnumStatusClient } from './types';

export interface IClient {
    name: string,
    email: string,
    phone: number,
    status: EnumStatusClient,
    id: string,
}