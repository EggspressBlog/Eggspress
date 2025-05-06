---
title: "Archive and Hide"
subtitle: ""
subheading: "You can control when your content is visible"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: "Very important: you're reading a message delivered to you by contentMessage!"
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 50
date: 2024-01-15T15:01:01
author: "denton"
snippet: "Eggspress comes with granular controls that allow you to adjust the visibility of your content items. Read more about how you can use them here."
description: "Eggspress comes with granular controls that allow you to adjust the visibility of your content items"
sidebar: "eggspress_links"
category: "reference"
prevPost: ""
nextPost: ""
relatedPost1: "editing-content"
relatedPost2: "frontmatter"
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Eggspress gives you granular control over your content's visibility. This article explains how you can:
- make a certain content item less discoverable through `isVisible`
- inform your visitors that a content item may contain stale information through `isArchived`
- alert your visitors to information about a content item using `contentMessage`
- hide content from appearing on a content item's page using `isContentHidden`

![](my_posts/reference/images/closed.jpg)


## Where to configure visibility
In Eggspress, you can set the visibility of your content on a file-by-file basis. You can do this by setting the following keys in the [frontmatter](my_posts/reference/frontmatter.md) of your content file:

```markdown
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
```

Note that files in `my_categories` are limited to `isVisible` and `contentMessage`. Files in `my_sidebars` only make use of `isVisible`.

## How `isVisible` behaves
When a content item's frontmatter contains `isVisible: false`, representations of that content item will no longer be visible elsewhere on your site.

Going forward, we will use an example of a workspace containing these two files:
- `my_authors/eggie.md` (an author profile for Eggie)
- `my_posts/post.md` (a blog post)

When `post.md` contains `author: eggie` in its frontmatter, Eggie's author card will appear in the sidebar and/or at the end of the post.

However, when `eggie.md` contains `isVisible: false` in its frontmatter, Eggie's author card will no longer appear in any post.

By setting `isVisible: false`, we've made it impossible for visitors to our site to discover Eggie's profile. However, it's still possible for a visitor to view Eggie's author profile at `/author/eggie`.

This is because `isVisible: false` only hides references to a content item from the site. It does not, however, remove that content item. This is to prevent existing links to that content item from breaking.

The same concept applies to other content types such as sidebars, categories, and custom pages.

Posts that have `isVisible: false` will not appear on your site where they would ordinarily appear. That includes in:
- lists of posts (for example, from a category or author page)
- related posts
- pinned posts

If you link to a content item with `isVisible: false` from the content section of other content items, those links will still appear. Consider setting `isContentHidden: true` if you need to prevent your visitors from viewing the contents of a given content item.

> **Important:** Your visitors will still be able to view content configured with `isVisible: true`. This is by design to avoid breaking existing links and references. To hide content on a page, see the section below on "Using `isContentHidden".



## Using `isArchived`
When a content item's frontmatter contains `isArchived: true`, a message will appear in between the hero and content sections of a page.

This message informs visitors that the content item they are viewing is now archived and that information contained in it may be out of date.

## Using `contentMessage`
When a content item has `contentMessage` set to a non-empty string, a message will appear in between the hero and content sections of a page.

This message can contain any value set by the author.

`contentMessage` does not depend on `isArchived`. However, if both `isArchived: true` and `contentMessage` contains a string, the value given to `contentMessage` will replace the message that would otherwise appear for archived content.

## Using `isContentHidden` 
When a content item has `isContentHidden: true` in its frontmatter, 

Content items with this setting toggled will display a message informing visitors that the page they are viewing is no longer available.

When used in conjunction with `isVisible: false`, this effectively removes content from your site.

> We recommend setting `isContentHidden: true` and `isVisible: false` to remove content from your site rather than deleting a content item's file. This is to prevent your visitors from experiencing broken links and other errors.

## Example use cases
Use `isVisible: false` by itself when you want to:
- share early access content only visible to special visitors who have a direct link (you might set `isVisible: true` at a later date)
- exclusive content that is only visible to special visitors who have a direct link (you intend on keeping `isVisible: false` set indefinitely)
- you want to preview a draft on your site and do not wish others to see it yet

Use `isArchived: true` by itself when you want to:
- alert your visitors that a content item is no longer relevant

Use `isVisible: false` together with `isArchived: true` when you want to:
- keep visitors from finding a content item, but you still wish to:
	- inform those who have a direct link that that content item is now archived
	- allow visitors who have a direct link to reference its contents

Use `isVisible: false` together with `isContentHidden: true` when you want to:
- effectively remove a content item from your site, but still preserve its link (to avoid your visitors from experiencing broken links)

Use `contentMessage` on its own to:
- convey important information to visitors who click to a certain content item

Use `contentMessage` together with `isArchived: true` or `isContentHidden: true` to:
- override the default message that typically appears on content items that are marked as archived or whose contents are hidden

## Customizing default messages
When `isArchived: true` and/or `isContentHidden: true`, your visitors will see a message prominently displayed below the hero section and above your content.

You can customize this message by editing the following section in `my_settings/strings.md`:

```markdown
isContentArchivedMessage: "This page is archived and may contain information that is out of date"
isContentHiddenMessage: "This page and its contents are no longer available"
isContentArchivedAndHiddenMessage: "This page is archived and its contents are no longer available"
isContentHiddenBodyHeading: "No longer available"
isContentHiddenBodyText: "Sorry, the page you're visiting is no longer available."
```