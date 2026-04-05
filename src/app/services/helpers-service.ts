import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  formatCurrency({
    countryCode,
    currency,
    amount,
  }: {
    countryCode: 'ka-GE' | 'en-US';
    currency: 'GEL' | 'USD';
    amount: number;
  }) {
    return new Intl.NumberFormat(countryCode, {
      style: 'currency',
      currency,
    }).format(amount);
  }

  truncateText({ str, length }: { str: string; length: number }): string {
    return str.length >= length ? str.slice(0, length) + '...' : str;
  }
}
