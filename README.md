# Project Structure
## Font
Specifies the font file(s) to download, commonly five file formats to choose from: .eot, .woff, .woff2, .svg, and .ttf. The .woff and .woff2 formats 

## img
Specifies the images file(s) to download, commonly seven file formats to choose from: .APNG, .GIF, .JPEG, .PNG, .WebP, .AVIF and .SVG formats

## JS / TS
Put a JavaScript, TypeScript file(s)

## Scss
```
scss/
|
|- abstracts/
|  |- base/ or (variables/)
|    |- _colors.scss        // Colors variables   
|    |- _spacing.scss       // Spacing variables 
|    |- _type-scale.scss    // Type scale variables  
|    |- _type-weight.scss   // Type weight variables 
|    |- _border-radius.scss // Border radius variables  
|  |- tokens/
|    |- _tokens.scss      // Tokens variables 
|  |- _breakpoint.scss    // Breakpoint
|  |- _function.scss      // Function
|  |- _index.scss       
|  |- _mixin.scss         // Mixin
|
|
|- base/
|  |- _base.scss          // Global rules
|  |- _font-face.scss     // Font face
|  |- _index.scss      
|  |- _reset.scss         // Reset
|  |- _root.scss          // Root
|  |- _typography.scss    // Typography rules
|
|
|- components/
|  |- _buttons.scss       // Buttons
|  |- _cards.scss         // Cards
|  |- _headline.scss      // Headline
|  |- _index.scss       
|  |- _slider.scss        // Slider
|
|
|- layout/
|  |- _site-header.scss       // Header
|  |- _site-footer.scss       // Footer
|  |- _index.scss
|
|- pages/
|  |- _home.scss          // Home styles
|
|- blocks
|  |- _hero.scss          // Hero section
|  |- _cta.scss           // CTA section
|
|
|- util
|  |- _auto-grid.scss         // Auto grid
|  |- _color-utilities.scss   // Color utilities
|  |- _display.scss           // Display
|  |- _flow.scss              // Flow
|  |- _font-size.scss         // Font size utilities  
|  |- _font-weight.scss       // Font weight utilities
|  |- _index.scss          
|  |- _spacing.scss           // Spaces utilities
|  |- _wrapper.scss           // Wrapper or Container 
|
|
- style.scss                // Main Sass file
```

## Building and Running
### To install sass
 ```powershell 
 npm install -g sass 
 ```
### Building sass
```powersheel
sass -w src/scss/style.scss src/style/style.css
```