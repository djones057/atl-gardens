import json

new_gardens = [
    {"name": "Blue Heron Nature Preserve Community Garden", "neighborhood": "Buckhead", "zipCode": "30342"},
    {"name": "Cabbagetown Community Garden", "neighborhood": "Cabbagetown", "zipCode": "30316"},
    {"name": "Grove Park Community Garden", "neighborhood": "Grove Park", "zipCode": "30318"},
    {"name": "Historic Westside Gardens", "neighborhood": "Vine City", "zipCode": "30314"},
    {"name": "Little Nancy Creek Park Community Garden", "neighborhood": "North Buckhead", "zipCode": "30319"},
    {"name": "West End Community Garden", "neighborhood": "West End", "zipCode": "30310"},
    {"name": "Lake Claire Community Land Trust", "neighborhood": "Lake Claire", "zipCode": "30307"},
    {"name": "Edgewood Community Learning Garden", "neighborhood": "Edgewood", "zipCode": "30307"},
    {"name": "Hawk Hollow Garden", "neighborhood": "Kirkwood", "zipCode": "30317"},
    {"name": "Sugar Creek Garden", "neighborhood": "Decatur", "zipCode": "30030"},
    {"name": "Candler Park Community Garden", "neighborhood": "Candler Park", "zipCode": "30307"},
    {"name": "Kirkwood Community Garden", "neighborhood": "Kirkwood", "zipCode": "30317"},
    {"name": "Ormewood Park Community Garden", "neighborhood": "Ormewood Park", "zipCode": "30316"},
    {"name": "Mulberry Fields Community Garden", "neighborhood": "Candler Park", "zipCode": "30307"},
    {"name": "Brownwood Park Community Garden", "neighborhood": "East Atlanta", "zipCode": "30316"},
    {"name": "The Good Samaritan Health Center Urban Farm", "neighborhood": "Bankhead", "zipCode": "30318"},
    {"name": "Aluma Farm", "neighborhood": "Adair Park", "zipCode": "30310"},
    {"name": "Freewheel Farm", "neighborhood": "Peoplestown", "zipCode": "30315"},
    {"name": "Global Growers - Umurima Community Garden", "neighborhood": "Clarkston", "zipCode": "30021"},
    {"name": "Bamboo Creek Farm", "neighborhood": "Stone Mountain", "zipCode": "30083"},
    {"name": "Clarkston Community Garden", "neighborhood": "Clarkston", "zipCode": "30021"},
    {"name": "Decatur High School Community Garden", "neighborhood": "Decatur", "zipCode": "30030"},
    {"name": "Snapfinger Community Garden", "neighborhood": "South DeKalb", "zipCode": "30034"},
    {"name": "Tapestry Community Garden", "neighborhood": "Tucker", "zipCode": "30084"},
    {"name": "Habersham Community Garden", "neighborhood": "Buckhead", "zipCode": "30305"},
    {"name": "Grant Park Community Garden", "neighborhood": "Grant Park", "zipCode": "30312"},
    {"name": "Five Points Farm", "neighborhood": "South Downtown", "zipCode": "30303"},
    {"name": "Old Fourth Ward Community Garden", "neighborhood": "O4W", "zipCode": "30312"},
    {"name": "Four Corners Park Community Garden", "neighborhood": "South Atlanta", "zipCode": "30315"},
    {"name": "Adair Park Community Garden", "neighborhood": "Adair Park", "zipCode": "30310"},
    {"name": "Sylvan Hills Community Garden", "neighborhood": "Sylvan Hills", "zipCode": "30310"},
    {"name": "Rey's Garden", "neighborhood": "Chosewood Park", "zipCode": "30315"},
    {"name": "Peoplestown Community Garden", "neighborhood": "Peoplestown", "zipCode": "30315"},
    {"name": "Perkerson Park Community Garden", "neighborhood": "Capitol View", "zipCode": "30310"},
    {"name": "Chastain Park Community Garden", "neighborhood": "Chastain Park", "zipCode": "30342"}
]

with open('src/data/gardens.ts', 'r') as f:
    content = f.read()

# find the end of the array
end_idx = content.rfind(']')

new_content = ""
for i, g in enumerate(new_gardens):
    idx = i + 6
    obj = f"""  {{
    id: "g{idx}",
    name: "{g['name']}",
    neighborhood: "{g['neighborhood']}",
    zipCode: "{g['zipCode']}",
    address: "Atlanta, GA {g['zipCode']}",
    description: "A beautiful community garden located in the {g['neighborhood']} neighborhood.",
    plotAvailability: "Waitlist",
    amenities: ["Water access", "Compost"],
    imageUrl: "/images/garden1.jpg",
    visitingHours: "Sunrise to Sunset",
    membershipCost: "Varies",
    rules: ["Organic practices required"],
    foundingYear: 2010
  }}"""
    new_content += ",\n" + obj

final_content = content[:end_idx] + new_content + "\n" + content[end_idx:]

with open('src/data/gardens.ts', 'w') as f:
    f.write(final_content)

print("Added", len(new_gardens), "gardens.")
