import { Upload } from 'src/shared/upload';
export declare class CarouselInput {
    id?: string;
    readonly title?: string;
    readonly subtitle?: string;
    readonly status?: boolean;
    readonly bannerLink?: string;
    readonly photo: Upload;
}
