---
title: "Configure Share Buttons"
subtitle: ""
subheading: "Share buttons allow your readers to share links to your pages easily"
isVisible: true
hideContent: false
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 50
date: 2024-01-11T14:01:74
author: "denton"
snippet: "Let your readers share articles and pages on your site to the web. This guide will show you how to configure your share buttons. You can decide where they display and which buttons to present to your visitors."
description: "Learn how to configure share buttons in Eggspress. Set where share buttons appear and which buttons are visible."
sidebar: "eggspress_links"
category: "how-to"
prevPost: ""
nextPost: ""
relatedPost1: "use-google-analytics"
relatedPost2: ""
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Share buttons make it easy for your visitors to share articles and pages from your Eggspress site. In this guide, you'll learn how to configure share buttons.

![](my_posts/guide/images/color_planes.jpg)
## What are share buttons?
When a visitor clicks on a share button, one of the following happens:
- A link to the current page that the visitor is on will be copied to that visitor's clipboard (to be pasted elsewhere)
- The visitor's default email program opens with the subject line pre-populated with the current page's title and a body pre-populated with a link to the current page
- A new window or tab will open to a social media platform's sharing page; some fields may be pre-populated
- A window will open allowing a visitor to share a link to a messaging app

The exact action is determined by the type of share button pressed.

There are share buttons on this very page! One set of these is located beneath the title in a dropdown menu. Click the link labeled "Share" in the hero banner to see how share buttons work on Eggspress.

## Determine which share buttons to display
By default, Eggspress shows share buttons for:
- Copy link
- Send email
- Share on X (formerly Twitter)
- Share on Facebook
- Share on LinkedIn
- Share on Reddit

You may decide to toggle some or all of these buttons off.

You may also toggle on the following share buttons that are not visible by default:
- Share on Hacker News
- Share on Flipboard
- Share on WhatsApp
- Share on Telegram

To toggle the visibility of any of these buttons, set the value of their respective key labeled with a name starting with `showShareBy`. You can find these keys in the file `my_settings/appearance.md`.
## Decide where share buttons appear
By default, share buttons appear on both blog posts (on path `/blog/`) and custom pages (on path `/page/`).

On blog posts, share buttons can appear in three places:
- Nested in a dropdown menu in the hero section
- In the sidebar (desktop only)
- At the end of your content

On custom pages, share buttons can appear in two places:
- In the sidebar (desktop only)
- At the end of your content

You can decide in which of these places your share buttons appear. You may also turn off share buttons altogether.

You can configure your share buttons by setting keys beginning with `showShare` or `share` in the file `my_settings/appearance.md`.