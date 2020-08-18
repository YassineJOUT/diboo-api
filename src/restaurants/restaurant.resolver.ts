import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantType } from './types/restaurant.type';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { RestaurantInput } from './input/restaurant.input';
import * as moment from 'moment';
import { createWriteStream } from 'fs';
import { RestaurantService } from './restaurant.service';
import { RestaurantResponseType } from './types/restaurant-resp.type';
import { ERROR_INSERTING } from 'src/shared/Consts';
@Resolver('Restaurant')
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Mutation(() => RestaurantResponseType)
  @UseGuards(GqlAuthGuard)
  async addOrEditRestaurant(@Args('input') input: RestaurantInput) {
    try {
      if (input.image) {
        const imagePromesse = await new Promise(async (resolve, reject) => {
          const { createReadStream, filename } = await input.image;
          const imagename = `img-${moment().format(
            'MM-DD-YYYY-h:mm:ss',
          )}.${filename.substr(filename.lastIndexOf('.') + 1)}`;
          return await createReadStream()
            .pipe(createWriteStream(__dirname + '/../../images/' + imagename))
            .on('finish', async () => {
              const { image, ...result } = input;
              if (input.id)
                await this.restaurantService.update({
                  ...result,
                  imagePath: imagename,
                });
              else
                this.restaurantService.create({
                  ...result,
                  imagePath: imagename,
                });
              return resolve(true);
            })
            .on('error', () => reject(false));
        });

        if (imagePromesse) return { ok: true, message: 'Restaurant updated!' };
        else return { ok: false, error: ERROR_INSERTING };
      } else {
        const { image, ...result } = input;
        if (input.id) {
          await this.restaurantService.update({ ...result });
          return {
            ok: true,
            message: 'Restaurant updated!',
          };
        } else {
          await this.restaurantService.create({ ...result, imagePath: '' });
          return {
            ok: true,
            message: 'Restaurant Added!',
          };
        }
      }
    } catch (err) {
      return {
        ok: false,
        error: ERROR_INSERTING,
      };
    }
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
      const res = await this.restaurantService.findAll();
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

  @Mutation(() => RestaurantResponseType)
  @UseGuards(GqlAuthGuard)
  async deleteRestaurant(@Args('id') id: String) {
    const res = await this.restaurantService.remove(id);
    if (res)
      return {
        ok: true,
        message: 'Restaurant deleted!',
      };
    return {
      ok: false,
      error: 'Could not delete restaurant!',
    };
  }

  @Mutation(() => RestaurantResponseType)
  @UseGuards(GqlAuthGuard)
  async updateRestaurantStatus(
    @Args('id') id: String,
    @Args('status') status: boolean,
  ) {
    let returnTest = this.restaurantService.updateStatus(id, status);
    if (returnTest)
      return {
        ok: true,
        message: 'Status Updated!',
      };
    else
      return {
        ok: false,
        error: 'Rest update failed: error while updating restaurant',
      };
  }
}
