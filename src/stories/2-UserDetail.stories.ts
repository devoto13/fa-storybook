import { APP_INITIALIZER } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UserDetailComponent } from '../app/user-detail.component';

storiesOf('User Detail', module)
  .addDecorator(
    moduleMetadata({
      imports: [ FontAwesomeModule ],
      declarations: [ UserDetailComponent ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => {
            return async () => {
              iconLibrary.addIcons(faUser);
            };
          },
          deps: [ FaIconLibrary ],
          multi: true,
        },
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-user-detail [fullName]="fullName"></app-user-detail>`,
      props: {
        fullName: 'John Doe',
      },
    };
  });
