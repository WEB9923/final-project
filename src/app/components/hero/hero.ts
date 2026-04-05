import { AfterViewInit, Component, ElementRef, viewChildren } from '@angular/core';
import { LucideArrowRight, LucideZap } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [LucideZap, LucideArrowRight, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  heroItem = viewChildren<ElementRef<HTMLElement>>('heroItem');
  heroBtn = viewChildren<ElementRef<HTMLButtonElement>>('heroBtn');

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ defaults: { y: -30 } });

    tl.from(
      this.heroItem().map((item) => item.nativeElement),
      {
        delay: 0.5,
        stagger: 0.1,
        opacity: 0,
      },
    ).from(
      this.heroBtn().map((item) => item.nativeElement),
      {
        stagger: 0.1,
        opacity: 0,
      },
    );
  }
}
