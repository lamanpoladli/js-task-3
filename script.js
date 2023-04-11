// class Car {
//     constructor(brand, model, currentFuel, fuelFor1Km, millage) {
//       this.brand = brand;
//       this.model = model;
//       this.currentFuel = currentFuel;
//       this.fuelFor1Km = fuelFor1Km;
//       this.millage = millage;
//     }
  
//     drive(km) {
//         let fuelNeeded = km * this.fuelFor1Km;
//         if (fuelNeeded <= this.currentFuel) {
//           this.currentFuel -= fuelNeeded;
//           this.millage += km;
//           console.log(`${km} km sürüldü, menim hal-hazirda ${this.currentFuel} litr benzin var`);
//         } else {
//           console.log("Benzin kifayət etmir");
//         }
//       }
//   }
  

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Milk extends Product {
    constructor(name, price, fatPercent) {
      super(name, price);
      this.fatPercent = fatPercent;
    }
  }
  
  const milk1 = new Milk("Süd 1", 2, 3);
  const milk2 = new Milk("Süd 2", 3, 4);
  const milk3 = new Milk("Süd 3", 2, 5);
  
  const milkArray = [milk1, milk2, milk3];
  
  let sumPercent = 0;
  for (let i = 0; i < milkArray.length; i++) {
    sumPercent += milkArray[i].fatPercent;
  }
  
  const avgFatPercent = sumPercent / milkArray.length;
  console.log("Ededi orta: " + avgFatPercent);