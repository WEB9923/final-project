import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ShopByCategory } from '../../components/shop-by-category/shop-by-category';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { OfferCard } from '../../components/offer-card/offer-card';

@Component({
  selector: 'app-home',
  imports: [Hero, ShopByCategory, FeaturedProducts, OfferCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
