import { CarouselService } from './carousel.service';
import { CarouselInput } from './input/carousel.input';
export declare class CarouselResolver {
    private readonly carouselService;
    constructor(carouselService: CarouselService);
    getOneCarousel(id: string): Promise<import("./interface/carousel.interface").Carousel>;
    createCarousel(input: CarouselInput): Promise<import("./interface/carousel.interface").Carousel>;
    addCarouselPhoto(input: CarouselInput): Promise<boolean>;
    deleteCarousel(id: String): Promise<boolean>;
}
