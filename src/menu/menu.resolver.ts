import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { KitchenResponseType } from './types/kitchen-resp.type';
import { MenuService } from './menu.service';
import { ERROR_FETCHING, ERROR_INSERTING } from 'src/shared/Consts';
import { KitchenInput } from './inputs/kitchen.input';
import * as moment from 'moment';
import { createWriteStream } from 'fs';
import { CategoryResponseType } from './types/category-resp.type';
import { CategoryInput } from './inputs/Category.input';

@Resolver('Menu')
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}
  //kitchen
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
  // menu categories
  @Query(() => CategoryResponseType)
  @UseGuards(GqlAuthGuard)
  async getOneCategory(@Args('id') id: string) {
    try {
      const res = await this.menuService.findCategoryById(id);
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

  @Query(() => CategoryResponseType)
  @UseGuards(GqlAuthGuard)
  async getCategories() {
    try {
      const res = this.menuService.findAllCategories();
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

  @Mutation(() => CategoryResponseType)
  @UseGuards(GqlAuthGuard)
  async createOrUpdateCategory(@Args('input') input: CategoryInput) {
      console.log(input)
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
                await this.menuService.updateCategory({
                  ...result,
                  imagePath: imagename,
                });
              else
                this.menuService.createCategory({
                  ...result,
                  imagePath: imagename,
                });
              return resolve(true);
            })
            .on('error', () => reject(false));
        });

        if (imagePromesse) return { ok: true, message: 'Category updated!' };
        else return { ok: false, error: ERROR_INSERTING };
      } else {
        const { image, ...result } = input;
        if (input.id) {
          await this.menuService.updateCategory({ ...result });
          return {
            ok: true,
            message: 'Category updated!',
          };
        } else {
          await this.menuService.createCategory({ ...result, imagePath: '' });
          return {
            ok: true,
            message: 'Category Added!',
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
  @Mutation(() => CategoryResponseType)
  @UseGuards(GqlAuthGuard)
  async deleteCategory(@Args('id') id: String) {
    const res = await this.menuService.removeCategory(id);
    if (res)
      return {
        ok: res,
        message: 'Category deleted!',
      };
    return {
      ok: res,
      error: 'Could not delete Category!',
    };
  }
}
