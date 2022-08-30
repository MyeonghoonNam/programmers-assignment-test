import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const productList = [
  {
    id: 1,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
    name: "커피 컵",
    price: 10000,
  },
  {
    id: 2,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
    name: "커피컵 종이홀더",
    price: 1000,
  },
  {
    id: 3,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_self_service.png",
    name: "커피 머신",
    price: 500000,
  },
  {
    id: 4,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cooking_milk_foamer.png",
    name: "우유 거품기",
    price: 20000,
  },
  {
    id: 5,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_cafe_milk_jag.png",
    name: "우유용 컵",
    price: 10000,
  },
  {
    id: 6,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_petbottle_coffee.png",
    name: "그렙 커피",
    price: 3000,
  },
  {
    id: 7,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker.png",
    name: "에스프레소 메이커",
    price: 50000,
  },
  {
    id: 8,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/food_sandwitch.png",
    name: "냉동 샌드위치",
    price: 10000,
  },
  {
    id: 9,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/press_tea_maker.png",
    name: "티 메이커",
    price: 35000,
  },
  {
    id: 10,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sugar_kakuzatou.png",
    name: "각설탕 묶음",
    price: 500,
  },
  {
    id: 11,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sweets_milk_cream.png",
    name: "커피 시럽",
    price: 500,
  },
  {
    id: 12,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker_2.png",
    name: "에스프레소 머신",
    price: 300000,
  },
];

const productItem = {
  id: 1,
  name: "커피 컵",
  price: 10000,
  imageUrl:
    "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
  productOptions: [
    {
      id: 1,
      name: "100개 묶음",
      price: 0,
      stock: 5,
      created_at: "2021-08-23T22:52:17.634Z",
      updated_at: "2021-08-23T22:52:17.638Z",
    },
    {
      id: 2,
      name: "200개 묶음",
      price: 8000,
      stock: 5,
      created_at: "2021-08-23T22:52:34.248Z",
      updated_at: "2021-08-23T22:52:34.252Z",
    },
    {
      id: 24,
      name: "10개 묶음",
      price: 0,
      stock: 555,
      created_at: "2021-08-23T23:03:04.873Z",
      updated_at: "2021-08-23T23:03:04.879Z",
    },
  ],
};

app.use(bodyParser.json());
app.use(cors());

app.get("/products", (_, res) => {
  res.send(productList);
});

app.get("/products/:id", (_, res) => {
  res.send(productItem);
});

export default app;
