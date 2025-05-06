---
title: "Create Custom Components"
subtitle: "Using React / JSX"
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
snippet: "Eggspress lets you write JSX in your Markdown files. In this article, we'll show you how you can embed dynamic, interactive, React components directly in your Markdown content."
description: "Eggspress lets you write JSX in your Markdown content. You can also create your own React components and embed them. Here's how."
sidebar: "eggspress_links"
category: "how-to"
prevPost: ""
nextPost: ""
relatedPost1: "editing-content"
relatedPost2: ""
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Eggspress lets you create your own custom components and embed them directly into Markdown content. With these, you can add dynamic and interactive elements to your pages with ease.

![](my_posts/guide/images/mechanic.jpg)

## Who this is written for
Anyone can use custom components. This article includes instructions for using *and* creating them.

If you're only planning on using components, read the next section and the following sections below:
- "Adding custom components to your content"
- "A word of caution"
- "Performance implications"

If you're thinking about creating your own components, you should know at least some JavaScript and HTML. If you're unfamiliar with React, use the [React Quick Start](https://react.dev/learn) documentation to learn how to create components from your markup and JavaScript.

Otherwise, if you're already familiar with React, you should find yourself right at home.

## Why use custom components?
With custom components, you'll be able to enrich your content, giving your pages greater functionality and/or visual structure.

Use custom components to:
- build custom visual elements
- create charts that render dynamically on-screen
- build interactive features, like calculators and simulations
- add fields and other inputs that post to third-party APIs
- query and present live data (e.g. market, weather, or flight data)
- add monetization features, like ads
- and much more!

## Eggspress-specific conventions
Eggspress makes it easy to insert components into content.

During build, Eggspress will move custom components into the correct place within the `app` directory. Eggspress will also add the necessary imports and bindings during build.

This provides all authors with an easy way to bring components into their content.

To ensure that Eggspress can bring components into content correctly, ensure that:
- all filenames of components (ending in `.tsx`) in your `my_components` folder must be unique regardless of where they are nested
- all filenames of components you wish to import must start with a capital letter
- if a component uses dependencies, you must specify the names of those dependencies separated by commas in the first line of the component as a comment

You may experience unintended behavior or an increase in build errors if you do not observe these conventions.

> **Good to know:** Eggspress uses Next.js and Tailwind. You can make use of Next.js features and Tailwind class names in your components.

## Custom components by example: Disclosure.tsx
The starter workspace includes an example of a custom component, `my_components/Disclosure.tsx`. This component is used to provide readers with a disclosure that stands out from the rest of the page.

Possible use cases for this component are:
- complying with FTC rules around the use of affiliate / sponsor links
- complying with rules set forth by other regulatory agencies
- disclosing conflicts of interest
- providing legal disclosures

This file resembles any any other React component you may have encountered.

It accepts three props, `text`, `page`, `linkText`, all of which are optional.

If the `text` prop is left empty, default text will appear for FTC affiliate disclosure (the most common use case for this kind of component on a blog).

An author may replace this default text by specifying their own text. For example:

`<Disclosure text="Please consult with your physician before following the advice on this page" />`

`page` allows an author to link to a custom page on the site. For example, if a file exists at `my_pages/disclosure.md`, passing "disclosure" to page like so:

`<Disclosure page="disclosure" />`

Will display a link labeled "Read more" at the end of the `Disclosure` component. Of course, you may replace this "Read more" text with your own text by passing a value to `linkText`.

If you have a standard disclosure message that differs from the default message, you can directly modify `Disclosure.tsx`. You may also create multiple disclosures by copying this file.

For example, you may have `AffiliateDisclosure.tsx` and `MedicalDisclosure.tsx` files if you commonly require these in your content.

Finally, you may repurpose this component for something else entirely, giving it a brane new name, adding new props, removing existing props, or visually restyling it.

> **Good to know:** if you're new to creating components, we recommend using `Disclosure.tsx` as a good starting place to help you structure your code

## Building a component that uses dependencies
The React ecosystem is a rich one because of its large community. One benefit of this is that there are many existing libraries and packages you can use when building in React.

This benefit applies to custom components as well.

Eggspress abstracts away much of the complexity involved in pulling in dependencies. You will not, for example, need to modify `package.json` or run any `npm install` / `yarn add` commands before you build your site.

To use a dependency, simply import it as you normally would. Then, at the very top of your custom component, create a one-line comment that includes the names of all of the dependencies you require, separated by commas.

For example, if you wanted to use `react-chartjs-2` in your component, your file might look something like this:

```typescript

// chart.js, react-chartjs-2

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


// Rest of your code goes here

```

> **Important:** If you import dependencies, you *must* include the commented-out line with the names of your dependencies, separted by commas, as the first line of your component.

## Adding custom components into your content
To use custom components in your content, first ensure that the component you wish to add is in your `my_components` folder.

Ensure that your custom components each have a unique name and that their filenames begin with a capital letter.

To use your React component, you'll insert a tag with its name directly into your Markdown. Here's how you might include the `Disclosure.tsx` component without passing any values to it:

```markdown

**Lorem ipsum** dolor sit amet, *consectetur adipiscing elit*, sed do eiusmod tempor incididunt...

<Disclosure />

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...

```

And how it appears when you insert it into content:

<Disclosure />


We can pass "props" to it, replacing the text that appears and providing it with a custom page to link to (in this example, to `/page/medical-disclosure`) like so:

```markdown

**Lorem ipsum** dolor sit amet, *consectetur adipiscing elit*, sed do eiusmod tempor incididunt...

<Disclosure text="Please consult with your physician before following the advice on this page" page="medical-disclosure" linkText="Learn more" />

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...

```

When inserted into content, this component looks like this:

<Disclosure text="Please consult with your physician before following the advice on this page" page="medical-disclosure" link-text="Learn more" />

## A word of caution
Using custom components increases the possibility of inadvertently introducing build errors. If you encounter build issues, read about [how to troubleshoot your build](troubleshooting-your-build).

To mitigate issues when using a custom component, ensure that:
- the spelling on your component is correct
- your component exists somewhere in `my_components`
- you are only passing props that exist in that component (for example, do not pass `image="disclosure.jpg"` to `Disclosure` because it does not accept `image` as a prop)

If you place a component in your content that does not exist, your site will not build. Do not insert components without first ensuring that it exists in `my_components`.

If you decide to remove a custom component from your site, but that custom component exists in many places, it may be easier simply to remove the code within that component rather than deleting its file altogether.

You can do this by:
- removing the commented first line if it exists
- removing any imports that exist
- keeping existing props
- replacing the returned JSX with `<></>` (an empty element)

## Performance implications
Certain kinds of custom components may have an impact on your site's performance. Readers may experience slower loading times and/or browser slowdowns and hiccups.

If you are using several components at once, we recommend testing your pages on an older / slower device to see if there is a noticeable slowdown.

Certain custom components may use other dependencies. That is, they may require code from other libraries to run. This does not necessarily impact your readers, but it will likely lengthen the amount of time required for building your site.

## Publishing custom components
We encourage you to share your custom components with the Eggspress community.

The easiest way to share components is by creating a repository for them on Github.

Because Eggspress focuses first on making it easy for non-developers to publish on their site, we strongly encourage component authors to provide clear documentation.

When publishing a component:
- limit the number of files to the bare minimum (ideally, just the component and an accompanying `README.md`)
- provide instructions in both `README.md` and in a multi-line comment near the top of your component file

The custom component that ships with every copy of Eggspress, `Disclosure.tsx`, has an example of how you may wish provide documentation in your component.
