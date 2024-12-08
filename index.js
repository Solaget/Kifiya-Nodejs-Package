export class Kifiya {
  constructor({ secretKey }) {
    this.secretKey = secretKey;
  }

  makePayment(amount) {
    return { message: "Success" };
  }
}

