import { Component, Input } from '@angular/core';
import { UserProfile } from '../../models/user-profile.interface';
import { DatePipe } from '@angular/common';
import { AgePipe } from '../../../../shared/pipes/age/age.pipe';

@Component({
  selector: 'app-user-readonly-details',
  standalone: true,
  imports: [DatePipe, AgePipe],
  templateUrl: './user-readonly-details.component.html',
  styleUrl: './user-readonly-details.component.scss',
})
export class UserReadonlyDetailsComponent {
  @Input() userProfile: UserProfile | undefined;
}
