import re

unsplash_urls = [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4ce18?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595841696677-6489a744cb4d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558904541-efa843a96f0a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592484043432-1b1f618a3854?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1416879598555-21d3f9e7c37b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
]

with open('src/data/gardens.ts', 'r') as f:
    content = f.read()

# We will replace imageUrl: "/images/garden1.jpg" and any similar imageUrls with a cycling Unsplash URL.
# Let's find all occurrences of imageUrl: "..."
def replacer(match):
    replacer.count += 1
    url = unsplash_urls[replacer.count % len(unsplash_urls)]
    return f'imageUrl: "{url}"'
replacer.count = -1

new_content = re.sub(r'imageUrl:\s*"[^"]+"', replacer, content)

with open('src/data/gardens.ts', 'w') as f:
    f.write(new_content)

print(f"Replaced images successfully.")
