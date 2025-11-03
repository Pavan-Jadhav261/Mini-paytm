import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    username: string;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    username: string;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    username: string;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map