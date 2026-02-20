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
    if (age < 0) {
      throw new Error("Age must be positive");
    }
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }

  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}