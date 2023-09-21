// 📌  D-Task:

// Shunday class tuzing tuzing nomi Shop, va uni
//  constructoriga 3 hil mahsulot pass bolsin, hamda classning
//  3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
//  Har bir method ishga tushgan vaqt ham log qilinsin.

// // MASALAN: const shop = new Shop(4, 5, 2);
// shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon
// va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq()
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require("moment");
const time = moment().format("HH:mm");
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  maxSulotQoldigi = () => {
    console.log(
      `Hozir ${time} da ${this.non} ta non ${this.lagmon} ta lagmopn ${this.cola} ta cola mavjud `
    );
    return this.non + this.cola + this.lagmon;
  };
  maxSulotSotish = (tovarlar, amount) => {
    switch (tovarlar) {
      case "non":
        if (amount <= this.non) {
          console.log(`Hozirda ${time} da ${amount} ta non sotildi`);
          this.non -= amount;
        } else {
          console.log(
            `Hozirda ${time} da bu miqdorda sotish uchun yetarli non yoq`
          );
        }
        break;
      case "lagmon":
        if (amount <= this.lagmon) {
          console.log(`Hozir ${time} da ${amount} ta lagmon sotildi`);
          this.lagmon -= amount;
        } else {
          console.log(
            `Hozirda ${time} da bu miqdorda sotish uchun yetarli lagmon yoq`
          );
        }
        break;
      default:
        if (amount <= this.cola) {
          console.log(`Hozir ${time} da ${amount} ta cola sotildi`);
          this.cola -= amount;
        } else {
          console.log(
            `Hozirda ${time} da bu miqdorda sotish uchun yetarli cola yoq`
          );
        }
        break;
    }
  };
  maxSulotQabul(tovarlar, amount) {
    switch (tovarlar) {
      case "non":
        this.non += amount;
        console.log(`Hozirda ${time} da bu ${amount}ta non qoshildi.`);
        break;
      case "lagmon":
        this.lagmon += amount;
        console.log(`Hozidar ${time} da bu ${amount}ta lagmon qoshildi.`);
        break;
      default:
        this.cola += amount;
        console.log(`Hozirda ${time} da bu ${amount}ta cola qoshildi.`);
        break;
    }
  }
}
const shop = new Shop(2, 4, 5);
shop.maxSulotQoldigi();
shop.maxSulotSotish("lagmon", 1);
shop.maxSulotQoldigi();
shop.maxSulotSotish("cola", 2);
shop.maxSulotQoldigi();
