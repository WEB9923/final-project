import { Component, effect, ElementRef, inject, OnInit, signal, viewChildren } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { HttpService } from '../../services/http-service';
import { CategoryModel } from '../../../models/category.model';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-shop-by-category',
  imports: [RouterLink, LucideArrowRight, NgOptimizedImage],
  templateUrl: './shop-by-category.html',
  styleUrl: './shop-by-category.css',
})
export class ShopByCategory implements OnInit {
  httpService = inject(HttpService);
  router = inject(Router);

  categoryCards = viewChildren<ElementRef<HTMLElement>>('categoryCard');

  categories = signal<CategoryModel[]>([]);

  constructor() {
    effect((): void => {
      const cards = this.categoryCards();

      gsap.from(
        cards.map((item) => item.nativeElement),
        {
          delay: 0.5,
          y: -30,
          opacity: 0,
          duration: 0.3,
          stagger: 0.2,
        },
      );
    });
  }

  onHover(categoryCard: HTMLElement): void {
    gsap.to(categoryCard, {
      y: -15,
      duration: 0.3,
      rotateZ: 1.5,
    });
  }

  onLeave(categoryCard: HTMLElement): void {
    gsap.to(categoryCard, {
      y: 0,
      duration: 0.3,
      rotateZ: 0,
    });
  }

  async navigateToCategory(categoryName: string): Promise<void> {
    await this.router.navigate(['/shop'], {
      queryParams: {
        category: categoryName,
      },
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit(): void {
    this.httpService.getAll<{ data: CategoryModel[] }>({ endpoint: '/categories' }).subscribe({
      next: ({ data }): void => {
        const sliced = data.slice(0, 4);

        this.categories.set(sliced);
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }
}
