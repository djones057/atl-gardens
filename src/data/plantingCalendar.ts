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
      "Atlanta's coldest month, but the garden isn't done with you yet. Start heat-lovers under lights, get fruit trees in the ground, and let yourself plan.",
    sowIndoors: ["Onions", "Leeks", "Celery", "Pansies"],
    sowOutdoors: ["English peas (late Jan, if soil workable)"],
    transplant: ["Bare-root fruit trees", "Blueberry bushes", "Asparagus crowns"],
    harvest: ["Collards", "Kale", "Brussels sprouts", "Turnips"],
    tasks: [
      "Order seeds now — the good varieties sell out fast",
      "Prune dormant fruit trees and grapevines while they're sleeping",
      "Give beds a compost top-dress so it has time to work in",
      "Sharpen and oil your tools — you'll thank yourself in April",
    ],
  },
  {
    month: "February",
    season: "Winter",
    summary:
      "The real gardening year starts indoors. Get tomatoes and peppers under lights now — they need 8 weeks before Atlanta's last frost.",
    sowIndoors: ["Tomatoes", "Peppers", "Eggplant", "Broccoli", "Cabbage"],
    sowOutdoors: ["Peas", "Spinach", "Lettuce", "Radishes", "Carrots", "Potatoes"],
    transplant: ["Onion sets", "Strawberry plants", "Asparagus crowns"],
    harvest: ["Collards", "Kale", "Winter lettuces"],
    tasks: [
      "Lay black plastic on empty beds to warm the soil a few weeks early",
      "Get your seed-starting setup running — tomatoes want 6–8 weeks indoors",
      "Test soil pH if you haven't recently (shoot for 6.0–6.8)",
      "Get fruit trees in the ground before they bud out",
    ],
  },
  {
    month: "March",
    season: "Spring",
    summary:
      "Atlanta's average last frost is March 29th — close, but don't rush it. Cool-season transplants go out; warm-season starts wait indoors a little longer.",
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
      "Harden off transplants — a week outside in the day, inside at night",
      "Lay straw or shredded leaves between rows before weeds get a foothold",
      "Put up tomato cages and pea trellises before the plants need them",
      "Keep row cover within arm's reach — Atlanta can still freeze in March",
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
      "Bury tomato stems deep — two-thirds underground builds a monster root system",
      "Give spring crops a compost side-dress while they're growing fast",
      "Get drip irrigation running before Atlanta summer decides to show up early",
      "Check the undersides of leaves for aphids and cabbage worms — they love April too",
    ],
  },
  {
    month: "May",
    season: "Spring",
    summary:
      "Spring greens are bolting and the warm-season rush is on. Harvest fast and plant faster — May doesn't wait.",
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
      "When your lettuce bolts, pull it and compost it — don't wait",
      "Pile on mulch — 3 to 4 inches of straw or wood chips before the real heat hits",
      "Tie up tomatoes every week or you'll be untangling a jungle by June",
      "Start checking tomatoes for blossom-end rot (a calcium and watering issue, not a disease)",
    ],
  },
  {
    month: "June",
    season: "Summer",
    summary:
      "Welcome to the deep end. Heat-loving crops are going full speed and your job is mostly watering, mulching, and bug patrol.",
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
      "Water deep and slow twice a week — a quick sprinkle does more harm than good",
      "Strip the lower tomato leaves to let air move through and slow down disease",
      "Knock Japanese beetles off into soapy water at dawn, before they warm up and fly",
      "Top off mulch wherever you can see bare soil",
    ],
  },
  {
    month: "July",
    season: "Summer",
    summary:
      "Peak harvest and the start of fall planning at the same time. Start broccoli and cabbage indoors now or you'll miss the fall window.",
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
      "Yank out anything that's stopped producing and compost it",
      "Solarize empty beds with clear plastic for 4–6 weeks — kills weed seeds and pests",
      "Give tomatoes and peppers a compost boost — they've been working hard",
      "Harvest squash and beans every 2–3 days or the plants quit on you",
    ],
  },
  {
    month: "August",
    season: "Summer",
    summary:
      "August is brutal, but the fall garden starts now or not at all. Get cool-season seeds into shaded, well-watered beds — timing is everything.",
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
      "Drape shade cloth over newly seeded beds — August sun will cook bare soil",
      "Check fall seedlings daily; they dry out in hours in this heat",
      "Order garlic and shallots now before the good varieties sell out",
      "Decide which beds are resting this fall and pick a cover crop for them",
    ],
  },
  {
    month: "September",
    season: "Fall",
    summary:
      "Atlanta's second spring — and many gardeners' favorite month. Cooler nights, fast-growing greens, and the worst of summer is behind you.",
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
      "Rip out spent summer crops and sow crimson clover or winter rye in their place",
      "Divide overgrown perennial herbs — they'll thank you with a flush of growth",
      "Work compost into beds heading into fall planting",
      "Start watching 10-day forecasts — Atlanta's first frost can sneak up on you",
    ],
  },
  {
    month: "October",
    season: "Fall",
    summary:
      "Garlic goes in now, greens keep coming, and the first frost is closing in. Atlanta's average: November 8th — but don't count on it.",
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
      "Clean and put away tomato cages — they last a lot longer with a little care",
      "Plant garlic cloves 2 inches deep, pointy end up, and don't skip the mulch",
      "Shred fallen leaves for mulch — free soil amendment if you do it now",
      "Get row cover hoops set up before you actually need them at midnight",
    ],
  },
  {
    month: "November",
    season: "Fall",
    summary:
      "First frost arrives and the garden shifts gears. Protect what you can, harvest the rest, and enjoy how good November greens taste after a hard freeze.",
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
      "Cover anything tender before frost — or just harvest it green and enjoy it now",
      "Bury garlic and perennial herbs under a thick layer of mulch before hard freeze",
      "Drain and coil hoses before a freeze splits them — ask me how I know",
      "Write down what worked and what didn't while it's still fresh",
    ],
  },
  {
    month: "December",
    season: "Winter",
    summary:
      "The garden is quiet, but that's the point. Tend the soil, fix the tools, read the catalogs, and let yourself look forward to next year.",
    sowIndoors: ["Microgreens"],
    sowOutdoors: [],
    transplant: ["Bare-root fruit trees (late December)"],
    harvest: ["Collards", "Kale", "Brussels sprouts", "Cabbage", "Turnips", "Carrots"],
    tasks: [
      "Pull out the seed catalogs — this is the best part of December",
      "Clean, sharpen, and oil your tools so they're ready when February hits",
      "Fix that raised bed you've been meaning to fix all year",
      "Top resting beds with compost and leaf mulch — let winter do the work",
    ],
  },
];
