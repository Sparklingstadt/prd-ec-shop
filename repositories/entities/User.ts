export class User {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string
  ) {
    if(!id) {
      throw new Error("id is required!")
    }
    if(!firstName) {
      throw new Error("firstName is required!")
    }
    if(!lastName) {
      throw new Error("lastName is required!")
    }
  }
}