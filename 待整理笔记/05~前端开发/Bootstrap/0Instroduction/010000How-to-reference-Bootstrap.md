[0.0]: #How-to-reference-Bootstrap
[1.0]: #Referencing-the-CSS-part-of-Bootstrap
[2.0]: #Referencing-the-JavaScript-part-of-Bootstrap

# How to reference Bootstrap
1. [Referencing the CSS part of Bootstrap][1.0]
2. [Referencing the JavaScript part of Bootstrap][2.0]
## Referencing the CSS part of Bootstrap
1. After Boostrsap is downloaded, we always use the file named `boostrap.min.js`

    ```HTML
    <head>
        <link rel="stylesheet" href="/css/bootstrap.min.js">
    </head>
    ```

2. The recommended CDN for Bootstrap
    
    ```HTML
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
    <head>
    ```

#### [⬆ Back to top][0.0]

## Referencing the JavaScript part of Bootstrap
To use the JavaScript in Bootstrap, we not noly need the file named `boostrap.min.js` in Boostarp, but also need the file `popper.min.js` and the **jQuery's slim build** file.

**:exclamation: Note:** To use JS in Booststrp, we must put jQuery first, and then `popper.min.js`, and then `boostrap.min.js`

   
* To get  **jQuery's slim build**:  https://blog.jquery.com

* To get `poper.js`: https://popper.js.org/
    
    **:exclamation:** `Bootstrap.bundle.js` and `Bootstrap.bundle.min.js` include **popper**



* The way doesn't use CDN to implement JavaScript in Bootstrap
    ```HTML
    <body>
    <!-- in the end of the body tag-->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    </body>
    ```

* The way use CDN to implement JavaScript in Bootstrap
    ```HTML
    <body>
    <!-- in the end of the body tag-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    </body>
    ```

#### [⬆ Back to top][0.0]