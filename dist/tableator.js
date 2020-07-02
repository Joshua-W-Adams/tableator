var tableator =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * index.js is the default 'entry file' for npm.
 * This means that any require('package name') or import 'package name'
 * statements will refer to this file.
 */
var pkg = __webpack_require__(1); // export a file with the same name as the package by default


module.exports = __webpack_require__(2)("./".concat(pkg.name, ".js"));

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tableator\",\"version\":\"1.3.1\",\"description\":\"A simple JavaScript table component\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Joshua-W-Adams/table.js.git\"},\"author\":\"Joshua Adams\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/Joshua-W-Adams/table.js/issues\"},\"homepage\":\"https://github.com/Joshua-W-Adams/table.js#readme\",\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/preset-env\":\"^7.8.4\",\"babel-loader\":\"^8.0.6\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-plugin-import\":\"^2.20.0\",\"express\":\"^4.17.1\",\"gulp\":\"^4.0.2\",\"gulp-concat\":\"^2.6.1\",\"gulp-eslint\":\"^6.0.0\",\"gulp-minify-css\":\"^1.2.4\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^4.0.2\",\"gulp-stylelint\":\"^13.0.0\",\"stylelint\":\"^13.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"webpack-stream\":\"^5.2.1\"},\"dependencies\":{\"gulp-nodemon\":\"^2.5.0\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./tableator.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Table.js
 * Javascript table component
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// N/A

/* ================================ Variables =============================== */
var state = {
  singleClickedRow: {
    visualIndex: null,
    data: {},
    element: {
      style: {}
    }
  },
  dblClickedRow: {
    visualIndex: null,
    data: {},
    element: {
      style: {}
    }
  },
  onHoverRow: {
    visualIndex: null,
    data: {},
    element: {
      style: {}
    }
  },
  onMouseDownRow: {
    visualIndex: null,
    data: {},
    element: {
      style: {}
    }
  }
};
/* ============================= Private Methods ============================ */

