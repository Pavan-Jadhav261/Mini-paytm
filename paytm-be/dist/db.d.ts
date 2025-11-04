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
export declare const accountModel: mongoose.Model<{
    userId?: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    } | null;
    balance?: number | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId?: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    } | null;
    balance?: number | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    userId?: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    } | null;
    balance?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId?: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    } | null;
    balance?: number | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId?: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    } | null;
    balance?: number | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userId?: {
        prototype?: mongoose.Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    } | null;
    balance?: number | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map