import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../components/icon/icon';
import { OtpInput } from '../../../components/otp-input/otp-input';

/**
 * Login único (jugadoras, capitanas y staff), sin contraseña: WhatsApp o correo → código de 6 dígitos.
 * El rol lo define el servidor; la vista de "Mi cuenta" se adapta a él.
 * La maqueta muestra los dos pasos a la vez; con la lógica, el paso 2 aparece al enviar.
 */
@Component({
  selector: 'app-entrar',
  imports: [RouterLink, Icon, OtpInput],
  templateUrl: './entrar.html',
  styleUrl: './entrar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Entrar {}
