var cov_17tt8qmx65 = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\App\\Footer\\FilterLink.tsx";
  var hash = "4d321422a39cf326a9df05cf53063d038570866b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\App\\Footer\\FilterLink.tsx",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "FilterLink",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 52
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 15,
            column: 51
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 15,
            column: 36
          },
          end: {
            line: 15,
            column: 46
          }
        }, {
          start: {
            line: 15,
            column: 49
          },
          end: {
            line: 15,
            column: 51
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 21
          },
          end: {
            line: 24,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 24,
            column: 42
          },
          end: {
            line: 24,
            column: 52
          }
        }, {
          start: {
            line: 24,
            column: 55
          },
          end: {
            line: 24,
            column: 57
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 33,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 33,
            column: 45
          },
          end: {
            line: 33,
            column: 55
          }
        }, {
          start: {
            line: 33,
            column: 58
          },
          end: {
            line: 33,
            column: 60
          }
        }],
        line: 33
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4d321422a39cf326a9df05cf53063d038570866b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { Link } from '@reach/router';
import { Routes } from '../../index';
interface Props {
  path: Routes
}
export default function FilterLink({
  path
}: Props) {
  cov_17tt8qmx65.f[0]++;
  cov_17tt8qmx65.s[0]++;
  return <ul className="filters">
      <li>
        <Link data-cy="all-filter" className={path === '/' ? (cov_17tt8qmx65.b[0][0]++, 'selected') : (cov_17tt8qmx65.b[0][1]++, '')} to="/">
          All
        </Link>
      </li>
      <li>
        <Link data-cy="active-filter" className={path === '/active' ? (cov_17tt8qmx65.b[1][0]++, 'selected') : (cov_17tt8qmx65.b[1][1]++, '')} to="/active">
          Active
        </Link>
      </li>
      <li>
        <Link data-cy="completed-filter" className={path === '/completed' ? (cov_17tt8qmx65.b[2][0]++, 'selected') : (cov_17tt8qmx65.b[2][1]++, '')} to="/completed">
          Completed
        </Link>
      </li>
    </ul>;
}