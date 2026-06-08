export class Cart {
  constructor(
    public readonly id: number,
    public readonly userId: number
  ) {
    if(!id) {
      throw new Error("id is required!")
    }

    if(!userId) {
      throw new Error("userId is required!")
    }
  }
}