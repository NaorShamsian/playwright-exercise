class ContactPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.companyInput = page.locator('#company');
    this.websiteInput = page.locator('#website');
    this.employeesDropdown = page.locator('#employees');
    this.submitButton = page.getByRole('button', { name: 'Request a call back' });
  }

  async navigate() {
    await this.page.goto('https://test.netlify.app/');
  }

  async fillContactForm(name, email, phone, company, website) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.companyInput.fill(company);
    await this.websiteInput.fill(website);
  }

  async selectEmployees(employees) {
    await this.employeesDropdown.selectOption(employees);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }
}

module.exports = ContactPage;
