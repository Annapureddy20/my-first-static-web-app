import React from 'react';

const Font = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Serving Fonts</title>
            </head>
            <body>
                <center><h1>Serving Fonts</h1></center>
                <h2>Research</h2>
                <p>I referred to the MDN Docs to learn how to change fonts on a webpage based on a given name from the server.</p>
                <h2>Give me a font</h2>
                <p>Here are the steps I followed to get the font:</p>
                <ol>
                    <li>First, choose a font from <a href="https://www.dafont.com/theme.php?cat=402">DAFONT</a></li>
                    <li>Download the chosen font (e.g., BRODIES font) from the DAFONT website.</li>
                    <li>Extract the zip file to obtain the font file (BRODIES.TTF).</li>
                    <li>Save the font file in the 'src' folder of your project.</li>
                    <li>Configure the 'index.css' file with the @font-face and font-family:</li>
                    <ul>
                        <li>
                            In the @font-face rule, set the font-family to <code>"BRODIES"</code>.
                        </li>
                        <li>
                            Set the URL property of @font-face to the location of the BRODIES.TTF file, e.g.,{' '}
                            <code>src: url("BRODIES.TTF") format("woff2");</code>
                        </li>
                    </ul>
                    <li>
                        Configure the HTML tag with the font-family property using the value given in step 6:
                    </li>
                    <ul>
                        <li>
                            In your CSS, apply the font to the HTML tag using <code>font-family: "BRODIES";</code>
                        </li>
                    </ul>
                    <li>Run the application, and you will see the desired font applied.</li>
                </ol>
                

            </body>
        </html>
    );
};

export default Font;