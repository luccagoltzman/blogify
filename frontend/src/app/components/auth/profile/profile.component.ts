import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  passwordForm: FormGroup;
  isLoading = true;
  isSavingProfile = false;
  isSavingPassword = false;
  profileError: string | null = null;
  passwordError: string | null = null;
  profileSuccess: string | null = null;
  passwordSuccess: string | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      bio: ['']
    });
    
    this.passwordForm = this.fb.group({
      current_password: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    // Aqui você buscaria os dados do usuário e preencheria o formulário
    setTimeout(() => {
      this.profileForm.patchValue({
        name: 'Usuário Exemplo',
        email: 'usuario@exemplo.com',
        bio: 'Esta é uma bio de exemplo para o usuário.'
      });
      this.isLoading = false;
    }, 1000);
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const passwordConfirmation = form.get('password_confirmation')?.value;
    
    if (password === passwordConfirmation) {
      return null;
    }
    
    return { passwordMismatch: true };
  }

  onProfileSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.isSavingProfile = true;
    this.profileError = null;
    this.profileSuccess = null;

    // Aqui você implementaria a lógica para atualizar o perfil
    console.log('Perfil enviado:', this.profileForm.value);
    
    // Simulando um processamento
    setTimeout(() => {
      this.isSavingProfile = false;
      this.profileSuccess = 'Perfil atualizado com sucesso!';
    }, 1000);
  }

  onPasswordSubmit(): void {
    if (this.passwordForm.invalid) {
      return;
    }

    this.isSavingPassword = true;
    this.passwordError = null;
    this.passwordSuccess = null;

    // Aqui você implementaria a lógica para atualizar a senha
    console.log('Senha enviada:', this.passwordForm.value);
    
    // Simulando um processamento
    setTimeout(() => {
      this.isSavingPassword = false;
      this.passwordSuccess = 'Senha atualizada com sucesso!';
      this.passwordForm.reset();
    }, 1000);
  }
} 