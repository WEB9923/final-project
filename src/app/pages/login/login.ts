import { Component } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideEye,
  LucideEyeOff,
  LucideIcon,
  LucideLock,
  LucideLogIn,
  LucideMail,
} from '@lucide/angular';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BackButton } from '../../components/back-button/back-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LucideLogIn, LucideDynamicIcon, NgClass, RouterLink, BackButton, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formData: Record<string, string> = {
    email: '',
    password: '',
  };

  formItems: TLogin[] = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
      icon: LucideMail,
      isPassword: false,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      icon: LucideLock,
      isPassword: true,
      showPassword: false,
    },
  ];

  protected readonly LucideEyeOff = LucideEyeOff;
  protected readonly LucideEye = LucideEye;

  togglePassword(evt: MouseEvent, item: TLogin) {
    evt.preventDefault();

    item.showPassword = !item.showPassword;
  }

  handleLogin(evt: SubmitEvent) {
    evt.preventDefault();

    console.log(this.formData);
  }
}

type TLogin = {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  name: string;
  icon: LucideIcon;
  isPassword: boolean;
  showPassword?: boolean;
};
