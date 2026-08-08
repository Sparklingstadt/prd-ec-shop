export class Cart {
  constructor(
    public readonly id: number,
    public readonly userId: number
  ) {
    if(id < 0) {
      throw new Error("id must be non-negative!")
    }

    if(userId < 0) {
      throw new Error("userId must be non-negative!")
    }
  }
}
