---
title: "Referencing Other Content"
subtitle: "Using Slugs"
subheading: "Learn how to use slugs to reference other content"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 50
date: 2024-01-16T11:01:27
author: ""
snippet: "There are a number of ways you can refer to other content in Eggspress. The most reliable way is to use slugs. Here are a few simple rules you can follow to create your own slugs."
description: "Eggspress let's you refer to other content in many ways, but slugs are the most reliable. Here's how you can build your slugs."
sidebar: "eggspress_links"
category: "reference"
prevPost: ""
nextPost: ""
relatedPost1: "linking-internal-content"
relatedPost2: "frontmatter"
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

You can reference other content in a number of ways in Eggspress. The most reliable way is to use slugs. 

## What are slugs? 
You use slugs in Eggspress to reference other files in your workspace.

Think of them as unique identifiers. They're like the ID number on a driver's license or the serial number on your computer or phone.

Slugs are optional, but we recommend using them to mitigate errors.

>**Good to know:** Eggspress tries its best to locate the correct file when you have multiple files of the same name in your workspace. To eliminate the possibility of Eggspress puling up a file other than the one you intended on referencing, give your files **unique names** where possible. 

## Creating slugs
Slugs in Eggspress are derived from filenames. To build your own slug from a filename, follow these simple steps:
1. Drop the file extension (e.g. `.md`, `.jpg` , etc.)
2. Replace all spaces and underscores with hypens
3. Convert everything to lowercase

To build a slug for the file located at `my_posts/My First Post.md`, you would apply the steps above like so:
1. `My First Post` (drop the extension)
2. `My-First_Post` (convert spaces and underscores to hyphens)
3. `my-first-post` (lowercase all)

## Where to use slug
Throughout your content, you'll have opportunities to reference another file to pull in data from that file. 

For example, we could pin the post that we just created a slug for in a sidebar by setting:

`pinnedPost1: my-first-post`

We may also reference this post from other posts as a `previousPost`, `nextPost`, and `relatedPost`.

The same concept applies to all content items, including custom pages and author profiles. 