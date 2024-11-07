import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../models/user-profile.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { statesList } from '../../models/states-list';
import { disneyParks } from '../../models/parks-list';
import { UserReadonlyDetailsComponent } from '../../components/user-readonly-details/user-readonly-details.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, UserReadonlyDetailsComponent],
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  userProfile: UserProfile | undefined;
  disneyParks = disneyParks;
  statesList = statesList;
  isEditing: boolean = false;

  constructor() {
    this.userProfileForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.populateFormFromLocalStorage();
  }

  initializeForm() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      state: new FormControl(''),
      favChar: new FormControl(''),
      favMovie: new FormControl(''),
      favDisneyLand: new FormControl(''),
      lastUpdated: new FormControl(new Date()),
    });
  }

  populateFormFromLocalStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const currentUser = JSON.parse(storedUser);
      this.userProfile = currentUser;
      this.userProfileForm.patchValue(currentUser);
    }
  }

  onSubmit(): void {
    console.log(this.userProfileForm.value);
    if (this.userProfileForm.valid) {
      this.userProfile = this.userProfileForm.value;
      localStorage.setItem('currentUser', JSON.stringify(this.userProfile));
      this.toggleEdit();
    }
  }

  onCancel(): void {
    this.toggleEdit();
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }
}
