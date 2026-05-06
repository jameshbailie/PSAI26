See https://github.com/orgs/quarto-dev/discussions/1986#discussioncomment-9356439:

## Request

Is there a way to make a Quarto website with a large hero/banner image above/below the nav bar? Something like this:
![image](https://user-images.githubusercontent.com/23343812/185530832-67853166-6d21-4176-bafc-2b23e4c3c980.png)

## Current ability for Quarto websites

Currently it looks like the closest option is to set `title-block-banner` with image on a [per-post basis](https://quarto.org/docs/authoring/title-blocks.html#custom-backgrounds), but that is just put behind an article's title. I'm looking to set a banner image above the title of an article, which is conserved across all parts of a website.

## Close, but not quite options

The cover/banner image at the top of one of the [PDF examples in the gallery](https://quarto.org/docs/gallery/#articles-reports):
![image](https://user-images.githubusercontent.com/23343812/185530048-af1cbf26-1c03-4a3a-a1d9-f3d1a5a9c58d.png)

 and the sidebar logo in the [Openscapes demo site](https://openscapes.github.io/quarto-website-tutorial/) made me think it might be possible


![image](https://user-images.githubusercontent.com/23343812/185530139-5b7aea58-52b8-4be7-9294-ecc1c27b1ebb.png)


## Answer:

I was trying to make this work in a blog (converting to Quarto blog from a Jekyll style, e.g., https://fuhrmanator.github.io/2023/05/22/Open-Educational-Resource-in-French.html)

Since I didn't want to lose the block formatting by using a partial (see https://github.com/quarto-dev/quarto-cli/discussions/1986#discussioncomment-6385055), I made a compromise that uses a **static file name for the banner image**. 

In case anyone wants to try this tweaked CSS setting, inside my blog's `posts/_metadata.yml` I have:

```yml
# include CSS style for title blocks
title-block-banner: "#00000000"
title-block-banner-color: "#ffffff"
include-in-header:
  - text: |
      <style>
      #title-block-header.quarto-title-block.default .quarto-title-meta {
        color: #ffffff;
      }
      .quarto-title-block .quarto-title-banner {
        height: 0;
      }
      #title-block-header {
        background-image: url(./banner-image.jpg);
        background-size: cover;
        background-position-y: center;
        height: 400px;
        opacity: 1; /* Adjust as needed */
        z-index: -1;
      }
      #title-block-header::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: -1;
      }
      </style>
```

As you can see, it loads the `./banner-image.jpg` which is local to each post. In the post YAML I specify `image: banner-image.jpg` to have consistency with the blog's overview. 

It's not super flexible for putting the image wherever you want (with whatever name you want), but it works and it's "good enough" for my blog. I've not deployed it yet (live) because I'm still working on the comment solution and the `aliases:` to make sure links don't break.

Here's a capture of the result:
![image](https://github.com/quarto-dev/quarto-cli/assets/7606540/41e05ace-baa3-4e3d-9cab-7c87f5ff6c50)
