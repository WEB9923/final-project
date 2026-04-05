import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideArrowLeft, LucideLock, LucideMail, LucideSend } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [
    BackButton,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    LucideLock,
    LucideMail,
    LucideArrowLeft,
    LucideSend,
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  emailValue: string = '';

  handleResetPassword(evt: SubmitEvent): void {
    evt.preventDefault();

    console.log(this.emailValue);
  }
}
