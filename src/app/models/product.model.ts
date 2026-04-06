import { CategoryModel } from './category.model';

export class ProductModel {
  id!: number;
  stock!: number;
  name!: string;
  brand!: string;
  model!: string;
  price!: number;
  imageUrl!: string;
  isFavorite!: boolean;
  rating!: number;
  createdAt!: Date;
  canDelete!: boolean;
  category!: CategoryModel;
}
