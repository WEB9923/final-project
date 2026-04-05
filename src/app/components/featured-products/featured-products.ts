import {
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { LucideArrowRight, LucideShoppingCart, LucideStar } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../services/http-service';
import { ProductModel } from '../../../models/product.model';
import { NgOptimizedImage } from '@angular/common';
import { HelpersService } from '../../services/helpers-service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-featured-products',
  imports: [LucideArrowRight, RouterLink, NgOptimizedImage, LucideStar, LucideShoppingCart],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts {
  httpService = inject(HttpService);
  helper = inject(HelpersService);

  featuredSection = viewChild.required<ElementRef<HTMLElement>>('featuredSection');
  productCards = viewChildren<ElementRef<HTMLElement>>('productCard');

  products = signal<ProductModel[]>([]);

  constructor() {
    effect((): void => {
      gsap.from(
        this.productCards().map((item) => item.nativeElement),
        {
          scrollTrigger: {
            markers: false, // true only development mode
            trigger: this.featuredSection().nativeElement,
            start: 'top 35%',
            toggleActions: 'play none none none',
          },
          y: -50,
          opacity: 0,
          duration: 0.3,
          stagger: 0.25,
        },
      );
    });
  }

  onHover(element: HTMLElement): void {
    gsap.to(element, {
      y: -15,
      duration: 0.3,
    });
  }

  onLeave(element: HTMLElement): void {
    gsap.to(element, {
      y: 0,
      duration: 0.3,
    });
  }

  ngOnInit(): void {
    this.httpService
      .getAll<{
        data: { items: ProductModel[] };
      }>({ endpoint: '/products', query: '?Take=4&Page=1' })
      .subscribe({
        next: ({ data: { items } }) => {
          this.products.set(items);
        },
        error: (error): void => {
          console.log(error);
        },
      });
  }
}
