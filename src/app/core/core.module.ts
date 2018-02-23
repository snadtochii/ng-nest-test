import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesV2Service } from '../services/cases-v2.service';
import { FireAuthService } from './fire-auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CasesV2Service, FireAuthService]
})
export class CoreModule { }
