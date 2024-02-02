---
title: "Quick Start"
subtitle: "Launch in 20 minutes"
subheading: "How to set up an Eggspress site quickly"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
image: "racing_banner.jpeg"
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 46
date: 2024-01-18T11:01:44
author: "denton"
snippet: "Get started in 20 minutes. This guide is for those who want to get something started ASAP or want to take Eggspress for a test drive before commiting more time to it."
description: "Get started using Eggspress in 20 minutes using our Quick Start guide."
sidebar: "eggspress_links"
category: ""
prevPost: ""
nextPost: ""
relatedPost1: "configure-your-workspace"
relatedPost2: "editing-content"
relatedPost3: "linking-internal-content"
relatedPost4: "using-templates"
relatedPost5: "using-sidebars"
relatedPost6: "archive-and-hide"
relatedPost7: "frontmatter"
relatedPost8: "set-up-amazon-associates"
relatedPost9: ""
---

This Quick Start guide is designed to help you **launch quickly**. In the interest of time, it glosses over many details. 

Use this guide to:
- take Eggspress for a test drive
- start a "disposable" website
- refresh yourself on setting up

Have questions? Need more help? Try the more comprehensive [Getting Started](/getting-started) guide.

> A ten-minute tutorial is available on [TikTok](https://www.tiktok.com/t/ZT8nFcSLb/) and on [Instagram](https://www.instagram.com/p/C2TaEugxwGd/).

![Eggspress characters racing for speed](racing.jpeg)

## Github and Vercel
Begin by creating an account on [Github](https://github.com) and [Vercel](https://vercel.com). 

When creating accounts on Github and Vercel, you will **not** need to provide payment/billing information.

Create your Github account first. When that's ready, sign up for Vercel by selecting "Continue with Github."

> Keep your login credentials for Github safe. You'll need these to make changes to your site.

For the remainder of this guide, you will open multiple tabs for Github and Vercel. **Keep these open**. We will be jumping between them.

## Install Eggspress
Install Eggspress onto your Github account by [creating a fork of it](https://github.com/dentonzh/Eggspress/fork).


![Screenshot of Github's New Fork page with the Create Fork button visible](Pasted%20image%2020231125172256.png)

Give your project a name and a description. When you're reading, click **"Create Fork"**.

You'll see a spinner appear as Github forks Eggspress for you. When your fork is ready, you'll be taken to the page for your **forked repository**. 

This is your personal copy of Eggspress. We strongly recommend **bookmarking** or **saving the link** someplace as you will need to access this page whenever you wish to make changes.

> **Good to know:** Github is where we will store our files. These include the software that makes Eggspress what it is as well as all of your content files, preferences, and custom components.

## Put your site on the web
1. On **Vercel**, [add a new project](https://vercel.com/new). 

Under the "Import Git Repository" heading, click on the dropdown menu. Select the name of your forked repository.

If the name of your forked repository does not appear and you see an option to install Vercel on Github, click on this option instead.

When prompted, click the "Install" button.

Once you've selected your forked repository, look for the **"Import"** button that appears on this page. 

> You may see multiple import buttons, one for each project. If this is the case, select the project that corresponds with your new forked repository.

![Screenshot of Vercel's import project button](Pasted%20image%2020231125172817.png)

2. On the **"new project"** page, input a name for your project and select "Next.js" for Framework preset

> The project name you select will become part of the **web address** for your new site. For example, if "fast-eggs-racing-quickly" is your project name, you'll get the address `https://fast-eggs-racing-quickly.vercel.app`.
> 
> Note that if the name you choose is already taken, Vercel will add extra words to your address. You can change this to another `###.vercel.app` address or add a custom domain.

3. Once you're ready, click **"Deploy"**.

Vercel takes about a minute to build a new project. When your site is ready, you'll be taken to your project page. 

On your project page, click the link labeled **"Deployments"** followed by a button labeled **"Visit"** to see your new site.

We strongly recommend **bookmarking** or **saving the link** to your new site.

![Screenshot of Vercel's deployments page with the Visit button visible](Pasted%20image%2020231126192841.png)

## Set up and upload your workspace
Your workspace folder holds all of your content and settings.

For your convenience, Eggspress provides a starter workspace.

> This section requires you to extract (expand) zip files. If you're unfamiliar with zip files, creating folders, or dragging and dropping files, see [Create Your Workspace](my_posts/getting_started/create-your-workspace.md) for more details and screenshots.

![Eggspress race heating up](racing_close.jpeg)

To use this starter workspace, first create a folder on your computer in a location you'll remember.

When your folder is ready:

1. Click the big green download button on your site and save the `eggspress_starter_workspace.zip` file
2. **Extract** (expand) the contents of this file into your **workspace folder**
3. Open your **workspace folder**

You should now see many folders whose names start with `my_`. If not, repeat steps 1-3.

4. **Upload your workspace** to your forked repository

**Back on Github**, navigate to your forked repository.

On this page, click on the button labeled **"Add files"** or with the **"+"** sign. This will bring up a dropdown menu. Select **"Upload files"**.

This will take you to an upload page.

5. Drag and drop all of the folders starting with `my_` into the box labeled "Drag files here to add them to your repository"
6. Wait for files to upload, then scroll until you see **"Commit Files"**
7. Provide a Commit message (something like "Upload initial workspace" is sufficient)
8. Click **"Commit"**

![Screenshot representing dragging and dropping workspace folders into Github for uploading](Pasted%20image%2020231125173322.png)

## Building your new site
Vercel will automatically build your new site. You will not need to take further action unless you run into issues.

Generally, it takes about **2-3 minutes** from the time you click "Commit" on Github to Vercel completing your build.

When your build is ready, visit your site to see your new changes take effect. You may need to refresh your site.

If you do not see your changes, see [troubleshoot your build](my_posts/troubleshooting/troubleshooting-your-build.md).

*You're almost done. **It's the final lap!***

![Racers communicating with HQ](racing_comms.jpeg)

## Customize your site
On your computer, open the `my_settings` folder.

Each file in this folder represents a category of settings you can adjust to your liking.

The most important file for setting up a new site is `metadata.md`. You'll be able to adjust your settings for your site's name, create a subtitle and subheading, etc.

Open this file in your favorite Markdown editor. If you don't have a Markdown editor yet, we recommend [using Obsidian](my_posts/reference/configure-obsidian.md) for the best experience. 

Otherwise, choose a simple text editor like Notepad or TextEdit.

In `metadata.md`, you'll see a set of key-pair values in a section called **frontmatter**. This section appears at the top of most content files.

**Frontmatter** contains important information that tells Eggspress how to build your site or certain pages. Learn more about [frontmatter and how it works in Eggspress](my_posts/reference/frontmatter.md).

`my_settings/metadata.md` contains **frontmatter** for organizing basic information about your site, like its `title` and `description`. We recommend filling out all of these fields.

> If you are using a custom domain, you **must** provide a value to `metaBaseUrl` (e.g. `https://eggspress.org` is the value for this documentation site). 
> 
> Otherwise, you **must** leave this blank.

Next, we recommend editing `appearance.md`. Frontmatter in this file help you configure how your site appears, such as the color scheme to display.

## Publishing your content
You can create new posts and pages by copying and pasting template files found in `my_templates.` 

> Do **not** mix and match when using templates. 
> 
> For example, templates for posts should only be used in files found in `my_posts`, pages for files in `my_pages`, etc.

If you use the starter workspace, you'll find placeholder files already. Before you remove these, look through them to understand how **frontmatter** and **content** translate into finished pages on your placeholder site.

You can read more about how files work in [Editing Content](my_posts/getting_started/editing-content.md).

When you're ready, go to your Github forked repository page and upload your newly modified files. Do you see your new updates?

If so, congrats! You now know how to launch an Eggspress site and do so quickly.

![Eggspress racers crossing the finish line](finish.jpeg)

## Further reading
We've only scratched the surface in this Quick Start guide. 

Eggspress comes choc full of features, some of which drastically improve the authoring experience.

In the **Related Posts** section below, we link a few helpful posts you may wish to read to get the most out of Eggspress.

As always, your feedback is welcome. 

You can leave your feedback, report a bug, ask questions, or suggest new features by using your Github account to [create an issue](https://github.com/dentonzh/Eggspress/issues/new).

![First place racer](winner.jpeg)
