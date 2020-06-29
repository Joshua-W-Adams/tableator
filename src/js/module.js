/*!
 * Table.js
 * Javascript table component
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// N/A

/* ================================ Variables =============================== */

const state = {
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
  const element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _onHoverDefault(tr, td, rowno, data) {
  if (state.onHoverRow.element !== tr) {
    // clear current styling
    state.onHoverRow.element.style.color = '';
    state.onHoverRow.element.style.backgroundColor = '';
    // set new row
    state.onHoverRow.element = tr;
    // set default styling
    tr.style.backgroundColor = 'rgba(232,240,254)';
    // update data
    state.onHoverRow.data = data;
    // update visual index
    state.onHoverRow.visualIndex = rowno;
  }
}

function _onMouseDownDefault(tr, td, rowno, data) {
  if (state.onMouseDownRow.element !== tr) {
    // clear current styling
    // N/A
    // set new row
    state.onMouseDownRow.element = tr;
    // set default styling
    // N/A
    // update data
    state.onMouseDownRow.data = data;
    // update visual index
    state.onMouseDownRow.visualIndex = rowno;
  }
}

function _onClickDefault(tr, td, rowno, data) {
  if (state.singleClickedRow.element !== tr) {
    // clear current styling
    state.singleClickedRow.element.style.color = '';
    // set new row
    state.singleClickedRow.element = tr;
    // set default styling
    tr.style.color = 'rgba(25,103,210)';
    // update data
    state.singleClickedRow.data = data;
    // update visual index
    state.singleClickedRow.visualIndex = rowno;
  }
}

function _onDblClickDefault(tr, td, rowno, data) {
  if (state.dblClickedRow.element !== tr) {
    // clear current styling
    state.dblClickedRow.element.style.fontWeight = null;
    // set new row
    state.dblClickedRow.element = tr;
    // set default styling
    tr.style.fontWeight = '600';
    // update data
    state.dblClickedRow.data = data;
    // update visual index
    state.dblClickedRow.visualIndex = rowno;
  }
}

function _tableRenderer() {
  const table = {};
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
  const col = {};
  col.className = 'table-table__column';
  col.style = {};
  col.style.height = '48px';
  col.style.textAlign = 'center';
  col.style.borderBottom = 'solid 1px rgba(218,220,224)';
  col.style.borderTop = 'solid 1px rgba(218,220,224)';
  return col;
}

function _rowRenderer() {
  const row = {};
  row.className = 'table-table__row';
  row.style = {};
  row.style.height = '48px';
  return row;
}

function _cellRenderer() {
  const cell = {};
  cell.className = 'table-table__cell';
  cell.style = {};
  cell.style.borderBottom = 'solid 1px #dadce0';
  return cell;
}

function _applyRender(element, properties) {
  const arr = Object.keys(properties);
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i];
    if (typeof properties[prop] === 'object' && properties[prop] !== null) {
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
  let lookup = {};
  if (rowTypeIcons === 'filesystem') {
    lookup = _fileSystemIconLookup();
  }
  return lookup;
}

function _addRowIcons(row, tableCell, rowTypeIcons) {
  const icon = _addElement(tableCell, 'span');
  const lookup = _iconLookup(rowTypeIcons);
  icon.innerHTML = lookup[row.ICON_TYPE] || '';
  icon.style.padding = '0px 5px 0px 5px';
  icon.style.color = 'rgba(95,99,104,1)';
}

function _addCells(tr, data, rowno, options) {
  const cnf = {
    onClick: options.cells.onClick || _onClickDefault,
    onDblClick: options.cells.onDblClick || _onDblClickDefault,
    onHover: options.cells.onHover || _onHoverDefault,
    onMouseDown: options.cells.onMouseDown || _onMouseDownDefault,
    renderer: options.cells.renderer || _cellRenderer,
    rowTypeIcons: options.rows.rowTypeIcons || ''
  };
  const arr = options.headers.sourceNames || Object.keys(data);
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i];
    const value = data[prop];
    // add dom element
    const td = _addElement(tr, 'td');
    if (i === 0) {
      // add row type icons
      _addRowIcons(data, td, cnf.rowTypeIcons);
    }
    // determine cell alignments
    const alignments = options.headers.alignment;
    td.style.textAlign = alignments[i];
    // calculate element css styling with supplied or default renderer
    const render = cnf.renderer(value, rowno, prop);
    // configure element
    td.innerHTML = td.innerHTML + value;
    _applyRender(td, render);
    // apply cell functionality
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
  }
  return tr;
}

