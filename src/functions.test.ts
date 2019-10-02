var cov_24e0d90lie = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\functions.test.ts";
  var hash = "c5f738f63c9fcd92c0352520aa686abc50ffcd92";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\functions.test.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 28
        },
        end: {
          line: 4,
          column: 30
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "3": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 16
        }
      },
      "4": {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 7,
          column: 31
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 22
        }
      },
      "6": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "7": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 51
          },
          end: {
            line: 3,
            column: 52
          }
        },
        loc: {
          start: {
            line: 3,
            column: 57
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 18
          },
          end: {
            line: 11,
            column: 19
          }
        },
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c5f738f63c9fcd92c0352520aa686abc50ffcd92"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import { UUID } from './functions';
cov_24e0d90lie.s[0]++;
test('should generate random 12 length of base62', () => {
  cov_24e0d90lie.f[0]++;
  const results: string[] = (cov_24e0d90lie.s[1]++, []);
  cov_24e0d90lie.s[2]++;

  for (let i = (cov_24e0d90lie.s[3]++, 0); i <= 1000; i++) {
    const uuid: string = (cov_24e0d90lie.s[4]++, UUID());
    cov_24e0d90lie.s[5]++;
    results.push(uuid);
  }

  cov_24e0d90lie.s[6]++;
  results.forEach(uuid => {
    cov_24e0d90lie.f[1]++;
    cov_24e0d90lie.s[7]++;
    return expect(uuid).toMatch(/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{12}$/);
  });
});