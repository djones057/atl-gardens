export interface PlantingMonth {
  month: string;
  season: "Winter" | "Spring" | "Summer" | "Fall";
  summary: string;
  sowIndoors: string[];
  sowOutdoors: string[];
  transplant: string[];
  harvest: string[];
  tasks: string[];
}

export const plantingCalendar: PlantingMonth[] = [
  {
    month: "January",
    season: "Winter",
    summary:
      "Atlanta's coldest month. Plan the year, start heat-lovers indoors under lights, and plant bare-root fruit trees while they're dormant.",
    sowIndoors: ["Onions", "Leeks", "Celery", "Pansies"],
    sowOutdoors: ["English peas (late Jan, if soil workable)"],
    transplant: ["Bare-root fruit trees", "Blueberry bushes", "Asparagus crowns"],
    harvest: ["Collards", "Kale", "Brussels sprouts", "Turnips"],
    tasks: [
      "Finalize garden plan and order seeds",
      "Prune dormant fruit trees and grapes",
      "Top-dress beds with compost",
      "Sharpen and oil hand tools",
    ],
  },
  {
    month: "February",
    season: "Winter",
    summary:
      "The indoor seed-starting month. Peppers and tomatoes go under lights; cool-weather crops can be direct-sown late in the month.",
    sowIndoors: ["Tomatoes", "Peppers", "Eggplant", "Broccoli", "Cabbage"],
    sowOutdoors: ["Peas", "Spinach", "Lettuce", "Radishes", "Carrots", "Potatoes"],
    transplant: ["Onion sets", "Strawberry plants", "Asparagus crowns"],
    harvest: ["Collards", "Kale", "Winter lettuces"],
    tasks: [
      "Warm soil with black plastic for early beds",
      "Prep seed-starting area with grow lights",
      "Test and amend soil pH (target 6.0–6.8)",
      "Plant fruit trees before bud break",
    ],
  },
  {
    month: "March",
    season: "Spring",
    summary:
      "Average last frost is around March 29th. Cool-season transplants go out, warm-season starts stay indoors a bit longer.",
    sowIndoors: ["Tomatoes (final round)", "Basil", "Melons", "Cucumbers", "Squash"],
    sowOutdoors: [
      "Peas",
      "Lettuce",
      "Spinach",
      "Kale",
      "Carrots",
      "Beets",
      "Radishes",
      "Turnips",
      "Potatoes",
    ],
    transplant: ["Broccoli", "Cabbage", "Cauliflower", "Kohlrabi", "Onion starts"],
    harvest: ["Collards", "Kale", "Overwintered spinach"],
    tasks: [
      "Harden off cool-season transplants for a week before planting",
      "Mulch with straw or leaves to suppress weeds",
      "Install tomato cages and pea trellises now",
      "Watch frost forecasts — keep row cover handy",
    ],
  },
  {
    month: "April",
    season: "Spring",
    summary:
      "The big planting month. After April 10–15, tomatoes, peppers, and eggplant are safe to plant. Direct-sow beans and squash as soil warms.",
    sowIndoors: ["Okra", "Sweet potatoes (slips)"],
    sowOutdoors: [
      "Bush beans",
      "Pole beans",
      "Summer squash",
      "Cucumbers",
      "Sweet corn",
      "Melons (late April)",
    ],
    transplant: [
      "Tomatoes",
      "Peppers",
      "Eggplant",
      "Basil",
      "Tomatillos",
      "Ground cherries",
    ],
    harvest: ["Lettuce", "Spinach", "Radishes", "Asparagus", "Strawberries (late)"],
    tasks: [
      "Plant deeply — bury 2/3 of tomato stems to build roots",
      "Side-dress spring crops with compost",
      "Set up drip irrigation before the heat arrives",
      "Scout for aphids and cabbage worms",
    ],
  },
  {
    month: "May",
    season: "Spring",
    summary:
      "Warm-season planting continues; cool-season crops bolt quickly as days heat up. Harvest spring greens aggressively.",
    sowIndoors: [],
    sowOutdoors: [
      "Okra",
      "Southern peas (cowpeas)",
      "Sweet potatoes (slips)",
      "Summer squash",
      "Cucumbers",
      "Melons",
      "Pumpkins",
    ],
    transplant: ["Last tomatoes", "Peppers", "Eggplant", "Sweet potato slips"],
    harvest: ["Strawberries", "Lettuce", "Spinach", "Peas", "Radishes", "Broccoli"],
    tasks: [
      "Pull bolting greens and compost them",
      "Mulch heavily — 3–4 inches of straw or wood chips",
      "Stake tomatoes weekly to keep up with growth",
      "Begin weekly blossom-end-rot checks on tomatoes",
    ],
  },
  {
    month: "June",
    season: "Summer",
    summary:
      "Heat-loving crops take over. Focus shifts from planting to watering, mulching, and staying ahead of pests.",
    sowIndoors: ["Tomatoes (for fall crop)"],
    sowOutdoors: ["Okra", "Southern peas", "Pumpkins (for Halloween)", "Second bush beans"],
    transplant: ["Sweet potato slips (final round)"],
    harvest: [
      "Summer squash",
      "Cucumbers",
      "First tomatoes",
      "Beans",
      "Blueberries",
      "Blackberries",
    ],
    tasks: [
      "Water deeply twice a week, early morning",
      "Prune lower tomato leaves to improve airflow",
      "Hand-pick Japanese beetles at dawn",
      "Refresh mulch to hold soil moisture",
    ],
  },
  {
    month: "July",
    season: "Summer",
    summary:
      "Peak harvest season and the start of fall planning. Begin broccoli and cabbage seeds indoors for fall transplanting.",
    sowIndoors: ["Broccoli", "Cabbage", "Brussels sprouts", "Kale", "Collards"],
    sowOutdoors: ["Bush beans (for fall)", "Summer squash (second planting)"],
    transplant: ["Mid-season tomatoes for fall"],
    harvest: [
      "Tomatoes",
      "Peppers",
      "Okra",
      "Eggplant",
      "Cucumbers",
      "Squash",
      "Blackberries",
      "Corn",
    ],
    tasks: [
      "Pull and compost exhausted spring crops",
      "Solarize empty beds with clear plastic for 4–6 weeks",
      "Side-dress tomatoes and peppers with compost",
      "Keep harvesting squash and beans to prolong production",
    ],
  },
  {
    month: "August",
    season: "Summer",
    summary:
      "The fall garden begins. Start direct-seeding cool-season crops in shaded or well-watered beds.",
    sowIndoors: ["Lettuce", "Kale", "Chard"],
    sowOutdoors: [
      "Bush beans",
      "Carrots",
      "Beets",
      "Turnips",
      "Rutabagas",
      "Kale",
      "Collards",
      "Fall cucumbers",
    ],
    transplant: ["Broccoli", "Cabbage", "Cauliflower", "Brussels sprouts"],
    harvest: ["Tomatoes", "Peppers", "Okra", "Melons", "Southern peas", "Pumpkins"],
    tasks: [
      "Shade-cloth newly seeded fall beds until germination",
      "Water daily — young seedlings dry out fast in August heat",
      "Order garlic and shallot sets for October planting",
      "Plan cover crops for beds going fallow",
    ],
  },
  {
    month: "September",
    season: "Fall",
    summary:
      "Atlanta's second spring. Cooler nights return, and fall transplants hit their stride. Prime month for leafy greens.",
    sowIndoors: [],
    sowOutdoors: [
      "Lettuce",
      "Spinach",
      "Arugula",
      "Radishes",
      "Turnips",
      "Carrots",
      "Kale",
      "Mustard greens",
      "Collards",
    ],
    transplant: ["Broccoli", "Cabbage", "Cauliflower", "Kohlrabi", "Leeks"],
    harvest: [
      "Tomatoes (winding down)",
      "Peppers",
      "Okra",
      "Sweet potatoes (late Sept)",
      "Figs",
    ],
    tasks: [
      "Pull spent summer crops and sow cover crops (crimson clover, winter rye)",
      "Divide and replant perennial herbs",
      "Apply compost to prep for fall planting",
      "Start watching 10-day forecasts for first frost",
    ],
  },
  {
    month: "October",
    season: "Fall",
    summary:
      "First frost averages around November 8 in Atlanta. Plant garlic now for next July's harvest and keep the greens coming.",
    sowIndoors: [],
    sowOutdoors: [
      "Garlic",
      "Shallots",
      "Spinach",
      "Lettuce",
      "Arugula",
      "Radishes",
      "Winter rye (cover crop)",
    ],
    transplant: ["Strawberries", "Perennial herbs", "Onion sets"],
    harvest: [
      "Sweet potatoes",
      "Pumpkins",
      "Greens",
      "Final peppers and tomatoes",
      "Persimmons",
      "Pecans",
    ],
    tasks: [
      "Clean and store tomato cages and stakes",
      "Plant garlic cloves 2 inches deep, pointy end up",
      "Rake and shred leaves for mulch and compost",
      "Install row cover hoops for frost protection",
    ],
  },
  {
    month: "November",
    season: "Fall",
    summary:
      "First frost arrives. Protect the last warm-season harvests and settle in for cool-season gardening.",
    sowIndoors: [],
    sowOutdoors: ["Garlic (final round)", "Winter rye", "Crimson clover"],
    transplant: ["Overwintering onion and shallot sets"],
    harvest: [
      "Kale",
      "Collards",
      "Brussels sprouts",
      "Carrots",
      "Turnips",
      "Cabbage",
      "Broccoli",
    ],
    tasks: [
      "Cover tender crops before frost or harvest them green",
      "Mulch garlic and perennial herbs heavily",
      "Drain and store hoses before freeze",
      "Take notes on this year's wins and losses",
    ],
  },
  {
    month: "December",
    season: "Winter",
    summary:
      "A quiet month in the garden. Focus on soil, tools, and planning while enjoying hardy winter greens.",
    sowIndoors: ["Microgreens"],
    sowOutdoors: [],
    transplant: ["Bare-root fruit trees (late December)"],
    harvest: ["Collards", "Kale", "Brussels sprouts", "Cabbage", "Turnips", "Carrots"],
    tasks: [
      "Review seed catalogs and plan next year's garden",
      "Clean and sharpen tools, oil wooden handles",
      "Build or repair raised beds and trellises",
      "Add compost and leaf mulch to resting beds",
    ],
  },
];
