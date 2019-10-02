var cov_10x4lo2az5 = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\functions.ts";
  var hash = "0bbbbbbe0bc102fd91b3263c86c006e4199e80fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\functions.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 20
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 17
        }
      },
      "2": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 68
        }
      },
      "3": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 5,
          column: 44
        }
      },
      "4": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "5": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 16
        }
      },
      "6": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 77
        }
      },
      "7": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 20
          },
          end: {
            line: 1,
            column: 21
          }
        },
        loc: {
          start: {
            line: 1,
            column: 34
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 1
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
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0bbbbbbe0bc102fd91b3263c86c006e4199e80fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_10x4lo2az5.s[0]++;
export const UUID = (): string => {
  cov_10x4lo2az5.f[0]++;
  let result = (cov_10x4lo2az5.s[1]++, '');
  const characters = (cov_10x4lo2az5.s[2]++, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  const charactersLength = (cov_10x4lo2az5.s[3]++, characters.length);
  cov_10x4lo2az5.s[4]++;

  for (var i = (cov_10x4lo2az5.s[5]++, 0); i < 12; i++) {
    cov_10x4lo2az5.s[6]++;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  cov_10x4lo2az5.s[7]++;
  return result;
};