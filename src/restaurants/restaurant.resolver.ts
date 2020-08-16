import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantType } from './types/restaurant.type';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { RestaurantInput } from './input/restaurant.input';
import * as moment from 'moment';
import { createWriteStream } from 'fs';
import { RestaurantService } from './restaurant.service';
import { RestaurantResponseType} from './types/restaurant-resp.type'
@Resolver('Restaurant')
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

    @Mutation(() => RestaurantResponseType)
    @UseGuards(GqlAuthGuard)
    async createRestaurant(@Args('input') input: RestaurantInput){
        console.log('restaurant creation');
        try {
          if (input.image !== null) {
            const imagePromesse = await new Promise(async (resolve, reject) => {
              const { createReadStream, filename } = await input.image;
              const imagename = `img-${moment().format(
                'MM-DD-YYYY-h:mm:ss',
              )}.${filename.substr(filename.lastIndexOf('.') + 1)}`;
              return await createReadStream()
                .pipe(createWriteStream(__dirname + '/../../images/' + imagename))
                .on('finish', () => {
                  const { image, ...result } = input;
                  this.restaurantService.create({ ...result, imagePath: imagename });
                  return resolve(true);
                })
                .on('error', () => reject(false));
            });
    
            if (imagePromesse) return { ok: true };
            else return { ok: false };
          }
        } catch (err) {
          return {
            ok: false,
            error: 'Something went wrong while inserting',
          };
        }
        
    }
   
    @Mutation(() => RestaurantResponseType)
    @UseGuards(GqlAuthGuard)
    async addRestaurantPhoto(@Args('input') input: RestaurantInput): Promise<any> {
      //find the carousel to modify
      const car = await this.restaurantService.findOneById(input.id);
      if (!car) throw Error('Restaurant not found');
      const { createReadStream, filename } = await input.image;
      const imgPromise = await new Promise(async (resolve, reject) => {
        try {
          const res = createReadStream()
            .pipe(
              createWriteStream(
                __dirname +
                  `/../../images/${input.id}.${filename.substr(
                    filename.lastIndexOf('.') + 1,
                  )}`,
              ),
            )
            .on('finish', () => resolve(true))
            .on('error', () => reject(false));
          return res;
        } catch (err) {
          reject(false);
        }
      });
      // if upload success
      if (imgPromise) {
        const carUpdated = await this.restaurantService.update(input);
        if (!carUpdated)
          return {
            ok: false,
          };
        return {
          ok: true,
        };
      }
      return {
        ok: false,
      };
    }

    @Query(() => RestaurantResponseType)
    @UseGuards(GqlAuthGuard)
    async getOneRestaurant(@Args('id') id: string) {
      try {
        const res = await this.restaurantService.findOneById(id);
        return {
          ok: true,
          data: [res],
        };
      } catch (err) {
        return {
          ok: false,
          error: 'Something went wrong while fetching',
        };
      }
    }

    @Query(() => RestaurantResponseType)
    @UseGuards(GqlAuthGuard)
    async getRestaurants() {
      try {
        const res = this.restaurantService.findAll();
        return {
          ok: true,
          data: res,
        };
      } catch (err) {
        return {
          ok: false,
          error: 'Something went wrong while fetching',
        };
      }
    }

    @Mutation(() => Boolean)
    @UseGuards(GqlAuthGuard)
    async deleteRestaurant(@Args('id') id: String) {
        const res = this.restaurantService.remove(id);
        return res;
    }

    @Mutation(() => RestaurantResponseType)
    @UseGuards(GqlAuthGuard)
    async updateRestaurant(@Args('input') input: RestaurantInput){
        let returnTest= this.restaurantService.update(input);
        if(returnTest) return {
          ok: true,
        }
        else return {
          ok: false,
          error: "Rest update failed: error while updating restaurant"
        }
    }

    @Mutation(() => RestaurantResponseType)
    @UseGuards(GqlAuthGuard)
    async updateRestaurantStatus(@Args('id') id: String, @Args('status') status: boolean){
        let returnTest= this.restaurantService.updateStatus(id, status);
        if(returnTest) return {
          ok: true,
        }
        else return {
          ok: false,
          error: "Rest update failed: error while updating restaurant"
        }
    }


}
