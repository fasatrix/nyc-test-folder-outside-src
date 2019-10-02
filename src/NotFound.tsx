var cov_vq8j0qjxl = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\NotFound.tsx";
  var hash = "ff3de3722fa38a642090ddfa05d679b2e477c4df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\NotFound.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 25
          }
        },
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 7,
            column: 8
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ff3de3722fa38a642090ddfa05d679b2e477c4df"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { RouteComponentProps } from '@reach/router';
cov_vq8j0qjxl.s[0]++;
export const NotFound = (props: RouteComponentProps) => {
  cov_vq8j0qjxl.f[0]++;
  cov_vq8j0qjxl.s[1]++;
  return <div data-cy="not-found-page" style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  /* eslint-disable-line prettier/prettier */
  >
    <h1>Page Not Found</h1>
  </div>;
};