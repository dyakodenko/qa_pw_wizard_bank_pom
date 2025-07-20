import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.lastRow = page.getByRole('row').last()
    this.customerRow = page.getByRole('row');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async assertCustomerFirstName(value) {
   await expect(this.lastRow).toContainText(value);
  }

  async assertCustomerLastName(value) {
   await expect(this.lastRow).toContainText(value);
  }

  async assertCustomerPostCode(value) {
   await expect(this.lastRow).toContainText(value);
  }


  async assertAccountNumberIsEmpty() {
    await expect(this.lastRow.getByRole('cell').nth(3)).toHaveText('');
  }

  async clickDeleteButtonForUser(firstName) {
    await this.page.getByRole('row').filter({hasText: firstName}).getByRole('button').click();
  }

  async assertCustomerDoesNotExist(firstName) {
    await expect(this.customerRow.filter({hasText: firstName})).toBeHidden();
  }

   async assertCustomerExist(firstName) {
    await expect(this.customerRow.filter({hasText: firstName})).toBeVisible();
  }


}
