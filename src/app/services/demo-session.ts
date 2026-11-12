import { Injectable, computed, signal } from '@angular/core';
import { ACCOUNT } from '../data/mock-data';
import { Role } from '../data/models';

/**
 * Sesión de DEMOSTRACIÓN para la maqueta.
 * Permite cambiar de rol y ver cómo cambia "Mi cuenta".
 * Se reemplazará por la sesión real cuando exista la API (el rol lo dará el servidor,
 * nunca el registro).
 */
@Injectable({ providedIn: 'root' })
export class DemoSession {
  readonly role = signal<Role>('capitana');
  readonly account = ACCOUNT;

  readonly isCaptain = computed(() => this.role() === 'capitana' || this.role() === 'staff');
  readonly isStaff = computed(() => this.role() === 'staff');

  setRole(role: Role): void {
    this.role.set(role);
  }
}
