import e from"react";!function(e,o){void 0===o&&(o={});var r=o.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===r&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}(":root{--whiteText:#fff;--blue:#1976d2;--blueHover:#1565c0;--blueClick:#1565c0;--red:#ff2323;--redHover:#e12120;--redClick:#e12120;--orange:#ffa01b;--orangeHover:#fd7e14;--orangeCLick:#fd7e14;--yellow:#ffe135;--yellowHover:#ffc107;--yellowCLick:#ffc107;--green:#34b334;--greenHover:#28a745;--greenCLick:#28a745;--indigo:#570682;--indigoHover:#420364;--indigoCLick:#420364;--violet:#7f3e98;--violetHover:#602080;--violetCLick:#602080;--gray:#aaa;--grayHover:#6c757d;--grayCLick:#6c757d;--black:#363636;--blackHover:#000;--blackCLick:#000}.button{border:none;border-radius:5px}.blue{background-color:var(--blue)}.blue,.blue:hover{color:var(--whiteText)}.blue:hover{background-color:var(--blueHover)}.blue:active{background-color:var(--blueClick)}.blue:active,.red{color:var(--whiteText)}.red{background-color:var(--red)}.red:hover{background-color:var(--redHover);color:var(--whiteText)}.red:active{background-color:var(--redClick)}.orange,.red:active{color:var(--whiteText)}.orange{background-color:var(--orange)}.orange:hover{background-color:var(--orangeHover);color:var(--whiteText)}.orange:active{background-color:var(--orangeCLick);color:var(--whiteText)}.yellow{background-color:var(--yellow)}.yellow,.yellow:hover{color:var(--whiteText)}.yellow:hover{background-color:var(--yellowHover)}.yellow:active{background-color:var(--yellowCLick)}.green,.yellow:active{color:var(--whiteText)}.green{background-color:var(--green)}.green:hover{background-color:var(--greenHover);color:var(--whiteText)}.green:active{background-color:var(--greenCLick)}.green:active,.indigo{color:var(--whiteText)}.indigo{background-color:var(--indigo)}.indigo:hover{background-color:var(--indigoHover);color:var(--whiteText)}.indigo:active{background-color:var(--indigoCLick);color:var(--whiteText)}.violet{background-color:var(--violet)}.violet,.violet:hover{color:var(--whiteText)}.violet:hover{background-color:var(--violetHover)}.violet:active{background-color:var(--violetCLick)}.gray,.violet:active{color:var(--whiteText)}.gray{background-color:var(--gray)}.gray:hover{background-color:var(--grayHover);color:var(--whiteText)}.gray:active{background-color:var(--grayCLick)}.black,.gray:active{color:var(--whiteText)}.black{background-color:var(--black)}.black:hover{background-color:var(--blackHover);color:var(--whiteText)}.black:active{background-color:var(--blackCLick);color:var(--whiteText)}");const o=({children:o,bgColor:r,btnType:a,size:c})=>e.createElement(e.Fragment,null,e.createElement("button",{className:`button ${r||"blue"} `},o));export{o as Button};