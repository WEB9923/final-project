import {
  AfterViewInit,
  Component,
  DOCUMENT,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { NAV_LINKS } from '../../lib/constants';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideBriefcase, LucideChevronDown, LucideMenu } from '@lucide/angular';
import gsap from 'gsap';
import { NgClass } from '@angular/common';
import { CategoryModel } from '../../../models/category.model';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, LucideChevronDown, LucideBriefcase, NgClass, LucideMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnInit {
  private httpService = inject(HttpService);
  private document = inject(DOCUMENT);

  navLinks = NAV_LINKS;
  isDropdownOpened: boolean = false;
  isMobileMenuOpened: boolean = false;

  categories = signal<CategoryModel[]>([]);

  dropdown = viewChild.required<ElementRef<HTMLElement>>('dropdown');
  navItems = viewChildren<ElementRef<HTMLElement>>('navItem');
  mobileMenu = viewChild.required<ElementRef<HTMLElement>>('mobileMenu');

  openDropdown(): void {
    this.isDropdownOpened = true;

    gsap.to(this.dropdown().nativeElement, {
      autoAlpha: 1,
      y: 10,
      duration: 0.3,
      ease: 'power2.out',
      zIndex: 100,
    });
  }

  closeDropdown(): void {
    this.isDropdownOpened = false;

    gsap.to(this.dropdown().nativeElement, {
      autoAlpha: 0,
      y: 0,
      duration: 0.2,
      delay: 0.1,
      ease: 'power2.in',
      zIndex: 100,
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;

    if (this.isMobileMenuOpened) {
      gsap.to(this.mobileMenu().nativeElement, {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.3,
      });

      this.document.body.style.overflow = 'hidden';
    } else {
      gsap.to(this.mobileMenu().nativeElement, {
        xPercent: 100,
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power3.in',
      });

      this.document.body.style.overflow = 'auto';
    }
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ defaults: { y: -30 } });

    tl.from(
      this.navItems().map((item) => item.nativeElement),
      {
        stagger: 0.1,
        opacity: 0,
      },
    );

    gsap.set(this.mobileMenu().nativeElement, {
      xPercent: 100,
      autoAlpha: 0,
    });
  }

  ngOnInit(): void {
    this.httpService.getAll<{ data: CategoryModel[] }>({ endpoint: '/categories' }).subscribe({
      next: ({ data }) => {
        this.categories.set(data);
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }
}
