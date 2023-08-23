import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PoupupService {
  poupup = {
    type: '',
    color: '',
    symbol: '',
    title: '',
    message: '',
  };

  entity = '';

  alertPoupup = {
    type: 'alert',
    color: '#f65656',
    symbol: '⚠️',
    title: 'Attenzione!',
    message: 'Errore nel caricamento',
  };

  confirmPoupup = {
    type: 'confirm',
    color: '#35c28d',
    symbol: '✅',
    title: 'Confermato!',
    message: 'Caricamento completato con successo!',
  };

  isVisible = false;

  getPoupup(type: string) {
    if (type === this.alertPoupup.type) {
      this.poupup = this.alertPoupup;
      return this.alertPoupup;
    } else {
      this.poupup = this.confirmPoupup;
      return this.confirmPoupup;
    }
  }

  switchPoupup() {
    this.isVisible = false;
  }

  changeEntity(entity = '') {
    return (this.entity = entity);
  }

  showPoupup() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 4000);
  }

  constructor() {}
}
