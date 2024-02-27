---
title: Create Components
subtitle: "Using React / JSX"
subheading: "Learn how to create React components that can be inserted into Eggspress content"
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
relatedPost1: "use-components"
relatedPost2: "editing-content"
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Eggspress lets authors embed **components** directly into Markdown content. These components are (almost) typical React components. 

With these, authors can add dynamic and interactive elements to their pages with ease.

![](my_posts/guide/images/bike_repair.jpeg)

## Who this is written for
This article includes instructions for creating components. If you don't wish to create a component, read about [using components](my_posts/guide/use-components.md) instead.

To create components, you'll need to know some:
- HTML
- JavaScript (and preferably TypeScript)
- React

MDN has a [set of tutorials](https://developer.mozilla.org/en-US/docs/Web/Tutorials) that can help you get started with HTML and JavaScript. The [React Quick Start](https://react.dev/learn) can also help provide the scaffolding you need to design and build a simple component.

## Why create components?
Components can add functionality and/or visual structure to Eggspress pages. Use components to:

- build custom visual elements
- create charts that render dynamically on-screen
- build interactive features, like calculators and simulations
- add fields and other inputs that post to third-party APIs
- query and present live data (e.g. market, weather, or flight data)
- add monetization features, like ads
- and much more

Throughout this guide, we will reference [Eggspress Chart](my_posts/components/eggspress-chart.md), a component, as an example.
## Setting up a new component
Each Eggspress component is made up of a "main" component whose name must begin with a capital letter.

If a component uses modules, those modules must be stored in a subfolder that is **the same name** as the main component.

Both the main component and its accompanying modules folder must be stored at the root of the `my_components` folder.

Here is the directory tree for Eggspress Chart:

```
my_components/
├─ Chart.tsx
├─ Chart/
│  ├─ ComboBarLine.tsx
│  ├─ Bubble.tsx
│  ├─ Pie.tsx
```

### Development environment
When deploying to a service like Vercel, Netlify, or AWS Amplify, Eggspress executes a prebuild script that moves files and folders from `my_components` into the `app` directory.

If you are running your instance of Eggspress in development mode (`npm run dev`), you must import your component into the app manually.

To do this, open `app/_components/UserComponents.tsx`. This will be a barrel file for components. Using named exports, import your components like so:

```typescript
import Chart from `@/my_components/Chart`

export { Chart }
```

You may also import multiple components:

```typescript

import Chart from `@/my_components/Chart`
import Disclosure from `@/my_components/Disclosure`

export { Chart, Disclosure }

```

### Testing your component
To test your component, insert it into the Markdown content section of either a post (file in `my_posts`) or custom page (file in `my_pages`).

In your content, you may write JSX directly. Use this feature to insert your component, passing any arguments to your components' parameters as properties:

```markdown

<Chart filename="data.csv" title="My Test Chart" />

```

## Reading user data
Your component may require data sourced from one or more files provided by an author. These files must be placed into the `my_data` folder.

For example, the component [Eggspress Chart](my_posts/components/eggspress-chart.md) requires that authors add a `.csv` file to workspace folder `my_data` and pass the name of that file as a property (`filename`).

Read files provided by the user by using the utility function `getUserDataRecursively`, an asynchronous function.

```typescript

import { getUserDataRecursively } from 'app/utils'

const myComponent = async (filename: string) => {
  // log 
  console.log(await getUserDataRecursively(filename))
}

```

`getUserDataRecursively` returns a `string` containing the exact path to the first file found matching the provided `filename`.

If no file is found, `getUserDataRecursively` returns `undefined`.

This function looks for a file within `my_data` given a filename. It accepts two parameters:
- `filename` (required) - the filename to match
- `subfolder` (optional) - a subfolder within `my_data` to look in

You may need to check if the value returned from `getUserDataRecursively` is `undefined` and handle the case where a file is not found.

Depending on the kind of data your component may receive, you may also wish to use third-party dependencies. Eggspress Chart uses `csvtojson`, an [library for converting CSV into JSON](https://www.npmjs.com/package/csvtojson):

```typescript

const csv = require('csvtojson')
...

const Chart = async (...) => {
  const data = await csv().fromFile(await getUserDataRecursively(filename))
  ...
}

```

## Eggspress-specific rules
On the surface, Eggspress components are React components that adhere to a few Eggspress-specific rules. These are:
1. main components must have filenames starting with a capital letter
2. main components must be at the root of the `my_components` directory

This is because Eggspress relies on these files to determine how to import components during build.

> **Good to know:** Eggspress uses Next.js and Tailwind. You can make use of Next.js features and Tailwind class names in your components.

## Components by example: Disclosure.tsx
The starter workspace includes an example of a component, `my_components/Disclosure.tsx`. This component is used to provide readers with a disclosure that stands out from the rest of the page.

Possible use cases for this component are:
- complying with FTC rules around the use of affiliate / sponsor links
- complying with rules set forth by other regulatory agencies
- disclosing conflicts of interest
- providing disclaimers about the content presented
- providing legal disclosures

At a glance, this file resembles an ordinary React component. It accepts three properties, `text`, `page`, `linkText`, all of which are optional.

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
React has a rich community with a robust ecosystem of existing libraries. Eggspress components can make use of many of these libraries. It can also import and make use of many other JavaScript and Node libraries.

To add a dependency, import it as you normally would using an import statement or by using expressions like `import()` or `require()`.

Then, to make these dependencies available during build, add their names to the **first line of your component(s)** in a comment. These names should be separated by commas.

For example, Eggspress Chart imports `chart.js` and `react-chartjs-2` like so:

```typescript

// chart.js, react-chartjs-2

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


// Rest of your code goes here

```

> **Important:** you must include the the names of your dependencies, separated by commas, in the first line of your component in a comment

> **Why import like this?** Eggspress abstracts away much of the complexity involved in pulling in dependencies. This allows authors to use components that have dependencies without needing them to modify `package.json` or run `npm install` / `yarn add` commands manually.

## Adding components to content
To use a given component, its main file along with a folder containing its modules must exist in the `my_components` workspace folder.

All components in `my_components` must have unique names that begin with capital letters.

To use the included `Disclosure` component, for example, `Disclosure.tsx` must be available at `my_components/Disclosure.tsx`.

Then, to insert it into content, create a tag using its name (beginning with a capital letter):

```markdown

**Lorem ipsum** dolor sit amet, *consectetur adipiscing elit*, sed do eiusmod tempor incididunt...

<Disclosure />

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...

```

Which will create an element that looks like this:

<Disclosure />

We can also pass values to `Disclosure`'s properties like so:

```markdown

**Lorem ipsum** dolor sit amet, *consectetur adipiscing elit*, sed do eiusmod tempor incididunt...

<Disclosure text="Please consult with your physician before following the advice on this page" page="medical-disclosure" linkText="Learn more" />

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...

```

When inserted into content, this component looks like this:

<Disclosure text="Please consult with your physician before following the advice on this page" page="medical-disclosure" linkText="Learn more" />

## A word of caution
Using components increases the possibility of inadvertently introducing build errors. If you encounter build issues, read about [how to troubleshoot your build](troubleshooting-your-build).

To mitigate issues when using a component, ensure that:
- the spelling on your component is correct
- your component exists somewhere in `my_components`
- you are only passing props that exist in that component (for example, do not pass `image="disclosure.jpg"` to `Disclosure` because it does not accept `image` as a prop)

If you reference a component in your content that does not exist in `my_components`, then that component will simply render an empty element. That is, your component will not appear in your content.

Note, however, that any "children" of a component will still render, even if the component is unavailable. The "children" is any content that appears between a component's opening and closing tags.

## Publishing components
If you create a component, consider sharing it with the Eggspress community. 

The easiest way to share a component is by creating a repository for it on Github. Keep the structure of your repository simple with the main component and modules folder at the root.

Because Eggspress has many non-developer users, we recommend providing documentation suitable for those users.

When publishing a component, provide a `README.md` where possible.