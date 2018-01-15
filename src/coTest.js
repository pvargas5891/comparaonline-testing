class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}
/**
 * Class CarInsurance
 * Description evaluation class for coverage in insurance car
 */
class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Function evaluationCoveragePrice
   * Description evalaution for price in all coverage
   */
  evaluationCoveragePrice(){

    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        if (this.products[i].price > 0) {
          if (this.products[i].name != 'Mega Coverage') {
            this.products[i].price = this.products[i].price - 1;
          }
        }
      } else {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
          if (this.products[i].name == 'Special Full Coverage') {
            if (this.products[i].sellIn < 11) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
            if (this.products[i].sellIn < 6) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
          }
        }
      }
    }

  }
  
  /**
   * Function evaluationCoveragePrice
   * Description evalaution for price in all coverage
   */
  evaluationCoverageSellIn(){

    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Mega Coverage') {
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }


      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            if (this.products[i].price > 0) {
              if (this.products[i].name != 'Mega Coverage') {
                this.products[i].price = this.products[i].price - 1;
                /**
                * Add rule "Products Super Sale degrade in price twice as fast as normal products"
                */
                if (this.products[i].name == 'Super Sale'){
                  this.products[i].price = this.products[i].price - 1;
                }
              }
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
            /**
             * Add rule "Products Super Sale degrade in price twice as fast as normal products"
             */
            if (this.products[i].name == 'Super Sale'){
                  this.products[i].price = this.products[i].price - this.products[i].price;
            }
          }
        } else {
          if (this.products[i].price < 50) {
            this.products[i].price = this.products[i].price + 1;
          }
        }
      }
    }

  }  
  
  /**
   * Function updatePrice
   * Description execute evaluation for insurance car
   */
  updatePrice() {

    
      this.evaluationCoveragePrice();

      this.evaluationCoverageSellIn();

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
