---
title: Use Components
subtitle: "in Your Content"
subheading: "Learn how to use React components in your Eggspress content"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 50
date: 2024-01-27T12:01:76
author: "denton"
snippet: "Eggspress allows you to embed dynamic, interactive, components that you or others have created. In this article, we'll show you how you can insert these components into your content."
description: "Eggspress lets you insert components that you or others have created. Here's how."
sidebar: "eggspress_links"
category: "how-to"
prevPost: ""
nextPost: ""
relatedPost1: "editing-content"
relatedPost2: "create-components"
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Components are elements that you can insert directly into your content.

They come in all shapes and sizes, with varying functionality. Some are simple, displaying static text. Others can be dynamic and even interactive.

> **For developers:** this article is written for those who wish to use components. If you are interested in creating and/or publishing your own components, see our guide on [creating components](my_posts/guide/create-components.md).

![](my_posts/guide/images/open.jpg)

## Why components?
Components can extend the functionality of your pages and give them increased visual structure.

components can help you:
- present custom visual elements
- create charts that render dynamically on-screen
- insert widgets with interactive features, like calculators and simulations
- add fields and other inputs that post to third-party APIs
- query and present live data (e.g. market, weather, or flight data)
- add monetization features, like ads
- and much more!

## Using components
Adding components to your content is simple.

To begin, you'll write HTML tags directly into your content. These tags reference the name of the component you wish to use.

Let's demonstrate this with an example.

Out of the box, Eggspress comes with a `<Disclosure>` component. This component is already placed in your `my_components` folder for you.

To use this component, you will need both opening and a closing `Disclosure` tags:

```markdown

**Lorem ipsum** dolor sit amet, *consectetur adipiscing elit*, sed do eiusmod tempor incididunt...

<Disclosure></Disclosure>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...

```

Opening tags are formed by wrapping the name of the component in angle brackets. Closing tags are formed similarly, but with a forward slash prefixing the component's name.

## Configuring components
Some components can be further customized and configured through properties. The component `<Disclosure>` allows you to set three properties:
- `text`
- `page`
- `linkText`

These properties are optional. Note that some components have required properties.

Typically, components include instructions for their use in the main component file. For example, if you open `my_components/Disclosure.tsx` in a text editor, you will be able to read its instructions near the top of the file.

By default, `<Disclosure>` renders text that discloses your use of affiliate links on a page. This is useful for authors who include affiliate links in their content. The FTC mandates disclosing affiliate links, sponsor links, and native ads.

What if you need to disclose something else? To display your own custom text, use the `text` property. Here's how:

`<Disclosure text="Please consult with your physician before following the advice on this page" />`

In this example, we replace the default text with text we may wish to display to readers before we provide medical advice.

We can also set `page` and `linkText`, which allows us to display a link to a custom page on our site. For example, if you insert the following into your content:

`<Disclosure page="about" linkText="Learn more about this"`

You will see:

<Disclosure page="about" linkText="Learn more about this" />

In this example, the Disclosure comes with a link that leads to the custom page represented by the file `about.md`.

## Use data with components
Some components allow you to provide additional data. For example, Eggspress Chart uses CSV files that you provide to generate charts.

You can add data for use in components by adding files to the `my_data` workspace folder.

## Adding new components
To add new components to your Eggspress site, download the component and place it into `my_components`. Note that some components will have an accompanying folder that you may also need to place into `my_components`.

Some components have usage instructions that you need to follow in order to enable them in your content.

For example, Eggspress Chart requires that you either provide the name of a CSV file stored in `my_data` or the file ID of a Google Sheets spreadsheet. In either case, you must provide a value to the property called `filename` in order for your Chart to render properly.

## A word of caution

Using components increases the possibility of inadvertently introducing build errors. If you encounter build issues, read about [how to troubleshoot your build](troubleshooting-your-build).

To mitigate issues when using a component, ensure that:
- the spelling on your component is correct
- your component exists somewhere in `my_components`
- you are only passing props that exist in that component (for example, do not pass `image="disclosure.jpg"` to `Disclosure` because it does not accept `image` as a prop)

If you reference a component in your content that does not exist in `my_components`, then that component will simply render an empty element. That is, your component will not appear in your content.

Note, however, that any "children" of a component will still render, even if the component is unavailable. The "children" is any content that appears between a component's opening and closing tags.

## Performance implications
Certain kinds of components may impact your site's performance. Readers may experience slower loading times and/or browser slowdowns and hiccups.

For example, if you are using Eggspress Chart, inserting charts with thousands of rows of data may cause slower devices to slow down.

If you are using several components at once, we recommend testing your pages on an older / slower device to detect performance issues more easily.

Some components may also lengthen the amount of time it takes to build your site.