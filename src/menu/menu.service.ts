import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Kitchen } from './interfaces/Kitchen.interface';
import { KitchenInput } from './inputs/kitchen.input';
import { Category } from './interfaces/Category.interface';
import { CategoryInput } from './inputs/Category.input';
import { Item } from './interfaces/Item.interface';
import { ItemInput } from './inputs/Item.input';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('Kitchen') private readonly kitchenModel: Model<Kitchen>,
    @InjectModel('Category') private readonly CategoryModel: Model<Category>,
    @InjectModel('Item') private readonly ItemModel: Model<Item>,
  ) {}
  // Kitchen
  async createKitchen(kitchen: KitchenInput): Promise<Kitchen> {
    const kitchenDocument = new this.kitchenModel({
      ...kitchen,
      createdAt: new Date(),
    });
    return kitchenDocument.save();
  }

  async findKitchenById(id: string): Promise<Kitchen> {
    return this.kitchenModel.findOne({ _id: id });
  }

  async findAllKitchens(): Promise<Kitchen[]> {
    return this.kitchenModel.find().exec();
  }

  async updateKitchen(kitchen: KitchenInput): Promise<Kitchen> {
    await this.kitchenModel
      .updateOne(
        {
          _id: kitchen.id,
        },
        {
          $set: { ...kitchen },
        },
      )
      .exec();
    return this.kitchenModel.findById(kitchen.id).exec();
  }
  async removeKitchen(id: String): Promise<boolean> {
    const record = await this.kitchenModel
      .deleteOne({
        _id: id,
      })
      .exec();

    return record.n === 1;
  }
  //Menu categories
  async createCategory(kitchen: CategoryInput): Promise<Category> {
    const kitchenDocument = new this.CategoryModel({
      ...kitchen,
      createdAt: new Date(),
    });
    return kitchenDocument.save();
  }

  async findCategoryById(id: string): Promise<Category> {
    return this.CategoryModel.findOne({ _id: id });
  }

  async findAllCategories(): Promise<Category[]> {
    return this.CategoryModel.find()
      .populate('items')
      .exec();
  }

  async updateCategory(kitchen: CategoryInput): Promise<Category> {
    await this.CategoryModel.updateOne(
      {
        _id: kitchen.id,
      },
      {
        $set: { ...kitchen },
      },
    ).exec();
    return this.CategoryModel.findById(kitchen.id).exec();
  }
  async removeCategory(id: String): Promise<boolean> {
    const record = await this.CategoryModel.deleteOne({
      _id: id,
    }).exec();

    return record.n === 1;
  }
  //Menu Itenms
  async createItem(input: ItemInput): Promise<Item> {
    const document = new this.ItemModel({
      ...input,
      createdAt: new Date(),
    });
    return document.save();
  }

  async findItemById(id: string): Promise<Item> {
    return this.ItemModel.findOne({ _id: id });
  }

  async findAllItems(): Promise<Item[]> {
    const res = await this.ItemModel.find()
      .exec();
      console.log(res);
      return res;
  }

  async updateItem(input: ItemInput): Promise<Item> {
    let cat = {};
    if (input.category) cat = { category: input.category };
    await this.ItemModel.updateOne(
      {
        _id: input.id
        
      },
      {
        $set: { ...input,...cat },
      },
    );
    return this.ItemModel.findById(input.id).exec();
  }
  async removeItem(id: String): Promise<boolean> {
    const record = await this.ItemModel.deleteOne({
      _id: id,
    }).exec();

    return record.n === 1;
  }
}
