import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LucideDynamicIcon,
  LucideEye,
  LucideEyeOff,
  LucideIcon,
  LucideLock,
  LucideMail,
  LucideUser,
} from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    BackButton,
    FormsModule,
    LucideDynamicIcon,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    LucideUser,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formData: Record<string, string> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  formItems: TLogin[] = [
    {
      type: 'text',
      name: 'firstname',
      placeholder: 'First Name',
      icon: LucideUser,
      isPassword: false,
      gridCols: 1,
    },
    {
      type: 'text',
      name: 'lastname',
      placeholder: 'Last Name',
      icon: LucideUser,
      isPassword: false,
      gridCols: 1,
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
      icon: LucideMail,
      isPassword: false,
      gridCols: 2,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      icon: LucideLock,
      isPassword: true,
      showPassword: false,
      gridCols: 2,
    },
  ];

  togglePassword(evt: MouseEvent, item: TLogin) {
    evt.preventDefault();

    item.showPassword = !item.showPassword;
  }

  handleRegister(evt: SubmitEvent): void {
    evt.preventDefault();

    console.log(this.formData);
  }

  protected readonly LucideEyeOff = LucideEyeOff;
  protected readonly LucideEye = LucideEye;
}

type TLogin = {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  name: string;
  icon: LucideIcon;
  isPassword: boolean;
  showPassword?: boolean;
  gridCols?: number;
};