function _addRows(table, options) {
  const cnf = { renderer: options.rows.renderer || _rowRenderer };
  const tbody = _addElement(table, 'tbody');
  // Add table rows
  for (let i = 0; i < options.data.length; i++) {
    // add dom element
    const tr = _addElement(tbody, 'tr');
    // calculate element css styling with supplied or default renderer
    const render = cnf.renderer(i);
    _applyRender(tr, render);
    // add table cells
    const row = options.data[i];
    _addCells(tr, row, i, options);
  }
  return tbody;
}

function _addHeaders(table, options) {
  const cnf = {
    names: options.headers.names || Object.keys(options.data[0]),
    renderer: options.headers.renderer || _columnRenderer,
    widths: options.headers.widths,
    display: options.headers.displayNames || false
  };
  const thead = _addElement(table, 'thead');
  for (let i = 0; i < cnf.names.length; i++) {
    // add element to header
    const th = _addElement(thead, 'th');
    let width;
    if (cnf.widths) {
      width = cnf.widths[i];
    }
    // apply header styles
    th.width = width;
    // calculate element css styling with supplied or default renderer
    const render = cnf.renderer(i);
    // configure element
    if (cnf.display) {
      th.innerHTML = cnf.names[i];
    }
    _applyRender(th, render);
  }
  return thead;
}

function _addTable(frag, options) {
  const cnf = { renderer: options.renderer || _tableRenderer };
  const table = _addElement(frag, 'table');
  const render = cnf.renderer();
  _applyRender(table, render);
  return table;
}

function _addHighlight(tdElement, filter) {
  let t = (tdElement.innerText || tdElement.textContent);
  // flags... ig
  // i = case insensitive
  // g = global. Search for ALL matches in string
  let outerHtml = '';
  if (tdElement.firstChild && tdElement.firstChild.outerHTML) {
    outerHtml = tdElement.firstChild.outerHTML;
    // remove chevron from text
    t = t.replace(tdElement.firstChild.innerText, '');
  }
  if (filter !== '') {
    tdElement.innerHTML = outerHtml + t.replace(new RegExp(`(${filter})`, 'ig'), '<span style="background-color: yellow;">$1</span>');
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
  const input = document.getElementById(searchDivId);
  const filter = input.value.toUpperCase();
  // get table rows to search
  const table = document.getElementById(tableDivId);
  const trs = table.getElementsByTagName('tr');
  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < trs.length; i++) {
    let found = false;
    // get all table cells
    const tds = trs[i].getElementsByTagName('td');
    // loop through all table cells
    for (let n = 0; n < tds.length; n++) {
      const text = (tds[n].innerText || tds[n].textContent);
      if (text.toUpperCase().indexOf(filter) > -1) {
        found = true;
        _addHighlight(tds[n], filter);
      } else {
        // strip out highlighting from cells where no match was found
        // tds[n].innerHTML = text;
      }
    }
    // hide / display row
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
  const frag = document.createDocumentFragment();
  // Create table
  const table = _addTable(frag, options);
  // Add table headers
  _addHeaders(table, options);
  // Add table data
  _addRows(table, options);
  // Append fragment to DOM
  const div = document.getElementById(options.div);
  div.appendChild(table);
}

/* =========================== Export Public APIs =========================== */

export default {
  init,
  getState,
  searchTable
};
