var cov_1vrqturusl = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\ErrorBoundary.js";
  var hash = "4bf1390fb20378fbf065e5d418498c697dbfd195";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-outside-src\\src\\ErrorBoundary.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 10
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 34
        }
      },
      "2": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 32
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "4": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 47
        }
      },
      "5": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "6": {
        start: {
          line: 25,
          column: 18
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "7": {
        start: {
          line: 33,
          column: 16
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "8": {
        start: {
          line: 41,
          column: 39
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "9": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 49,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 39
          },
          end: {
            line: 41,
            column: 40
          }
        },
        loc: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 49,
            column: 14
          }
        },
        line: 42
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4bf1390fb20378fbf065e5d418498c697dbfd195"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React, { Component } from 'react';
import styled from '@emotion/styled';

class ErrorBoundary extends Component {
  state = (cov_1vrqturusl.s[0]++, {
    error: null,
    info: null
  });

  componentDidCatch(error, info) {
    cov_1vrqturusl.f[0]++;
    cov_1vrqturusl.s[1]++;
    this.setState({
      error,
      info
    });
  }

  render() {
    cov_1vrqturusl.f[1]++;
    const {
      error
    } = (cov_1vrqturusl.s[2]++, this.state);
    cov_1vrqturusl.s[3]++;

    if (error) {
      cov_1vrqturusl.b[0][0]++;
      cov_1vrqturusl.s[4]++;
      return <ErrorBoundaryFallbackComponent />;
    } else {
      cov_1vrqturusl.b[0][1]++;
    }

    cov_1vrqturusl.s[5]++;
    return this.props.children;
  }

}

export default ErrorBoundary;
const Container = (cov_1vrqturusl.s[6]++, styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`);
const Message = (cov_1vrqturusl.s[7]++, styled.div`
  padding: 40px;
  border: 2px #78909c solid;
  border-radius: 5px;
  font-size: 24px;
  color: #78909c;
`);
cov_1vrqturusl.s[8]++;

const ErrorBoundaryFallbackComponent = () => {
  cov_1vrqturusl.f[2]++;
  cov_1vrqturusl.s[9]++;
  return <Container data-testid="error-boundary-fallback-component">
    <Message>
      Something Error Ooccurring
      <span role="img" aria-label="face-emoji">
        😞
      </span>
    </Message>
  </Container>;
};