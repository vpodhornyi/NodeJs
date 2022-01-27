class Sum {
  #num;

  constructor(num) {
    this.#num = num;
  }

  isSingleNumber(num) {
    return Math.floor(num / 10) === 0;
  }

  getSum(num) {
    if (num % 10 === num) return num;
    return num % 10 + this.getSum(Math.floor(num / 10));
  }

  getResult() {
    if (this.#num < 0) return 0;

    let res = this.getSum(this.#num);

    while (!this.isSingleNumber(res)) {
      res = this.getSum(res);
    }

    return res;
  }
}

module.exports = Sum;
