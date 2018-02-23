import { Document } from 'mongoose';

export interface User extends Document {
    readonly email: String;
    readonly email_verified: Boolean;
    readonly name: String;
    readonly nickname: String;
    readonly picture: String;
    readonly sub: String;
    readonly updated_at: String;
}
