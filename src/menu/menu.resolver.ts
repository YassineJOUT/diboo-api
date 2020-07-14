import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { KitchenResponseType } from './types/kitchen-resp.type';
import { MenuService } from './menu.service';
import { ERROR_FETCHING, ERROR_INSERTING } from 'src/shared/Consts';
import { KitchenInput } from './inputs/kitchen.input';
import * as moment from 'moment';
import { createWriteStream } from 'fs';

@Resolver('Menu')
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}
  @Query(() => KitchenResponseType)
  @UseGuards(GqlAuthGuard)
  async getOneKitchen(@Args('id') id: string) {
    try {
      const res = await this.menuService.findKitchenById(id);
      return {
        ok: true,
        data: [res],
      };
    } catch (err) {
      return {
        ok: false,
        error: ERROR_FETCHING,
      };
    }
  }

  @Query(() => KitchenResponseType)
  @UseGuards(GqlAuthGuard)
  async getKitchens() {
    try {
      const res = this.menuService.findAllKitchens();
      return {
        ok: true,
        data: res,
      };
    } catch (err) {
      return {
        ok: false,
        error: ERROR_FETCHING,
      };
    }
  }

  @Mutation(() => KitchenResponseType)
  @UseGuards(GqlAuthGuard)
  async createOrUpdateKitchen(@Args('input') input: KitchenInput) {
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
                await this.menuService.updateKitchen({
                  ...result,
                  imagePath: imagename,
                });
              else
                this.menuService.createKitchen({
                  ...result,
                  imagePath: imagename,
                });
              return resolve(true);
            })
            .on('error', () => reject(false));
        });

        if (imagePromesse) return { ok: true, message: 'Kitchen updated!' };
        else return { ok: false, error: ERROR_INSERTING };
      } else {
        const { image, ...result } = input;
        if (input.id) {
          await this.menuService.updateKitchen({ ...result });
          return {
            ok: true,
            message: 'Kitchen updated!',
          };
        } else {
          await this.menuService.createKitchen({ ...result, imagePath: '' });
          return {
            ok: true,
            message: 'Kitchen Added!',
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
  @Mutation(() => KitchenResponseType)
  @UseGuards(GqlAuthGuard)
  async deleteKitchen(@Args('id') id: String) {
    const res = await this.menuService.removeKitchen(id);
    if (res)
      return {
        ok: res,
        message: 'Kitchen deleted!',
      };
    return {
      ok: res,
      error: 'Could not delete kitchen!',
    };
  }
}
