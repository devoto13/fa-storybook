import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <h1>
      <fa-icon icon="user"></fa-icon>
      {{ fullName }}
    </h1>

    <p>Full name: {{ fullName }}</p>
  `,
})
export class UserDetailComponent {
  @Input()
  fullName: string;
}
