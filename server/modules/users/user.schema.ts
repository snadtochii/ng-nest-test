import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: String,
    email_verified: Boolean,
    name: String,
    nickname: String,
    picture: String,
    sub: String,
    updated_at: Date
});
