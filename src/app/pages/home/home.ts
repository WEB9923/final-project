import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ShopByCategory } from '../../components/shop-by-category/shop-by-category';
import { FeaturedProducts } from '../../components/featured-products/featured-products';

@Component({
  selector: 'app-home',
  imports: [Hero, ShopByCategory, FeaturedProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
