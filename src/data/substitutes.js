const substitutesData = {
  "milk": [
    { name: "Almond Milk", details: "Great for lactose-free and vegan options." },
    { name: "Soy Milk", details: "Similar protein profile to dairy milk." },
    { name: "Oat Milk", details: "Creamy texture, ideal for coffee." },
  ],
  "butter": [
    { name: "Coconut Oil", details: "Great for baking and frying." },
    { name: "Olive Oil", details: "Healthier alternative for sautéing." },
    { name: "Margarine", details: "Common butter substitute." },
  ],
  "eggs": [
    { name: "Applesauce", details: "Works well in baked goods." },
    { name: "Flaxseed", details: "Mix 1 tablespoon with 3 tablespoons of water." },
    { name: "Silken Tofu", details: "Blended, it mimics the texture of eggs." },
  ],
  "flour": [
    { name: "Almond Flour", details: "Gluten-free option, denser texture." },
    { name: "Coconut Flour", details: "Absorbs more liquid than wheat flour." },
    { name: "Oat Flour", details: "Made from ground oats, gluten-free." },
  ],
  "sugar": [
    { name: "Honey", details: "Natural sweetener, adds moisture." },
    { name: "Maple Syrup", details: "Adds flavor, use less for sweetness." },
    { name: "Agave Syrup", details: "Sweeter than sugar, low glycemic index." },
  ],
  "rice": [
    { name: "Quinoa", details: "High in protein, gluten-free alternative." },
    { name: "Cauliflower Rice", details: "Low-carb substitute for rice." },
    { name: "Farro", details: "Nutty flavor, chewy texture." },
  ],
  "chicken": [
    { name: "Turkey", details: "Lean protein, similar flavor." },
    { name: "Tofu", details: "Great plant-based protein option." },
    { name: "Seitan", details: "High-protein meat substitute." },
  ],
  "pasta": [
    { name: "Zucchini Noodles", details: "Low-carb alternative, spiralized." },
    { name: "Quinoa Pasta", details: "Gluten-free, similar texture." },
    { name: "Spaghetti Squash", details: "Vegetable that mimics pasta." },
  ],
  "beef": [
    { name: "Ground Turkey", details: "Lean protein option." },
    { name: "Mushroom Burger", details: "Vegetarian alternative." },
    { name: "Lentils", details: "High-protein plant option." },
  ],
  "cheese": [
    { name: "Nutritional Yeast", details: "Adds cheesy flavor, dairy-free." },
    { name: "Vegan Cheese", details: "Plant-based cheese alternative." },
    { name: "Ricotta", details: "Creamy substitute in recipes." },
  ],
  "potatoes": [
    { name: "Sweet Potatoes", details: "Nutritious, slightly sweeter." },
    { name: "Cauliflower", details: "Low-carb alternative, can be mashed." },
    { name: "Turnips", details: "A bit peppery, good roasted." },
  ],
  "salt": [
    { name: "Soy Sauce", details: "Adds umami flavor, use less." },
    { name: "Tamari", details: "Gluten-free soy sauce alternative." },
    { name: "Celery Salt", details: "Seasoning with a different flavor profile." },
  ],
  "vinegar": [
    { name: "Lemon Juice", details: "Adds acidity and flavor." },
    { name: "Apple Cider Vinegar", details: "Slightly sweeter than regular vinegar." },
    { name: "White Wine Vinegar", details: "Milder alternative." },
    
  ],
  "tomato": [
    { name: "Tomato Paste", details: "More concentrated flavor, use less." },
    { name: "Canned Tomatoes", details: "Good for sauces and soups." },
    { name: "Roasted Red Peppers", details: "Adds sweetness and flavor." },
  ],
  "onion": [
    { name: "Shallots", details: "Sweeter and milder flavor." },
    { name: "Green Onions", details: "Milder, adds crunch." },
    { name: "Leeks", details: "Milder, adds sweetness." },
  ],
  "garlic": [
    { name: "Garlic Powder", details: "Dried version, use less." },
    { name: "Shallots", details: "Milder, add sweetness." },
    { name: "Chives", details: "Adds mild onion-garlic flavor." },
  ],
  "baking powder": [
    { name: "Baking Soda", details: "Use with acid, less amount." },
    { name: "Cream of Tartar", details: "Can stabilize egg whites." },
    { name: "Self-Rising Flour", details: "Already contains leavening agents." },
  ],
  "honey": [
    { name: "Maple Syrup", details: "Similar sweetness, adds flavor." },
    { name: "Agave Syrup", details: "Sweeter, liquid sweetener." },
    { name: "Brown Sugar", details: "Adds moisture and caramel flavor." },
  ],
  "mustard": [
    { name: "Mayonnaise", details: "Creamier texture, use in dressings." },
    { name: "Ketchup", details: "Adds sweetness and acidity." },
    { name: "Vinegar", details: "For acidity, not the same flavor." },
  ],
  "cocoa powder": [
    { name: "Dark Chocolate", details: "Use less, melted for recipes." },
    { name: "Carob Powder", details: "Slightly sweeter, non-caffeinated." },
    { name: "Chocolate Syrup", details: "Use less, adds sweetness." },
  ],
  "oats": [
    { name: "Almond Flour", details: "Gluten-free option." },
    { name: "Flaxseed Meal", details: "Add fiber, use in baking." },
    { name: "Chia Seeds", details: "High in omega-3s, gelatinous when wet." },
  ],
  "coconut": [
    { name: "Almond Milk", details: "Light coconut flavor." },
    { name: "Soy Milk", details: "Slightly nutty flavor." },
    { name: "Coconut Oil", details: "Use as fat in baking." },
  ],
  "corn": [
    { name: "Peas", details: "Similar sweetness, use in salads." },
    { name: "Green Beans", details: "Adds crunch and color." },
    { name: "Bell Peppers", details: "For sweetness and texture." },
  ],
  "soy sauce": [
    { name: "Tamari", details: "Gluten-free soy sauce alternative." },
    { name: "Coconut Aminos", details: "Soy-free, sweeter flavor." },
    { name: "Liquid Aminos", details: "Similar flavor profile, less salty." },
  ],
  "breadcrumbs": [
    { name: "Crushed Crackers", details: "Great for topping or binding." },
    { name: "Ground Nuts", details: "Adds flavor and crunch." },
    { name: "Cornmeal", details: "Coarse texture, great for frying." },
  ],
  "chili powder": [
    { name: "Paprika", details: "Milder flavor, less heat." },
    { name: "Cayenne Pepper", details: "Spicier alternative." },
    { name: "Red Pepper Flakes", details: "Adds heat and flavor." },
  ],
  "pepper": [
    { name: "White Pepper", details: "Milder flavor, good for sauces." },
    { name: "Paprika", details: "Adds color, less heat." },
    { name: "Cayenne Pepper", details: "For spiciness, use sparingly." },
  ],
  "cilantro": [
    { name: "Parsley", details: "Similar appearance, milder flavor." },
    { name: "Basil", details: "Sweet and aromatic." },
    { name: "Mint", details: "Fresh flavor, good in salads." },
  ],
  "basil": [
    { name: "Oregano", details: "Earthy flavor, use less." },
    { name: "Thyme", details: "Adds earthiness, use fresh." },
    { name: "Parsley", details: "Milder flavor, adds freshness." },
  ],

  "ketchup": [
    { name: "Tomato Sauce", details: "Less sweet, add sugar if needed." },
    { name: "BBQ Sauce", details: "Adds sweetness and smokiness." },
    { name: "Mustard", details: "Adds tang, different flavor." },
  ],
  "lemon": [
    { name: "Lime", details: "Similar acidity, different flavor." },
    { name: "Vinegar", details: "For acidity, not the same flavor." },
    { name: "Citric Acid", details: "Dried form, for acidity." },
  ],
  "sour cream": [
    { name: "Greek Yogurt", details: "Creamy texture, similar tang." },
    { name: "Buttermilk", details: "Thinner, use in dressings." },
    { name: "Cottage Cheese", details: "Blend for a smoother texture." },
  ],
  "chicken broth": [
    { name: "Vegetable Broth", details: "Vegetarian alternative." },
    { name: "Beef Broth", details: "Rich flavor, use in soups." },
    { name: "Water", details: "Can substitute in recipes, less flavor." },
  ],
  "maple syrup": [
    { name: "Honey", details: "Natural sweetener, adds moisture." },
    { name: "Agave Syrup", details: "Sweeter than sugar." },
    { name: "Brown Sugar", details: "Adds moisture and flavor." },
  ],
  "ginger": [
    { name: "Ground Ginger", details: "Dried form, use less." },
    { name: "Galangal", details: "Similar flavor profile, milder." },
    { name: "Allspice", details: "Adds warmth and spice." },
  ],
  "vanilla extract": [
    { name: "Vanilla Bean", details: "Use in recipes for a richer flavor." },
    { name: "Almond Extract", details: "Stronger flavor, use less." },
    { name: "Maple Syrup", details: "Adds sweetness and flavor." },
  ],
  "mayonnaise": [
    { name: "Greek Yogurt", details: "Creamier texture, healthier." },
    { name: "Sour Cream", details: "Similar texture and flavor." },
    { name: "Mustard", details: "Adds tanginess and flavor." },
  ],
  "cream cheese": [
    { name: "Ricotta", details: "Creamy, milder flavor." },
    { name: "Mascarpone", details: "Rich and creamy alternative." },
    { name: "Greek Yogurt", details: "Lower fat option." },
  ],
  "feta cheese": [
    { name: "Goat Cheese", details: "Similar texture, tangy flavor." },
    { name: "Ricotta", details: "Creamy alternative, milder." },
    { name: "Cotage Cheese", details: "Milder, less salty." },
  ],
  "coconut oil": [
    { name: "Butter", details: "Rich flavor, use in baking." },
    { name: "Olive Oil", details: "Good for cooking, less flavor." },
    { name: "Vegetable Oil", details: "Neutral flavor, great for frying." },
  ],
  "baking soda": [
    { name: "Baking Powder", details: "Use with acid, less amount." },
    { name: "Potassium Bicarbonate", details: "Lower sodium alternative." },
    { name: "Self-Rising Flour", details: "Already contains leavening agents." },
  ],
  "smoked paprika": [
    { name: "Regular Paprika", details: "Less smoky, similar flavor." },
    { name: "Cayenne Pepper", details: "Adds heat and spice." },
    { name: "Chipotle Powder", details: "Adds smokiness and heat." },
  ],
  "orange juice": [
    { name: "Lemon Juice", details: "Adds acidity, not the same flavor." },
    { name: "Apple Juice", details: "Similar sweetness, milder flavor." },
    { name: "Pineapple Juice", details: "Adds sweetness and acidity." },
  ],
  "sweetener": [
    { name: "Stevia", details: "Natural, calorie-free sweetener." },
    { name: "Agave Nectar", details: "Sweeter than sugar, liquid." },
    { name: "Honey", details: "Natural sweetener, adds moisture." },
  ],
  "zucchini": [
    { name: "Cucumber", details: "Similar texture, milder flavor." },
    { name: "Yellow Squash", details: "Similar cooking properties." },
    { name: "Eggplant", details: "Different texture, absorbs flavors well." },
  ],
  "tomato sauce": [
    { name: "Tomato Paste", details: "More concentrated, use less." },
    { name: "Canned Tomatoes", details: "Good for sauces and soups." },
    { name: "Marinara Sauce", details: "Flavorful tomato sauce." },
  ],
  "peanut butter": [
    { name: "Almond Butter", details: "Creamy, nutty alternative." },
    { name: "Sunflower Seed Butter", details: "Nut-free option." },
    { name: "Cashew Butter", details: "Smooth, slightly sweet flavor." },
  ],
  "cereal": [
    { name: "Granola", details: "Sweetened, crunchy alternative." },
    { name: "Oatmeal", details: "Nutritious breakfast option." },
    { name: "Puffed Rice", details: "Light, crunchy texture." },
  ],
  "cabbage": [
    { name: "Kale", details: "Similar texture, nutritious." },
    { name: "Spinach", details: "Milder flavor, good for salads." },
    { name: "Collard Greens", details: "Adds earthiness to dishes." },
  ],
  "squash": [
    { name: "Pumpkin", details: "Similar texture, use in soups." },
    { name: "Zucchini", details: "Milder flavor, good in stir-fries." },
    { name: "Eggplant", details: "Absorbs flavors well." },
  ],
  "leeks": [
    { name: "Onions", details: "Milder flavor, good for soups." },
    { name: "Shallots", details: "Sweeter, more delicate." },
    { name: "Green Onions", details: "Adds freshness and crunch." },
  ],
  "asparagus": [
    { name: "Green Beans", details: "Similar texture, cook similarly." },
    { name: "Broccoli", details: "Nutritious, different flavor." },
    { name: "Zucchini", details: "Milder flavor, great in stir-fries." },
  ],
  "mushrooms": [
    { name: "Eggplant", details: "Similar texture, absorbs flavors." },
    { name: "Zucchini", details: "Milder flavor, versatile." },
    { name: "Tofu", details: "Great meat substitute, absorbs flavors." },
  ],
  "arugula": [
    { name: "Spinach", details: "Milder flavor, nutritious." },
    { name: "Kale", details: "Adds earthiness to salads." },
    { name: "Watercress", details: "Peppery flavor, similar texture." },
  ],
  "walnuts": [
    { name: "Pecans", details: "Similar texture and flavor." },
    { name: "Almonds", details: "Crunchy, nutty flavor." },
    { name: "Cashews", details: "Creamy texture, slightly sweet." },
  ],
  "mango": [
    { name: "Peach", details: "Similar sweetness, good for smoothies." },
    { name: "Pineapple", details: "Adds sweetness and acidity." },
    { name: "Papaya", details: "Similar texture, sweet flavor." },
  ],
  "bacon": [
    { name: "Turkey Bacon", details: "Lower fat alternative." },
    { name: "Pancetta", details: "Italian bacon, richer flavor." },
    { name: "Tempeh Bacon", details: "Plant-based, smoky flavor." },
  ],
  "grapes": [
    { name: "Raisins", details: "Dried grapes, similar sweetness." },
    { name: "Cranberries", details: "Tart alternative, dried." },
    { name: "Cherries", details: "Similar texture, sweet-tart flavor." },
  ],
  "chocolate": [
    { name: "Cocoa Powder", details: "Dried form, use less." },
    { name: "Carob Powder", details: "Sweet, non-caffeinated alternative." },
    { name: "Dark Chocolate", details: "Rich flavor, melted for recipes." },
  ],
};

export default substitutesData;

