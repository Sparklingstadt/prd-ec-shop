export class User {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string
  ) {
    if(id < 0) {
      throw new Error("id must be non-negative!")
    }
    if(!firstName) {
      throw new Error("firstName is required!")
    }
    if(!lastName) {
      throw new Error("lastName is required!")
    }
  }
}
