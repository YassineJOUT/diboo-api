import { Model } from 'mongoose';
import { Carousel } from './interface/carousel.interface';
import { CarouselInput } from './input/carousel.input';
export declare class CarouselService {
    private readonly carouselModel;
    constructor(carouselModel: Model<Carousel>);
    create(carousel: CarouselInput): Promise<Carousel>;
    findOneById(id: string): Promise<Carousel>;
    update(carousel: CarouselInput): Promise<Carousel>;
    updateImage(image: string, id: string): Promise<boolean>;
    remove(id: String): Promise<boolean>;
}
