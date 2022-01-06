import { Component, OnInit } from '@angular/core';

import { AccountService } from '../libs/auth/account.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  userName = '';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.userName = this.accountService.getAccountDetails.firstName ? this.accountService.getAccountDetails.firstName : '';
  }

}
