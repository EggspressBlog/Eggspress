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
- Take Eggspress for a test drive
- Start a "disposable" website
- A refresher on how to set up

Have questions? Need more help? Try the more comprehensive [Getting Started](/getting-started) guide.

> A ten-minute tutorial is available on [TikTok](https://www.tiktok.com/t/ZT8nFcSLb/) and on [Instagram](https://www.instagram.com/p/C2TaEugxwGd/).

![Eggspress characters racing for speed](racing.jpeg)

## Github and Vercel
Begin by creating an account on [Github](https://github.com) and [Vercel](https://vercel.com).

Create your Github account first. When it's ready, sign up for Vercel by selecting "Continue with Github."

> **Important:** Keep your login credentials for Github safe. You'll need these to make changes to your site.

For the remainder of this guide, you will open multiple tabs for Github and Vercel. **Keep these open** as we will jump between them.

## Install Eggspress
Install Eggspress onto your Github account by [creating a fork of it](https://github.com/dentonzh/Eggspress/fork).

![Screenshot of Github's New Fork page with the Create Fork button visible](Pasted%20image%2020231125172256.png)

Give your project a name and a description. When you're reading, click **"Create Fork"**.

A spinner will appear as Github forks Eggspress for you. When your fork is ready, you'll be taken to the page for your **forked repository**. 

This is your personal copy of Eggspress. We strongly recommend **bookmarking** or **saving the link** someplace as you will need to access this page whenever you wish to make changes.
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

## Set up your workspace folder
Your workspace folder holds all of your content and settings.

For your convenience, Eggspress provides a starter workspace.

> This section requires you to extract (expand) zip files. If you're unfamiliar with zip files, creating folders, or dragging and dropping files, see [Create Your Workspace](my_posts/getting_started/create-your-workspace.md) for more details and screenshots.

![Eggspress race heating up](racing_close.jpeg)

To use this starter workspace, you'll need to perform a few steps.

**On your computer**, create a folder someplace you'll remember.

When your folder is ready:

1. Click the green button **on your site** and save **eggspress_starter_workspace.zip**
2. **Extract** (expand) the contents of this file into your **workspace folder**
3. Open your **workspace folder**

You should now see many folders whose names start with `my_`. If not, repeat steps 1-3.

## Upload your workspace folder
**Back on Github**, navigate to your forked repository.

On this page, click on the button labeled **"Add files"** or with the **"+"** sign. This will bring up a dropdown menu. Select **"Upload files"**.

This will take you to an upload page. Here, you'll see a large box labeled "Drag files here to add them to your repository."

To upload your files:

1. Drag and drop folders starting with `my_` into the box
2. Wait for files to upload, then scroll until you see **"Commit Files"**
3. Provide a Commit message (optional)
4. Click **"Commit"**

![Screenshot representing dragging and dropping workspace folders into Github for uploading](Pasted%20image%2020231125173322.png)

## Building your new site
When you commit your files on Github:
1. Github will update your forked repository
2. Vercel will build your site with your new files

This happens automatically. No action is required from you.

Generally, it takes about **2-3 minutes** from the moment you click "Commit" to the point where your new site is ready.

After this amount of time has passed, try visiting your site. You may need to refresh it.

If you do not see your changes, see [troubleshoot your build](my_posts/troubleshooting/troubleshooting-your-build.md).

*You're almost done. **It's the final lap!***

![Racers communicating with HQ](racing_comms.jpeg)

## Customize your site
On your computer, open the `my_settings` folder.

Open the file `metadata.md` in your favorite Markdown editor. If you don't have a Markdown editor yet, we recommend [using Obsidian](my_posts/reference/configure-obsidian.md).

Otherwise, use a basic text editor like Notepad or TextEdit.

Every content file in Eggspress contains a set of key-pair values in a section called **frontmatter**. This section appears at the top of most content files.

The values you set in **frontmatter** tell Eggspress how to build your site. Learn more about [frontmatter and how it works in Eggspress](my_posts/reference/frontmatter.md).

`metadata.md` contains **frontmatter** for organizing basic information about your site, like its `title` and `description`. We recommend filling out all of these fields.

To set your new site's name to "My New Website," set:

`title: "My New Website"`

> If you are using a custom domain, you **must** provide a value to `metaBaseUrl` (e.g. `https://eggspress.org` is the value for this documentation site). 
> 
> Otherwise, you **must** leave this blank.

Next, open`appearance.md`, which provides lets you determine how your site appears to visitors.

To use the "seaside" color scheme, for example, set:

`colorScheme: "seaside"`

To see a complete list of available color schemes or to create your own, see the `colors` folder in `my_settings`.

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

## Give us feedback
Leave a comment, report a bug, ask questions, or suggest new features by using your Github account to [create an issue](https://github.com/dentonzh/Eggspress/issues/new).

Please also consider giving us a star on [our main repository](https://github.com/dentonzh/Eggspress).

Thanks for using Eggspress!

![First place racer](winner.jpeg)
