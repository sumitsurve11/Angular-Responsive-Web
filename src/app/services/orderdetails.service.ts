import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }
  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Bombay Sandwich",
      foodDetails:"waxy potato| Tomato |Red pepper|Red onion|Cucumber|Unsalted butter",
      foodPrice:200,
      foodImg:"https://i.guim.co.uk/img/media/9dc42322bbd994b6fb96c057192818052be40f7b/0_622_4080_4077/master/4080.jpg?width=620&quality=85&auto=format&fit=max&s=bfb0c3a6df19ca495d70a596cd4a096c"
    },
    {
      id:2,
      foodName:"Cheese & Corn Pizza",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://previews.123rf.com/images/golubovystock/golubovystock1704/golubovystock170400254/76036264-hot-delicious-pizza-with-chicken-cheese-and-corn-with-cut-piece-served-on-rustic-wooden-table-with-i.jpg"
    },
    {
      id:3,
      foodName:"Aloo Tikki Burger",
      foodDetails:"mashed potatoes, onions, coriander (cilantro) leaves, ground turmeric, ground cumin, chat masala, red chili powder, salt and pepper",
      foodPrice:149,
      foodImg:"https://nishkitchen.com/wp-content/uploads/2020/10/Aloo-Tikki-Burger-1B.jpg"
    },
    {
      id:4,
      foodName:"Spicy Paneer Kathi Roll",
      foodDetails:"Paneer| Mixed Bell Pepper| Red onions | Spices| Green Chutney",
      foodPrice:140,
      foodImg:"https://content.jwplatform.com/thumbs/e7rikdOE-720.jpg"
    },
    {
      id:5,
      foodName:"Almond Brownie",
      foodDetails:"Almond with ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ-IdL5x4p_ypHlgqhQXYFGvJ9OffHCmvMQ&usqp=CAU"
    },
    {
      id:6,
      foodName:"OreoS Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://static.toiimg.com/photo/83773626.cms"
    },
    {
      id:7,
      foodName:"Momos",
      foodDetails:"Westside pavilion,salt lake momos",
      foodPrice:125,
      foodImg:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/z/c/p575-163972213461bc2c96bac6e.jpg?w=400"
    },
    {
      id:8,
      foodName:"Rosemary Garlic Bread",
      foodDetails:"Unsalted butter|Parmesan cheese|fresh flat-leaf parsley|fresh rosemary|black pepper",
      foodPrice:75,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkKq5C1xQSct9_Q5P2eoy6uBJn8hQow5Mow&usqp=CAU"
    }
  ]  
}