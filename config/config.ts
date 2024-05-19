interface EnvironmentVariables {
    googleAuthId: string,
    googleAuthSecret: string,
    mongodbUrl: string,
    mongoLocalUrl: string,
    cloudinaryUploadPreset: string,
    cloudinaryUploadCloud: string,
    cloudinaryApiKey: string,
    nextAutSecretKey: string,
}

export const envVariables: EnvironmentVariables = {
    googleAuthId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
    googleAuthSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    mongodbUrl: process.env.NEXT_PUBLIC_MONGODB_URI!,
    mongoLocalUrl: process.env.LOCAL_MONGODB_URI!,
    cloudinaryUploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    cloudinaryUploadCloud: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_CLOUD!,
    cloudinaryApiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
    nextAutSecretKey: process.env.SECRET_KEY_AUTH!,
}

export interface Product {
    _id: string,
    name: string,
    images: string[],
    description: string,
    price: number,
    amount: number,
    __v: number,
    category: CategoryType,
    categoryProperties: Object,
}

export interface ProductType {
    _id: string,
    name: string,
    brand: [{
        _id: string,
        brandName: string,
        brandImages: string[],
    }],
    __v: number
}

export interface UploadProductType {
    _id: string,
    brandName: string,
    brandImages: string[],
}

export interface Category {
    _id: string,
    name: string,
    parent: string,
    __v: number
}

export interface CategoryType {
    _id: string,
    name: string,
    __v: number,
    parent?: {
        _id?: string,
        name?: string,
        __v?: number,
    },
    properties: Object,
}

export interface PropertyType {
    catName: string,
    properties: Object
}

export interface CatProperty {
    catName: string,
    properties: Object
}