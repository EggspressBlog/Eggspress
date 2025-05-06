---
title: Using Sidebars
subtitle: ""
subheading: "Learn how to customize sidebars and create new ones"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 50
date: 2024-01-16T10:01:87
author: "denton"
snippet: "Sidebars help you supplement your pages with information your readers may find helpful. Learn how to configure your sidebars and create new ones. "
description: "Eggspress allows you to create an unlimited number of sidebars for your content. Learn how."
sidebar: "eggspress_links"
category: "reference"
prevPost: ""
nextPost: ""
relatedPost1: "frontmatter"
relatedPost2: ""
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Eggspress allows you to create and use custom sidebars with ease.

You could use one sidebar for each content item, reuse the same sidebars on multiple pages, or ignore them altogether. 

## Creating new sidebars
You can find all of your sidebars in the workspace folder found at `my_sidebars`.

As with all other content folders (including `my_posts`, `my_pages`, `my_authors`, and `my_categories`), you may organize your files within `my_sidebars` however you wish. Keep all of your sidebars in one place or nest them in subdirectories if you require more organization. 

### In Obsidian
If you use Obsidian, you can create a new sidebar by creating a new note in your `my_sidebars` folder. You can then insert a template from `my_templates` called `#frontmatter.sidebar`.

### In other editors
The easiest way to create a new template is by creating a duplicate from the template sidebar. You can do this by following these steps:
1. Navigate to your workspace folder
2. Open the folder `my_templates`
3. In this folder, locate the file `#.frontmatter.sidebar` 
4. Right-click on this file and select "Copy"
5. Navigate back to your workspace folder
6. Open the folder `my_sidebars`
7. Right-click on an empty space in this folder and select "Paste" 
8. Right-click on your newly pasted file and select "Rename" 
9. Enter a new name for your newly pasted file

## Populating your sidebars
Each sidebar can contain up to nine pinned posts and nine sections.

Pinned Posts appear at the very top of your sidebar. They allow you to draw attention to certain posts. 

Sections can contain a combination of one or more of the following:
- a heading
- a block of text
- an image
- a link

## Inserting images

You can reference an image by its slug. All images referenced must be stored somewhere within the `my_sidebars`. You might choose to store images in subdirectories within `my_sidebars` as well. 

## 

Links may be internal or external. If you are linking internally, you should try to create a relative link (beginning with a forward slash, "/"). 

The easiest way to do this is to remove everything up through the top-level domain. For example, if we wanted to link to this post in a sidebar, we would take:
`https://eggspress.vercel.app/blog/using-sidebars`

And drop the domain, ending up with:

`/blog/using-sidebars`

Doing so allows your linked page to load faster and prevents it from opening in a new tab or window. Note that this only applies to internal links. 

For more information, see [linking-internal-content](my_posts/reference/linking-internal-content.md)
## Pulling sidebars into your content
