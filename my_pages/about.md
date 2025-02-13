---
title: "About Eggspress"
subheading: "Eggspress helps you build your website"
sidebar: "What is Eggspress?"
weight: 1
subtitle: ""
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
---

This is the documentation site for [Eggspress](https://github.com/dentonzh/Eggspress), an **open-source project** that helps you **find your voice** on the Internet.

There are **no algorithms** that decide which of your content deserves more views.[^1] There's **no friction** thrown in the way of your visitors and your work.[^2]

Your voice is yours alone. You decide when, where, and how you want to use it.

## Your content can live anywhere
Eggspress is easiest to set up on Github and Vercel, which have generous free tiers. We use them to host Docs (this site) and when showing you [how to set up](my_posts/getting_started/getting-started.md) your own site.

These aren't the only places that can host your content, however. In fact, you can set up Eggspress on any modern server. That means anything from a large cloud provider down to your own computer at home.

Decide Eggspress isn't for you? Just move your files.

Eggspress uses [Github Flavored Markdown](https://github.github.com/gfm/), which is widely used and close to [CommonMark](https://spec.commonmark.org/0.31.2/).[^3] You'll be able to migrate away from Eggspress to any other Markdown-based site or blog platform with relative ease.

## Speed and simplicity
Out of the box, Eggspress is blisteringly fast.

This is in part due to its simplicity.[^4] Pages are minimal because your content comes first. Need more minimalism? You can turn off most elements that appear on your page.[^5]

Eggspress is also fast because we've fine-tuned everything for performance. Now everyone can enjoy your work the way it was meant to be. Even visitors on slower connections and devices will fly through your pages with fast load times.[^5]

## Extensible
Eggspress uses MDX, which allows you to add custom (React) components directly into your Markdown content.

Components can do a lot of things. Use them to insert interactive charts and diagrams, live market data, post data from your visitors (like leaving a comment or signing up for your newsletter), and much more.

Found an Eggspress component that someone else shared? Add it to your site just by copying that component into your `my_components` folder.

Learn more about how to [create / add your own components](my_posts/guide/create-custom-components.md).

## Ready to get started?
Follow our [comprehensive guide for setting up](my_posts/getting_started/getting-started.md). It's filled with delightful egg art and helpful screenshots.

Familiar with tools like Github and Vercel? Or want to take Eggspress for a spin without all of the nitty gritty details? Check out our 20-minute [Quick Start guide](my_posts/getting_started/quick-start.md).


[^1]: If you want to be discovered by new visitors, you'll still be subjected to the whims of search engines like Google. Thankfully, Eggspress comes SEO-ready, meaning your content will be optimized to appear in search indexes
[^2]: Platforms like Facebook, Instagram, and LinkedIn have always had a sign-in wall that require visitors to register and login before viewing content posted to them—X (formerly Twitter) and Medium have recently hopped on this bandwagon
[^3]: Eggspress uses Github Flavored Markdown to enable support for footnotes and tables, which are not supported by CommonMark
[^4]: Some of this comes at the loss of some features such as reaction buttons (e.g. likes) and comments, which are presently unavailable on Eggspress, but can be enabled through the use of custom components
[^5]: You can turn off share buttons, previous/next post links, related posts, pinned posts, author cards, etc. and even customize the strings that appear on your site so they're less verbose
[^6]: Eggspress uses a compact version of Google Analytics, so you can even keep Analytics on without it affecting speed
