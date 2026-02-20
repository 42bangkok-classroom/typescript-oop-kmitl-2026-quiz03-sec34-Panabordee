export class User {
  public static BIRTH_YEAR: number = 2000;

  private firstname: string = "";
  private lastname: string = "";
  private age: number = 0;

  public setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  public setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }

  public getFullName(): string {
    if (!this.firstname && !this.lastname) return "";
    return `${this.firstname} ${this.lastname}`;
  }
}