---
slug: '/stories/how-box-model-works'
date: '2022-09-07'
title: 'How Box Model Works'
language: 'english'
---

# How Box Model Works

Hi, today we’ll talk about something every person who writes code for web browsers should understand. We’ll talk about Box Model.

If you have never heard about box model, don’t panic i we’ll cover everything you need to know about Box Model.

So let go.

## What is Box model

The term Box Model refers to behavior of HTML elements in web browsers and how CSS property can change this behavior.

## Types of HTML Elements

To understand how HTML elements are rendered we drive, let’s talk first about types of HTML elements.

In HTML we have two kinds of elements:

1. Blocks elements
2. Inline elements

### Block elements

The elements of type blocks are those which occupy by default 100 %, of the width available in a container, of this fact the elements of type blocks introduce a return to the line thus we can have only one element of type block by line.

You should keep in mind with block elements :

- The box will break onto a new line.
- The **width** and **heigth** properties are respected.
- Padding, margin and border will cause other elements to be pushed away from the box.
- The box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

Among the elements of type blocks, we can quote: `<div>`, `<h1>`, `<p>`, …

Exemple :

```html
<style>
	h1,
	p,
	div {
		border: solid #121212 2px;
		padding: 10px;
	}
</style>
<body>
	<h1>h1</h1>
	<div>div</div>
	<p>p</p>
</body>
```

![box model fig 1.png](https://res.cloudinary.com/dxtggeaor/image/upload/v1662554426/francoisdisubi.com/box%20models/frame_chrome_mac_dark_ukfcxc.png)

### Inline elements

The elements of type inline are that occupy by default only the width of their content, so several elements of type inline can follow each other on a line.

The height and width properties are not applicable to an inline element instead of using these properties you can use the inline-size and block-size properties to define the width and height respectively

You should keep in mind with block elements :

- The box will not break onto a new line.
- The **width** and **heigth** properties will not apply.
- Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
- Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

Among the elements of type inline, we can quote: a, `<a>`, `<span>`, `<em>` and `<strong>`

Exemple :

```jsx
At <strong>211 degrees</strong>, <a href="https://en.wikipedia.org/wiki/Water">water</a>  is <em>hot</em>.
```

![box model fig 2.png](https://res.cloudinary.com/dxtggeaor/image/upload/v1662554426/francoisdisubi.com/box%20models/frame_chrome_mac_dark_1_fgtqke.png)

## Parts of a box

The box model is composed of :

- **Content box**: The area where your content is displayed; size it using properties like `inline-size` and `block-size` or `width` and `height`.
- **Padding box**: The padding sits around the content as white space; size it using `padding` and related properties.
- **Border box**: The border box wraps the content and any padding; size it using `border` and related properties.
- **Margin box**: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using `margin` and related properties.

![box model fig 3.png](https://res.cloudinary.com/dxtggeaor/image/upload/v1662545537/francoisdisubi.com/box%20models/box_model_fig_3_hsb8sc.png)

### **[The standard CSS box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_standard_css_box_model)**

In the standard box model, if you give a box an `inline-size` and a `block-size` (or `width` and a `height`) attributes, this defines the inline-size and block-size (width and height in horizontal languages) of the *content box*. Any padding and border is then added to those dimensions to get the total size taken up by the box (see image below).

If we assume that a box has the following CSS:

```jsx
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

The *actual*
 space taken up by the box will be 410px wide (350 + 25 + 25 + 5 + 5) and 210px high (150 + 25 + 25 + 5 + 5).

## The alternative CSS box model

In the alternative box model, any width is the width of the visible box on the page. The content area width is that width minus the width for the padding and border (see image below). No need to add up the border and padding to get the real size of the box.

To turn on the alternative model for an element, set `box-sizing: border-box` on it:

```jsx
.box {
  box-sizing: border-box;
}
```

If we assume the box has the same CSS as above:

```jsx
.box {
  width: 350px;
  inline-size: 350px;
  height: 150px;
  block-size: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```
