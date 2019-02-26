import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Груша", "Фрукты", "Product 1 (Category 1)", 100, "кг","images/pear.png"),
    new Product(2, "Яблоко", "Фрукты", "Product 2 (Category 1)", 100, "кг", "images/apple.png"),
    new Product(3, "Яблоко", "Фрукты", "Product 3 (Category 1)", 100, "кг", "images/apple_2.png"),
    new Product(4, "Абрикос", "Фрукты", "Product 4 (Category 1)", 100, "кг", "images/apricot.png"),
    new Product(5, "Бананы", "Фрукты", "Product 5 (Category 1)", 100, "кг", "images/banana.png"),
    new Product(6, "Брокколи", "Овощи", "Product 6 (Category 2)", 100, "кг", "images/broccoli.png"),
    new Product(7, "Морковь", "Овощи", "Product 7 (Category 2)", 100, "кг", "images/carrot.png"),
    new Product(8, "Вишня", "Ягоды", "Product 8 (Category 2)", 100, "кг", "images/cherry.png"),
    new Product(9, "Огурец", "Овощи", "Product 9 (Category 2)", 100, "кг", "images/cucumber.png"),
    new Product(10, "Баклажан", "Овощи", "Product 10 (Category 2)", 100, "кг", "images/eggplant.png"),
    new Product(11, "Виноград", "Фрукты", "Product 11 (Category 3)", 100, "кг", "images/grape_1.png"),
    new Product(12, "Виноград", "Фрукты", "Product 12 (Category 3)", 100, "кг", "images/grape_2.png"),
    new Product(13, "Виноград", "Фрукты", "Product 13 (Category 3)", 100, "кг", "images/grape_3.png"),
    new Product(14, "Грейпфрут", "Фрукты", "Product 14 (Category 3)", 100, "кг", "images/grayfruit.png"),
    new Product(15, "Киви", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/kiwi.png"),
    new Product(17, "Лимон", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/lemon.png"),
    new Product(18, "Мандарин", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/mandarin.png"),
    new Product(19, "Вешанки", "Грибы", "Product 15 (Category 3)", 100, "кг", "images/mushroom.png"),
    new Product(20, "Лук", "Овощи", "Product 15 (Category 3)", 100, "кг", "images/onion.png"),
    new Product(21, "Апельсин", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/orange.png"),
    new Product(22, "Персик", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/peach.png"),
    new Product(23, "Перец", "Овощи", "Product 15 (Category 3)", 100, "кг", "images/pepper.png"),
    new Product(24, "Ананас", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/pineapple.png"),
    new Product(25, "Тыква", "Овощи", "Product 15 (Category 3)", 100, "кг", "images/pumpkin.png"),
    new Product(26, "Малина", "Ягоды", "Product 15 (Category 3)", 100, "кг", "images/raspberry.png"),
    new Product(27, "Салат", "Зелень", "Product 15 (Category 3)", 100, "кг", "images/salad_2.png"),
    new Product(28, "Клубника", "Ягоды", "Product 15 (Category 3)", 100, "кг", "images/strawberry.png"),
    new Product(29, "Помидоры", "Фрукты", "Product 15 (Category 3)", 100, "кг", "images/tamato.png"),
    new Product(30, "Арбуз", "Ягоды", "Product 15 (Category 3)", 100, "кг", "images/watermelon.png"),
  ];
  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
