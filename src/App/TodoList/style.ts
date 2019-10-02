var cov_xfv8ayacn = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\App\\TodoList\\style.ts";
  var hash = "f0f72b2ebee8715c5dbec3c6e9528c3bed5785a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\App\\TodoList\\style.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 66,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f0f72b2ebee8715c5dbec3c6e9528c3bed5785a2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

/* Creative Commons Attribution 4.0 International (CC-BY-4.0) */

/* Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) */

/* This source code was getting from https://github.com/tastejs/todomvc-app-css/blob/03e753aa21bd555cbdc2aa09185ecb9905d1bf16/index.css */
import styled from '@emotion/styled';
export const Layout = (cov_xfv8ayacn.s[0]++, styled.div`
  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .toggle-all {
    width: 1px;
    height: 1px;
    border: none; /* Mobile Safari */
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /*
  Hack to remove background from Mobile Safari.
  Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    .toggle-all,
    .todo-list li .toggle {
      background: none;
    }

    .todo-list li .toggle {
      height: 40px;
    }
  }
`);