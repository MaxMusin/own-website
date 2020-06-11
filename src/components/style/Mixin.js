// Font-size & Line-height => rem

export const fontSize = fontSize => `font-size: ${fontSize / 16}rem`;
export const lineHeight = lineHeight => `line-height: ${lineHeight / 16}rem`;

/* Just write the "fontsize/lineHeight" in "px" and it will be converted in "rem"

    const Title = styled.h1`
      ${fontSize(16)};
      ${lineHeight(24)};
    `;
*/

// Easy Label centered for wireframes
export function wireframeAlt(text) {
  return `
           &:after{
            position: absolute;
            content: "${text}";
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #F4F6F7; //TODO theme?
            text-align: center;
            ${fontSize(16)};
            ${lineHeight(24)};
            text-transform: uppercase;
           }
  `
};

/* Use (see Video.js):
    ${wireframeAlt("catwalk video")};
*/

export function separator() {
  return `
        content:" ";
        position: absolute;
        right: 0;
        top: 3px;
        bottom: 3px;
        background: #A57347;
        width: 1px;
  `
};

// Ratios use in the whole website, feel free to add some other
export const Width = {
  12: '100%',
  9: '75%',
  8: '66.666667%',
  7: '58.333333%',
  6: '50%',
  4: '33.333333%',
  3: '25%',
  2: '16.666667%',
  1: '8.333333%',
  0: '0'
};
