import { AfterViewInit, Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.css',
})
export class OfferCard implements AfterViewInit {
  offerCard = viewChild.required<ElementRef<HTMLElement>>('offerCard');
  offerCardItems = viewChildren<ElementRef<HTMLElement>>('offerCardItem');

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.offerCard().nativeElement,
        start: 'top 55%',
      },
    });

    tl.fromTo(
      this.offerCard().nativeElement,
      {
        height: 0,
        opacity: 0,
        autoAlpha: 0,
      },
      {
        height: 'auto',
        opacity: 1,
        autoAlpha: 1,
        duration: 0.9,
      },
    ).from(
      this.offerCardItems().map((item) => item.nativeElement),
      {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.12,
      },
      '+=0.01',
    );
  }
}
