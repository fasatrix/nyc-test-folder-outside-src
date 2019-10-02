var cov_2bjelavype = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\App\\Header\\style.ts";
  var hash = "c6519454ac08cc3006d1a55c5b5e96c7faa0d146";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\App\\Header\\style.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 16,
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
    hash: "c6519454ac08cc3006d1a55c5b5e96c7faa0d146"
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
import { base } from '../style';
export const Layout = (cov_2bjelavype.s[0]++, styled.div`
  .new-todo {
    ${base.textInput};
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
`);