function _addElement(parent, type) {
  var element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _onHoverDefault(tr, td, rowno, data) {
  if (state.onHoverRow.element !== tr) {
    // clear current styling
    state.onHoverRow.element.style.color = '';
    state.onHoverRow.element.style.backgroundColor = ''; // set new row

    state.onHoverRow.element = tr; // set default styling

    tr.style.backgroundColor = 'rgba(232,240,254)'; // update data

    state.onHoverRow.data = data; // update visual index

    state.onHoverRow.visualIndex = rowno;
  }
}

function _onMouseDownDefault(tr, td, rowno, data) {
  if (state.onMouseDownRow.element !== tr) {
    // clear current styling
    // N/A
    // set new row
    state.onMouseDownRow.element = tr; // set default styling
    // N/A
    // update data

    state.onMouseDownRow.data = data; // update visual index

    state.onMouseDownRow.visualIndex = rowno;
  }
}

function _onClickDefault(tr, td, rowno, data) {
  if (state.singleClickedRow.element !== tr) {
    // clear current styling
    state.singleClickedRow.element.style.color = ''; // set new row

    state.singleClickedRow.element = tr; // set default styling

    tr.style.color = 'rgba(25,103,210)'; // update data

    state.singleClickedRow.data = data; // update visual index

    state.singleClickedRow.visualIndex = rowno;
  }
}

function _onDblClickDefault(tr, td, rowno, data) {
  if (state.dblClickedRow.element !== tr) {
    // clear current styling
    state.dblClickedRow.element.style.fontWeight = null; // set new row

    state.dblClickedRow.element = tr; // set default styling

    tr.style.fontWeight = '600'; // update data

    state.dblClickedRow.data = data; // update visual index

    state.dblClickedRow.visualIndex = rowno;
  }
}

function _tableRenderer() {
  var table = {};
  table.className = 'table-table';
  table.style = {};
  table.style.fontFamily = 'roboto';
  table.style.fontSize = '14px';
  table.style.overflow = 'scroll';
  table.style.width = '100%';
  table.cellSpacing = '0';
  return table;
}

function _columnRenderer() {
  var col = {};
  col.className = 'table-table__column';
  col.style = {};
  col.style.height = '48px';
  col.style.textAlign = 'center';
  col.style.borderBottom = 'solid 1px rgba(218,220,224)';
  col.style.borderTop = 'solid 1px rgba(218,220,224)';
  return col;
}

function _rowRenderer() {
  var row = {};
  row.className = 'table-table__row';
  row.style = {};
  row.style.height = '48px';
  return row;
}

function _cellRenderer() {
  var cell = {};
  cell.className = 'table-table__cell';
  cell.style = {};
  cell.style.borderBottom = 'solid 1px #dadce0';
  return cell;
}

function _applyRender(element, properties) {
  var arr = Object.keys(properties);

  for (var i = 0; i < arr.length; i++) {
    var prop = arr[i];

    if (_typeof(properties[prop]) === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }

  return element;
}

function _fileSystemIconLookup() {
  return {
    file: '&#128459;',
    folder: '&#128447;'
  };
}

function _iconLookup(rowTypeIcons) {
  var lookup = {};

  if (rowTypeIcons === 'filesystem') {
    lookup = _fileSystemIconLookup();
  }

  return lookup;
}

function _addRowIcons(row, tableCell, rowTypeIcons) {
  var icon = _addElement(tableCell, 'span');

  var lookup = _iconLookup(rowTypeIcons);

  icon.innerHTML = lookup[row.ICON_TYPE] || '';
  icon.style.padding = '0px 5px 0px 5px';
  icon.style.color = 'rgba(95,99,104,1)';
}

function _addCells(tr, data, rowno, options) {
  var cnf = {
    onClick: options.cells.onClick || _onClickDefault,
    onDblClick: options.cells.onDblClick || _onDblClickDefault,
    onHover: options.cells.onHover || _onHoverDefault,
    onMouseDown: options.cells.onMouseDown || _onMouseDownDefault,
    renderer: options.cells.renderer || _cellRenderer,
    rowTypeIcons: options.rows.rowTypeIcons || ''
  };
  var arr = options.headers.sourceNames || Object.keys(data);

  var _loop = function _loop(i) {
    var prop = arr[i];
    var value = data[prop]; // add dom element

    var td = _addElement(tr, 'td');

    if (i === 0) {
      // add row type icons
      _addRowIcons(data, td, cnf.rowTypeIcons);
    } // determine cell alignments


    var alignments = options.headers.alignment;
    td.style.textAlign = alignments[i]; // calculate element css styling with supplied or default renderer

    var render = cnf.renderer(value, rowno, prop); // configure element

    td.innerHTML = td.innerHTML + value;

    _applyRender(td, render); // apply cell functionality


    td.onclick = function onclick() {
      return cnf.onClick(tr, td, rowno, data);
    };

    td.ondblclick = function ondblclick() {
      return cnf.onDblClick(tr, td, rowno, data);
    };

    td.onmouseover = function onmouseover() {
      return cnf.onHover(tr, td, rowno, data);
    };

    td.onmousedown = function onmousedown() {
      return cnf.onMouseDown(tr, td, rowno, data);
    };
  };

  for (var i = 0; i < arr.length; i++) {
    _loop(i);
  }

  return tr;
}

function _addRows(table, options) {
  var cnf = {
    renderer: options.rows.renderer || _rowRenderer
  };

  var tbody = _addElement(table, 'tbody'); // Add table rows


  for (var i = 0; i < options.data.length; i++) {
    // add dom element
    var tr = _addElement(tbody, 'tr'); // calculate element css styling with supplied or default renderer


    var render = cnf.renderer(i);

    _applyRender(tr, render); // add table cells


    var row = options.data[i];

    _addCells(tr, row, i, options);
  }

  return tbody;
}

function _addHeaders(table, options) {
  var cnf = {
    names: options.headers.names || Object.keys(options.data[0]),
    renderer: options.headers.renderer || _columnRenderer,
    widths: options.headers.widths,
    display: options.headers.displayNames || false
  };

  var thead = _addElement(table, 'thead');

  for (var i = 0; i < cnf.names.length; i++) {
    // add element to header
    var th = _addElement(thead, 'th');

    var width = void 0;

    if (cnf.widths) {
      width = cnf.widths[i];
    } // apply header styles


    th.width = width; // calculate element css styling with supplied or default renderer

    var render = cnf.renderer(i); // configure element

    if (cnf.display) {
      th.innerHTML = cnf.names[i];
    }

    _applyRender(th, render);
  }

  return thead;
}

function _addTable(frag, options) {
  var cnf = {
    renderer: options.renderer || _tableRenderer
  };

  var table = _addElement(frag, 'table');

  var render = cnf.renderer();

  _applyRender(table, render);

  return table;
}

function _addHighlight(tdElement, filter) {
  var t = tdElement.innerText || tdElement.textContent; // flags... ig
  // i = case insensitive
  // g = global. Search for ALL matches in string

  var outerHtml = '';

  if (tdElement.firstChild && tdElement.firstChild.outerHTML) {
    outerHtml = tdElement.firstChild.outerHTML; // remove chevron from text

    t = t.replace(tdElement.firstChild.innerText, '');
  }

  if (filter !== '') {
    tdElement.innerHTML = outerHtml + t.replace(new RegExp("(".concat(filter, ")"), 'ig'), '<span style="background-color: yellow;">$1</span>');
  } else {
    tdElement.innerHTML = outerHtml + t;
  }
}
/* ============================== Public Methods ============================ */


function getState() {
  return state;
}

function searchTable(tableDivId, searchDivId) {
  // get filter data
  var input = document.getElementById(searchDivId);
  var filter = input.value.toUpperCase(); // get table rows to search

  var table = document.getElementById(tableDivId);
  var trs = table.getElementsByTagName('tr'); // Loop through all table rows, and hide those who don't match the search query

  for (var i = 0; i < trs.length; i++) {
    var found = false; // get all table cells

    var tds = trs[i].getElementsByTagName('td'); // loop through all table cells

    for (var n = 0; n < tds.length; n++) {
      var text = tds[n].innerText || tds[n].textContent;

      if (text.toUpperCase().indexOf(filter) > -1) {
        found = true;

        _addHighlight(tds[n], filter);
      } else {// strip out highlighting from cells where no match was found
        // tds[n].innerHTML = text;
      }
    } // hide / display row


    if (found) {
      trs[i].style.display = '';
    } else {
      trs[i].style.display = 'none';
    }
  }
}
/**
  * init - constructor for generic table component
  *
  * @param  {type} options {
  *   'div': 'DOM element that table is to be loaded in',
  *   'data': dirData,
  *   'renderer': null,
  *   'headers': {
  *     'names': ['Data Depth', 'Item', 'Description'],
  *     'renderer': null
  *   },
  *   'rows': {
  *     'renderer': null
  *   }
  *   'cells': {
  *     'onClick': null,
  *     'onDblClick': null,
  *     'onHover': null,
  *     'renderer': null
  *   }
  * }
  * @return {}
  */


function init(options) {
  // Create DOM fragment
  var frag = document.createDocumentFragment(); // Create table

  var table = _addTable(frag, options); // Add table headers


  _addHeaders(table, options); // Add table data


  _addRows(table, options); // Append fragment to DOM


  var div = document.getElementById(options.div);
  div.appendChild(table);
}
/* =========================== Export Public APIs =========================== */


module.exports = {
  init: init,
  getState: getState,
  searchTable: searchTable
};

/***/ })
/******/ ]);
//# sourceMappingURL=tableator.js.map