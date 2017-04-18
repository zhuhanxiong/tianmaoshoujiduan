;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pingguoicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M825.569672 857.874425c-47.134507 71.796186-94.26799 107.421568-140.854005 107.421568-18.634406 0-43.845601-6.02932-76.728522-17.538445-32.336476-12.057617-60.287061-17.538445-82.757842-17.538445-21.923312 0-48.229444 6.028297-77.825506 18.085914-30.144554 12.605086-54.258765 18.634406-72.344678 18.634406-56.450686 0-110.709451-47.681976-164.967192-141.948943-53.162804-94.26799-80.56592-185.794543-80.56592-275.677667 0-83.853803 20.826328-151.813614 61.931514-204.976418 41.104163-52.614311 92.623537-78.921467 155.649989-78.921467 26.855648 0 58.643632 5.480828 97.007381 16.441461 37.817304 10.961656 63.027475 16.441461 75.632561 16.441461 15.893992 0 42.201148-6.028297 78.373998-18.633383 36.172851-12.057617 67.959811-18.634406 94.815459-18.634406 43.845601 0 82.757842 12.057617 116.737748 35.624359 19.181875 13.153578 38.364773 31.787984 56.998155 54.806233-28.499078 24.115234-49.325405 45.490054-62.478983 64.671928-23.566742 33.979906-35.624359 71.796186-35.624359 113.449865 0 44.941562 12.605086 86.046748 37.816281 122.218576 25.211195 36.172851 54.258765 59.192124 86.594217 69.056795C879.279944 764.154927 857.356632 810.19245 825.569672 857.874425zM671.013597 152.513556c-10.961656 27.403117-27.950586 52.614311-50.969858 75.632561-19.730367 19.730367-39.461757 32.883945-59.192124 39.461757-12.605086 3.836375-31.239492 7.124258-56.998155 9.31618 1.095961-54.257741 15.3455-101.392248 42.748616-140.852982 27.403117-39.461757 73.441663-66.316381 137.016607-81.114412 1.095961 4.932336 2.192945 8.768711 2.741437 12.057617 0 3.836375 0.547469 7.125281 0.547469 10.961656C686.908612 100.447736 681.427784 125.658931 671.013597 152.513556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nvzhuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M839.470263 765.924223c-0.283456-1.842974-7.283894-45.784766-35.084053-103.046934-16.261359-33.491789-36.362162-64.785515-59.745732-93.013417-28.993335-34.999119-63.124689-65.338101-101.45774-90.190115-2.225691-1.956561-11.470239-10.579963-18.264992-24.321942-3.865028-7.814989-6.27389-15.898085-7.242961-24.215518 0.156566-0.151449 0.317225-0.297782 0.473791-0.449231l-0.592494-0.611937c-1.440815-14.198374 1.312902-29.074176 8.266267-44.474934 32.648584-72.311933 58.823734-157.721161 57.157791-186.507788l-0.862647-14.901385L580.474534 157.944242l-16.869203-4.316306-7.001461 15.936971c-7.389294 16.823154-29.591969 51.851948-51.054793 52.753481-0.279363 0.01228-0.559748 0.017396-0.840134 0.017396-16.122189 0-35.44221-19.241226-54.519708-54.347792l-7.934716-14.602579-116.774587 34.983769 0.376577 15.615653c0.069585 2.869351 2.095731 71.113641 36.944424 144.940067 15.617699 33.084513 27.64564 60.32083 28.67918 84.582397 0.687662 16.140609-2.440585 38.812981-32.995485 71.13206-12.890588 13.634532-27.730575 26.13217-43.440371 39.364543-27.459399 23.12672-55.855122 47.041386-80.004125 81.519642-27.66099 39.492456-44.218084 85.85232-50.616818 141.727908l-0.112564 0.985444-0.017396 0.991584c-0.054235 3.131317 0.5137 19.522636 17.029862 34.770921 24.26566 22.405289 70.323649 30.482245 136.898927 24.012903 21.856797-2.128477 31.549553 2.876514 47.602158 11.162224 22.509666 11.618619 53.336766 27.530007 125.910665 27.530007 59.814294 0 103.956653-33.79878 114.77607-42.917462 7.772011-3.330862 47.767933-17.412578 122.190947 7.049556 28.421306 9.341762 47.836495 2.669806 59.121516-4.571109 26.78811-17.189498 31.328519-51.116191 31.758308-54.928007l0.305969-2.713808L839.470263 765.924223zM368.034121 218.350007l54.56064-16.34527c25.901926 41.965787 54.364165 62.531172 84.788082 61.20599 39.038108-1.713015 66.039066-39.153742 78.751598-61.529355l54.406121 14.048971c-5.14416 28.157293-22.63758 87.939865-52.024887 153.026232-7.074116 15.668865-10.639315 30.278607-11.816117 43.62559-46.962591 35.404348-109.937878 35.1915-147.136082-2.711761-5.055133-24.526603-16.2061-49.529043-29.747511-78.216409C378.042055 285.323351 370.56271 240.901629 368.034121 218.350007zM785.617751 791.879362c-5.53097 3.493567-13.651928 3.518127-24.134677 0.071631-42.126446-13.846356-80.567967-18.885116-114.2593-14.975063-26.071795 3.024893-39.887452 10.44591-42.391483 11.903098l-1.944282 1.130753-1.651616 1.52575c-0.370437 0.342808-37.664831 34.236755-89.50143 34.236755-62.633502 0-86.276992-12.20395-107.136066-22.971178-15.459087-7.978718-31.370475-16.191774-57.177234-16.191774-4.120854 0-8.495488 0.208754-13.159718 0.662079-55.921637 5.435803-83.483366-1.240247-96.757694-7.794523-8.746198-4.320399-11.346419-8.608052-12.0832-10.372232 13.07683-107.119693 65.387219-151.175071 115.990734-193.793728 15.893992-13.385868 32.328289-27.226085 46.816259-42.551118 22.682605-23.992437 36.310997-47.28391 41.650609-71.614038 21.048385 12.025894 45.299719 18.36937 71.053266 18.36937 2.075265 0 4.168949-0.041956 6.264681-0.124843 26.095331-1.033539 51.613518-8.489348 74.664513-21.517059 1.876744 5.757121 4.073782 10.984169 6.365988 15.620769 11.849886 23.964808 28.310789 37.332257 30.148647 38.778188l0.757247 0.595564 0.808412 0.521886c34.965349 22.529109 66.10558 50.062186 92.553952 81.83482 21.239743 25.51614 39.543621 53.832046 54.402027 84.164888 21.50785 43.902906 29.554106 79.551824 31.572066 89.805352C797.148365 775.403109 793.299711 787.02889 785.617751 791.879362z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M913.066667 520.533333 558.933333 874.666667c0 0-19.2 21.333333-46.933333 21.333333-25.6 0-46.933333-21.333333-46.933333-21.333333L110.933333 520.533333c0 0-68.266667-36.266667-68.266667-162.133333C42.666667 232.533333 147.2 128 273.066667 128c64 0 121.6 25.6 162.133333 66.133333l74.666667 85.333333 74.666667-85.333333c42.666667-40.533333 98.133333-66.133333 162.133333-66.133333 128 0 230.4 104.533333 230.4 232.533333C981.333333 486.4 913.066667 520.533333 913.066667 520.533333zM750.933333 211.2c-40.533333 0-76.8 17.066667-102.4 42.666667l-128 125.866667-12.8 0-128-125.866667c-25.6-25.6-61.866667-42.666667-102.4-42.666667C192 211.2 125.866667 277.333333 125.866667 360.533333c0 34.133333 12.8 66.133333 34.133333 91.733333L512 802.133333l352-352c0 0 34.133333-21.333333 34.133333-91.733333C898.133333 277.333333 832 211.2 750.933333 211.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M707.732381 707.721637c-36.031635 0-65.243957 29.208229-65.243957 65.239863s29.212322 65.243957 65.243957 65.243957 65.239863-29.212322 65.239863-65.243957S743.764016 707.721637 707.732381 707.721637L707.732381 707.721637zM394.577149 707.721637c-36.031635 0-65.243957 29.208229-65.243957 65.239863s29.212322 65.243957 65.243957 65.243957c36.030611 0 65.23884-29.212322 65.23884-65.243957S430.60776 707.721637 394.577149 707.721637L394.577149 707.721637zM872.900142 311.197648c-3.281743-5.432733-8.773827-9.78997-16.408715-13.415544-7.706519-3.604084-18.268062-5.431709-32.181957-5.431709L317.653175 292.350394l-4.421706-27.53717-2.929726-21.394263c-1.071402-6.886851-1.782599-12.319583-2.925632-16.300244l-3.637854-12.335956c-1.463328-4.708232-3.997034-9.417487-7.278777-13.766538-3.673669-4.357238-8.41874-7.966439-14.271028-10.868535-5.847172-2.902096-13.873985-4.353145-23.759123-4.353145l-74.881454 0c-11.304464 0-20.086477 3.254114-27.006074 9.417487-6.595208 6.17156-9.881045 14.137998-9.881045 23.923876 0 4.705162 0.747014 10.161431 1.818415 15.945157 1.103124 5.808286 3.641947 11.239995 6.567579 16.320711 3.27765 5.076622 7.343245 9.413394 12.411681 13.043061 4.78498 3.625574 10.988262 5.432733 18.263969 5.432733l55.550177 0 32.142048 163.101705 11.700483 61.97347 10.596336 55.818283 8.382924 41.695634 4.03285 21.008476c1.459235 7.256264 3.673669 14.866592 6.204305 23.200398 2.925632 8.335852 6.211469 15.945157 10.956539 22.829961 4.384867 6.882757 9.881045 12.685927 16.444531 17.044188 6.599302 4.353145 14.982226 6.52767 24.863271 6.52767l387.936403 0c13.910824 0 23.399943-3.629667 27.753087-10.512425 4.780887-6.886851 7.351432-15.233959 7.351432-25.003464 0-1.812275-0.211824-3.437286-0.411369-5.080715L381.525901 642.48075l0-24.656563-0.695848 0-0.24764-1.441838 385.0384 0c22.159696-2.564405 24.334221-35.950793 42.211381-80.132038 11.060917-33.131585 21.662369-65.550948 24.152073-72.821539l17.547655-48.206932 15.697517-44.577265 9.525957-26.825972c1.427512-4.340865 2.174526-9.417487 2.530636-15.581883C877.645213 322.063113 876.181885 316.629357 872.900142 311.197648L872.900142 311.197648z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwudai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.717 1019.417H193.694c-27.1 0-49.157-22.057-49.157-49.158V320.885c0-27.101 22.056-49.157 49.157-49.157h669.023c27.101 0 49.157 22.056 49.157 49.157v649.373c0 27.102-22.056 49.159-49.157 49.159z m-669.023-698.93l-0.399 649.772 669.422 0.4c0.218 0 0.399-0.182 0.399-0.4V320.885l-669.422-0.399z m82.915-21.44l-49.34-4.743C243.192 128.513 374.67 3.494 533.106 3.494c153.426 0 284.41 120.59 304.7 280.502l-49.17 6.243C771.49 155.022 661.632 53.052 533.105 53.052c-132.773 0-243.043 105.757-256.497 245.995z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)