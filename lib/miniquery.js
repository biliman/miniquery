/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select: function (element) {
    let el = document.querySelectorAll(element)
    return el
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function (element) {
    let elements = SweetSelector.select(element);
    elements.forEach(el => {
      el.style.display = 'none'
    })
  },
  show: function (element) {
    let elements = SweetSelector.select(element);
    elements.forEach(el => {
      el.style.display = ''
    })
  },
  removeClass: function (element, cls) {
    let elements = SweetSelector.select(element);
    elements.forEach(el => {
      el.classList.remove(cls)
    })
  },
  addClass: function (element, cls) {
    let elements = SweetSelector.select(element);
    elements.forEach(el => {
      el.classList.add(cls)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on: function (element, eventName, callback) {
    let elements = SweetSelector.select(element)
    elements.forEach(el => {
      el.addEventListener(eventName, callback)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request: function (options) {
    let req = new XMLHttpRequest()
    console.log(req);
    req.addEventListener('load', options.success)
    req.addEventListener('error', options.fail)
    req.open(options.type, "http://127.0.0.1:8080")
    req.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 var miniquery = function (element) {
   return {
     hide: function () {
       DOM.hide(element)
     },
     show: function () {
       DOM.show(element)
     }
   }
 }
 var $ = miniquery
